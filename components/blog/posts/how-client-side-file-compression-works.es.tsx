import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-client-side-file-compression-works",
  title:
    "Cómo funciona la compresión de archivos en el cliente (y por qué es más privada)",
  description:
    "Cómo FileShrinking comprime imágenes, vídeo y PDF íntegramente en tu navegador con WebAssembly y Web Workers, y por qué eso mantiene tus archivos privados.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "maya",
  tags: ["Privacidad", "Cómo funciona"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        Cuando comprimes una foto o reduces un PDF en la mayoría de los sitios
        web, tu archivo hace un viaje de ida y vuelta: se sube a un servidor, se
        procesa en algún centro de datos y se te devuelve una versión más
        pequeña. Funciona, pero significa que una copia de tu archivo privado
        vive brevemente en un ordenador que no controlas. FileShrinking adopta
        un enfoque distinto: cada byte de la compresión ocurre{" "}
        <strong>dentro de la pestaña de tu propio navegador</strong>, y tus
        archivos nunca salen de tu dispositivo. Este artículo explica exactamente
        cómo es posible, qué tecnologías del navegador lo hacen funcionar y las
        compensaciones honestas que implica.
      </p>

      <h2 id="two-models">Dos formas de comprimir un archivo en la web</h2>
      <p>
        El modelo tradicional es del <strong>lado del servidor</strong>. Tu
        navegador envía el archivo original por la red; un backend que ejecuta
        una herramienta como ImageMagick o FFmpeg hace el trabajo pesado; el
        resultado se transmite de vuelta. La máquina del usuario apenas se
        inmuta, y el servidor puede ser enormemente potente. El coste son la
        privacidad y la confianza: tus datos se transmiten, se quedan (aunque sea
        temporalmente) en el disco de otra persona, y tienes que creer su palabra
        sobre lo que ocurre con ellos después.
      </p>
      <p>
        El modelo más reciente es del <strong>lado del cliente</strong>. Los
        mismos algoritmos de compresión se ejecutan directamente en tu
        dispositivo, en el navegador, sin ningún paso de subida. Durante años
        esto fue poco práctico: JavaScript por sí solo era demasiado lento para
        ejecutar un códec de imagen o vídeo serio a una velocidad utilizable.
        Eso cambió cuando los navegadores ganaron la capacidad de ejecutar
        código compilado, casi nativo, en la web. Hoy un portátil o un teléfono
        modernos pueden hacer el trabajo que antes requería un servidor, y
        FileShrinking está construido íntegramente sobre este modelo.
      </p>

      <h2 id="webassembly">
        WebAssembly: códecs reales ejecutándose en el navegador
      </h2>
      <p>
        La tecnología que hace viable la compresión en el cliente es{" "}
        <strong>WebAssembly</strong> (a menudo abreviado como Wasm). Es un
        formato de instrucciones binarias compacto y de bajo nivel que los
        navegadores pueden ejecutar a velocidades cercanas al código nativo. De
        forma crucial, permite a los desarrolladores tomar códecs escritos en C,
        C++ o Rust (y refinados durante décadas) y compilarlos para que se
        ejecuten en la web sin reescribirlos en JavaScript.
      </p>
      <p>
        Así es como los mismos motores de compresión probados que encontrarías
        en software profesional de escritorio acaban en una pestaña del
        navegador:
      </p>
      <ul>
        <li>
          <strong>MozJPEG</strong> para una codificación JPEG de alta calidad
          que exprime más de cada kilobyte.
        </li>
        <li>
          <strong>OxiPNG</strong> para la optimización PNG sin pérdidas.
        </li>
        <li>
          <strong>libwebp</strong> y los codificadores AVIF para los formatos
          modernos <Link href="/es/compress-webp">WebP</Link> y{" "}
          <Link href="/es/compress-avif">AVIF</Link>.
        </li>
        <li>
          <strong>FFmpeg</strong>, compilado a WebAssembly, para transcodificar
          y reducir vídeo.
        </li>
      </ul>
      <p>
        Para una referencia técnica más profunda, la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/WebAssembly"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentación de WebAssembly de MDN
        </a>{" "}
        es la fuente canónica sobre cómo funciona el formato y por qué es rápido.
      </p>

      <h2 id="web-workers">
        Web Workers: mantener la página con buena respuesta
      </h2>
      <p>
        La compresión es computacionalmente pesada. Si ejecutaras una
        transcodificación de vídeo en el hilo principal del navegador, toda la
        página se congelaría: los botones dejarían de responder, el
        desplazamiento daría tirones y las barras de progreso se bloquearían.
        Para evitarlo, FileShrinking ejecuta el trabajo en un hilo separado
        usando <strong>Web Workers</strong>.
      </p>
      <p>
        Un Web Worker es un contexto de JavaScript en segundo plano que se
        ejecuta en paralelo con la interfaz de usuario. El hilo principal entrega
        el archivo (y el códec Wasm) al worker, el worker procesa la compresión y
        devuelve el resultado terminado cuando acaba. Mientras tanto, la interfaz
        permanece fluida y puede mostrar el progreso en tiempo real. La{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          target="_blank"
          rel="noopener noreferrer"
        >
          guía de MDN sobre el uso de Web Workers
        </a>{" "}
        cubre en detalle el modelo de paso de mensajes. Los datos binarios
        grandes se pueden mover entre hilos de forma eficiente mediante objetos
        transferibles, de modo que el archivo no tiene que copiarse byte a byte
        solo para cruzar la frontera entre hilos.
      </p>

      <h2 id="decoding">Leer y decodificar archivos sin la red</h2>
      <p>
        Antes de poder comprimir nada, el navegador tiene que leer tu archivo en
        memoria y decodificarlo. Esto se apoya en una pequeña familia de APIs web
        estándar, ninguna de las cuales implica un servidor:
      </p>
      <ul>
        <li>
          <strong>Las APIs File y Blob</strong> representan el archivo que
          seleccionas o arrastras. Exponen los bytes en bruto como un{" "}
          <code>ArrayBuffer</code> sobre el que los códecs pueden trabajar
          directamente, todo en memoria.
        </li>
        <li>
          <strong>createImageBitmap</strong> decodifica eficientemente una
          imagen a una forma lista para procesar, y puede hacerlo fuera del hilo
          principal.
        </li>
        <li>
          <strong>OffscreenCanvas</strong> permite al navegador dibujar,
          redimensionar y recodificar datos de imagen dentro de un worker, sin
          tocar nunca la página visible.
        </li>
      </ul>
      <p>
        En conjunto, la cadena de procesamiento tiene este aspecto: sueltas un
        archivo, el navegador lee sus bytes localmente, un worker lo decodifica,
        el códec Wasm lo recodifica con la calidad que elijas y se te devuelve un
        nuevo <code>Blob</code> para que lo descargues. En ningún momento el
        archivo viaja a ninguna parte. Si te interesan las decisiones de calidad
        en ese paso de recodificación, nuestra guía sobre{" "}
        <Link href="/es/blog/lossy-vs-lossless-compression">
          compresión con pérdidas frente a sin pérdidas
        </Link>{" "}
        explica qué se descarta realmente y por qué.
      </p>

      <h2 id="privacy">Por qué esto es genuinamente más privado</h2>
      <p>
        El beneficio de privacidad del modelo del lado del cliente no es un
        eslogan de marketing: es una consecuencia directa de la arquitectura.
        Como tu archivo solo se lee en la memoria local y se recodifica en tu
        dispositivo:
      </p>
      <ul>
        <li>
          <strong>No se transmite nada.</strong> No hay subida, así que no hay
          ninguna copia de tu archivo en tránsito que interceptar ni ninguna
          copia en reposo en un servidor que pueda ser vulnerada, vendida o
          requerida judicialmente.
        </li>
        <li>
          <strong>Funciona sin conexión.</strong> Una vez que la página y sus
          códecs Wasm se han cargado, puedes desconectarte por completo de
          internet y las herramientas siguen funcionando. Esa es la prueba más
          sencilla de que no se está produciendo ninguna subida: puedes
          comprobarlo tú mismo en la pestaña de red de tu navegador.
        </li>
        <li>
          <strong>No hay nada que retener.</strong> Cuando cierras la pestaña,
          los datos del archivo desaparecen de la memoria. No hay registros de
          servidor que vinculen tus documentos con tu identidad.
        </li>
      </ul>
      <p>
        Y como FileShrinking es{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          totalmente de código abierto bajo la licencia MIT
        </a>
        , no tienes que aceptar estas afirmaciones por fe. Cualquiera puede leer
        el código, confirmar que no existe una ruta de subida y verificar
        exactamente cómo se comporta la cadena de compresión. La privacidad
        auditable es la más sólida.
      </p>

      <h2 id="tradeoffs">Las compensaciones honestas</h2>
      <p>
        La compresión en el cliente no es magia, y es justo ser claros sobre
        dónde el modelo de servidor todavía tiene ventajas:
      </p>
      <ul>
        <li>
          <strong>Velocidad en trabajos muy grandes.</strong> Un centro de datos
          puede dedicar muchos más núcleos a un vídeo largo de los que tiene tu
          portátil. Para la mayoría de las imágenes y los clips cortos la
          diferencia es imperceptible, pero un vídeo de larga duración será más
          lento en el navegador que en una granja de servidores.
        </li>
        <li>
          <strong>Límites de memoria.</strong> Todo ocurre en la RAM de tu
          dispositivo. Los archivos extremadamente grandes (por ejemplo, un vídeo
          de varios gigabytes en un teléfono con poca memoria) pueden chocar con
          los topes de memoria del navegador que un servidor no tendría.
        </li>
        <li>
          <strong>Coste de la primera carga.</strong> Los códecs Wasm tienen que
          descargarse la primera vez que usas una herramienta. Después se quedan
          en caché, de modo que las visitas posteriores son instantáneas, pero la
          primera ejecución paga una descarga única.
        </li>
      </ul>
      <p>
        Para la inmensa mayoría de las tareas cotidianas (optimizar fotos para la
        web, recortar un PDF hasta el tamaño de un correo, reducir una grabación
        de pantalla) estas compensaciones merecen la pena con creces, y obtienes
        privacidad gratis.
      </p>

      <h2 id="try-it">Compruébalo tú mismo</h2>
      <p>
        La mejor manera de entender la compresión en el cliente es usarla. Prueba
        el <Link href="/es/image-compressor">compresor de imágenes</Link>, el{" "}
        <Link href="/es/video-compressor">compresor de vídeo</Link> o el{" "}
        <Link href="/es/pdf-compressor">compresor de PDF</Link>, y luego abre las
        herramientas de desarrollo de tu navegador, observa la pestaña de red y
        confirma que no se sube nada mientras tu archivo se encoge. Todo se
        ejecuta localmente, el código está abierto para que cualquiera lo
        inspeccione, y tus archivos se quedan exactamente donde corresponde:
        contigo.
      </p>
    </>
  );
}
