import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir JPEG — Compresor de JPG gratis",
  metaDescription:
    "Comprime imágenes JPG y JPEG en tu navegador con MozJPEG. Calidad ajustable, procesamiento por lotes y cero subidas: tus fotos no salen de tu dispositivo.",
  heading: "Compresor de JPEG",
  intro: (
    <>
      Comprime imágenes JPG y JPEG directamente en tu navegador con MozJPEG, el
      mismo codificador en el que confían fotógrafos y desarrolladores web.
      Elige un nivel de calidad, suelta tus fotos y descarga archivos más
      pequeños en segundos: nunca se sube nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir un JPEG",
    description:
      "Comprime imágenes JPG/JPEG localmente en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tus imágenes",
        text: "Arrastra y suelta tus archivos JPG en la zona de carga, haz clic para examinar o pega desde el portapapeles. Puedes añadir varias a la vez.",
      },
      {
        name: "Elige un nivel de calidad",
        text: "Usa el control deslizante de calidad o un ajuste predefinido. Alrededor de 75 es un excelente equilibrio entre tamaño y calidad visual para la mayoría de las fotos.",
      },
      {
        name: "Deja que se comprima en tu dispositivo",
        text: "Cada imagen se comprime localmente con MozJPEG. Verás el tamaño original, el tamaño nuevo y el porcentaje ahorrado de cada archivo.",
      },
      {
        name: "Descarga tus archivos",
        text: "Descarga las imágenes una a una o todas a la vez en un ZIP. Ajusta la calidad y vuelve a comprimir cuando quieras.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis archivos JPEG a un servidor?",
      a: (
        <>
          No. Cada imagen se comprime localmente en tu navegador con
          WebAssembly. Tus archivos nunca salen de tu dispositivo y no hay
          ningún servidor al que subirlos: incluso puedes desconectarte de
          internet después de que cargue la página y seguirá funcionando.
        </>
      ),
      text: "No. Cada imagen se comprime localmente en tu navegador con WebAssembly. Tus archivos nunca salen de tu dispositivo y no hay ningún servidor al que subirlos. Puedes desconectarte de internet después de que cargue la página y seguirá funcionando.",
    },
    {
      q: "¿El compresor de JPEG es realmente gratis?",
      a: (
        <>
          Sí: es completamente gratis, sin registro, sin marcas de agua y sin
          límites de número de archivos ni de tamaño más allá de lo que pueda
          gestionar la memoria de tu dispositivo. El sitio se mantiene con
          anuncios poco intrusivos.
        </>
      ),
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua y sin límites de número de archivos ni de tamaño más allá de lo que pueda gestionar la memoria de tu dispositivo. El sitio se mantiene con anuncios poco intrusivos.",
    },
    {
      q: "¿Comprimir reducirá la calidad de mis fotos?",
      a: (
        <>
          La compresión JPEG es con pérdida, por lo que se descartan algunos
          datos. Con una calidad de 70-80 la diferencia suele ser invisible
          mientras que el archivo es mucho más pequeño. Baja el control de
          calidad para obtener archivos más pequeños o súbelo para mantenerte
          más cerca del original.
        </>
      ),
      text: "JPEG es un formato con pérdida, por lo que se descartan algunos datos. Con una calidad de 70-80 la diferencia suele ser invisible mientras que el archivo es mucho más pequeño. Baja el control de calidad para obtener archivos más pequeños o súbelo para mantenerte más cerca del original.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo comprimir?",
      a: (
        <>
          No hay un límite estricto: depende de la memoria disponible de tu
          dispositivo. Móviles y portátiles gestionan sin problemas fotos
          habituales (unos pocos megabytes) e incluso imágenes grandes de 20-50
          MP. Los lotes muy grandes se procesan de un archivo en archivo para
          mantener bajo el uso de memoria.
        </>
      ),
      text: "No hay un límite estricto; depende de la memoria disponible de tu dispositivo. Las fotos habituales de unos pocos megabytes e incluso las imágenes grandes de 20-50 MP funcionan bien. Los lotes grandes se procesan de un archivo en archivo para mantener bajo el uso de memoria.",
    },
    {
      q: "¿Puedo comprimir muchos JPEG a la vez?",
      a: (
        <>
          Sí. Suelta tantos archivos como quieras y se ponen en cola y se
          comprimen de forma secuencial; luego puedes descargarlos
          individualmente o todos juntos en un ZIP.
        </>
      ),
      text: "Sí. Añade tantos archivos como quieras; se ponen en cola y se comprimen uno a uno, y luego se descargan individualmente o juntos en un ZIP.",
    },
    {
      q: "¿Conserva mi original si comprimir hiciera el archivo más grande?",
      a: (
        <>
          Sí. Si un JPEG recodificado fuera más grande que tu original (algo
          habitual con imágenes ya optimizadas), la herramienta conserva tu
          archivo original y te avisa de que ya estaba bien optimizado.
        </>
      ),
      text: "Sí. Si un JPEG recodificado fuera más grande que el original, la herramienta conserva tu archivo original y avisa de que ya estaba bien optimizado.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué comprimir imágenes JPEG?</h2>
      <p>
        JPEG (también escrito JPG) es el formato más común para las fotografías
        en la web, pero las imágenes de cámaras y móviles suelen ser mucho más
        grandes de lo necesario, con frecuencia de varios megabytes cada una.
        Las imágenes grandes ralentizan los sitios web, llenan los adjuntos de
        correo, consumen el almacenamiento en la nube y desperdician datos
        móviles. Comprimirlas conserva la calidad visual que te importa mientras
        reduce drásticamente el tamaño del archivo, a menudo entre un 60 y un
        80 %.
      </p>
      <p>
        Como esta herramienta se ejecuta por completo en tu dispositivo, también
        es la forma más privada de hacerlo. Los compresores en línea
        tradicionales suben tus fotos a un servidor remoto, las procesan allí y
        las devuelven. Aquí, tus imágenes se leen en memoria, se comprimen con
        una versión en WebAssembly de MozJPEG y se te devuelven directamente:
        nunca pasan por una red.
      </p>

      <h2 id="lossy">Compresión con pérdida y calidad: qué esperar</h2>
      <p>
        JPEG es un formato <strong>con pérdida</strong>: para hacer los archivos
        más pequeños descarta de forma permanente el detalle de la imagen que el
        ojo humano tiene menos probabilidades de notar. El control de calidad
        determina lo agresivo que es ese proceso. Los valores más altos
        conservan más detalle y producen archivos más grandes; los valores más
        bajos ahorran más espacio pero pueden introducir
        &ldquo;artefactos&rdquo; visibles, como bloques o halos alrededor de los
        bordes nítidos.
      </p>
      <p>
        Para la mayoría de las fotografías, una calidad de{" "}
        <strong>70-80</strong> es el punto ideal: el resultado es visualmente
        indistinguible del original a tamaños de visualización normales y, sin
        embargo, ocupa una fracción del tamaño. Baja a 50-60 cuando el tamaño
        reducido importe más que la fidelidad perfecta (por ejemplo, en
        miniaturas) y mantente en 85-90 para imágenes con degradados finos o
        texto, donde los artefactos son más evidentes. La compresión es{" "}
        <strong>acumulativa</strong>, así que vuelve a comprimir siempre desde
        tu original de máxima calidad y no desde una copia ya comprimida.
      </p>

      <h2 id="format">¿Qué es un JPEG y cuándo deberías usarlo?</h2>
      <p>
        JPEG fue estandarizado por el Joint Photographic Experts Group y utiliza
        la transformada de coseno discreta para comprimir de forma eficiente
        imágenes de tono continuo. Destaca con las fotografías y la imaginería
        realista de transiciones de color suaves, por eso casi todas las cámaras
        guardan JPEG de forma predeterminada. Puedes consultar los detalles
        técnicos en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          la referencia de formatos de imagen de MDN
        </a>
        .
      </p>
      <p>
        Sin embargo, JPEG no siempre es la opción adecuada. No admite
        transparencia y gestiona mal los gráficos planos, los logotipos, las
        capturas de pantalla y el texto: estos se comprimen mejor y se ven más
        nítidos como <Link href="/es/compress-png">PNG</Link>. Y para conseguir
        las fotos más pequeñas posibles con compatibilidad con los navegadores
        modernos, ganan los formatos más nuevos: un archivo{" "}
        <Link href="/es/compress-webp">WebP</Link> suele ser entre un 25 y un
        35 % más pequeño que un JPEG equivalente, y{" "}
        <Link href="/es/compress-avif">AVIF</Link> puede ser aún más pequeño. Si
        estás optimizando para la web, prueba a convertir con nuestro{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link> y compara.
      </p>

      <h2 id="tips">Consejos para obtener los mejores resultados</h2>
      <ul>
        <li>
          <strong>Empieza desde el original.</strong> Volver a guardar un JPEG
          repetidamente lo degrada. Conserva una copia maestra y comprime a
          partir de ella.
        </li>
        <li>
          <strong>Cambia el tamaño antes de comprimir.</strong> Si una imagen se
          va a mostrar a 1200 px de ancho, no hace falta entregar un archivo de
          6000 px. Usa la opción de cambio de tamaño integrada para un ahorro
          mucho mayor que el de la calidad por sí sola.
        </li>
        <li>
          <strong>Usa los ajustes predefinidos para comparar.</strong> Prueba
          primero &ldquo;Equilibrado&rdquo;, luego vuelve a comprimir con
          &ldquo;Más pequeño&rdquo; y comprueba si notas la diferencia a tu
          tamaño de visualización.
        </li>
        <li>
          <strong>Agrupa imágenes similares por lotes.</strong> Las fotos de la
          misma cámara suelen verse genial con el mismo ajuste de calidad, así
          que puedes procesarlas de una sola vez.
        </li>
      </ul>
    </>
  ),
};
