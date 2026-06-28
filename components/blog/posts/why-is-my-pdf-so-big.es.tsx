import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "why-is-my-pdf-so-big",
  title: "¿Por qué pesa tanto mi PDF? (y cómo reducirlo)",
  description:
    "Imágenes en alta resolución, páginas escaneadas, fuentes incrustadas y objetos duplicados engordan un PDF. Aquí tienes qué lo causa y cómo solucionarlo.",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  authorId: "team",
  tags: ["PDF", "Tutorial"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Terminaste un documento de dos páginas, lo exportaste como PDF y, de
        algún modo, acabaste con un archivo de 40&nbsp;MB que se niega a
        adjuntarse a un correo. Es una experiencia sorprendentemente común. Un
        PDF no es una sola cosa: es un contenedor que agrupa texto, fuentes,
        imágenes, gráficos vectoriales y metadatos en un único archivo. Cuando
        ese archivo es enorme, el tamaño casi siempre proviene de unos pocos
        culpables concretos. Una vez que sabes a quién echarle la culpa, reducir
        el PDF es sencillo. Esta guía repasa cada causa y la solución que
        realmente funciona para cada una.
      </p>

      <h2 id="how-pdfs-store-data">Qué hay realmente dentro de un PDF</h2>
      <p>
        Un PDF almacena el contenido como una colección de{" "}
        <strong>objetos</strong>: flujos de texto, datos de imagen, programas de
        fuentes y las instrucciones que los disponen en la página. El formato
        está definido por un estándar ISO abierto, y la{" "}
        <a
          href="https://www.pdfa.org/resource/iso-32000-pdf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          descripción general de ISO&nbsp;32000 de la PDF Association
        </a>{" "}
        es una buena referencia si quieres los detalles formales. La conclusión
        práctica es simple: <strong>el texto y los gráficos vectoriales son
        diminutos</strong>, mientras que{" "}
        <strong>las imágenes son enormes en comparación</strong>. Una página
        entera de texto denso puede ocupar unos pocos kilobytes. Una sola foto a
        página completa puede ocupar varios megabytes. Así que, cuando un PDF es
        inesperadamente grande, la primera pregunta que hay que hacerse casi
        siempre es: ¿de dónde vienen las imágenes?
      </p>

      <h2 id="high-res-images">
        Causa n.&deg;&nbsp;1: imágenes incrustadas en alta resolución
      </h2>
      <p>
        Esta es la razón más común por la que un PDF se dispara de tamaño.
        Cuando arrastras una foto de un móvil o una cámara modernos a un
        documento, puede tener 4000&nbsp;píxeles de ancho o más. Aunque se
        muestre en la página a una fracción de ese tamaño, el PDF a menudo
        almacena la resolución <em>completa</em>. Para un documento pensado para
        leerse en pantalla o imprimirse con calidad normal, rara vez necesitas
        más de <strong>150 píxeles por pulgada (PPP)</strong>; para impresión de
        alta calidad, 300&nbsp;PPP son de sobra. Cualquier cosa por encima de
        eso es peso desperdiciado.
      </p>
      <p>
        La solución es reducir la resolución y recomprimir esas imágenes antes o
        después de que entren en el PDF. Si controlas las imágenes de origen,
        redúcelas primero: pásalas por el{" "}
        <Link href="/es/compress-jpeg">compresor de JPEG</Link> con una calidad
        de 70&ndash;80 y ajústalas a las dimensiones que realmente necesitas. Si
        las imágenes ya están integradas en el PDF, pasa todo el archivo por el{" "}
        <Link href="/es/pdf-compressor">compresor de PDF</Link>, que vuelve a
        codificar las imágenes incrustadas a un tamaño menor y razonable. Para
        contenido fotográfico, solo este paso suele recortar el archivo en un
        80&nbsp;por ciento o más.
      </p>

      <h2 id="scanned-pages">Causa n.&deg;&nbsp;2: páginas escaneadas</h2>
      <p>
        Un documento escaneado es un caso especial, y especialmente pesado.
        Cuando escaneas papel, cada página se convierte en una imagen a página
        completa: no hay texto real en el archivo, solo imágenes de texto. Los
        escáneres suelen configurarse por defecto con valores de DPI muy altos
        (600&nbsp;DPI es habitual) y a todo color, lo que produce archivos
        enormes para lo que esencialmente es tinta negra sobre papel blanco.
      </p>
      <p>
        Puedes hacer dos cosas. Primero, escanear con más cabeza: para un
        documento de texto, escanear a{" "}
        <strong>200&ndash;300&nbsp;DPI en escala de grises o en blanco y
        negro</strong>{" "}
        en lugar de a 600&nbsp;DPI en color puede reducir el tamaño de forma
        drástica sin dejar de ser perfectamente legible. Segundo, para los
        escaneos que ya tienes, recomprímelos: al pasar el archivo por el{" "}
        <Link href="/es/pdf-compressor">compresor de PDF</Link> se vuelven a
        codificar esas imágenes de página a una resolución y calidad más
        razonables. Pero sé realista respecto al límite: un escaneo es,
        fundamentalmente, una pila de imágenes, así que siempre será más grande
        que un PDF de texto nativo digital de la misma extensión.
      </p>

      <h2 id="fonts-and-objects">
        Causa n.&deg;&nbsp;3: fuentes incrustadas y objetos duplicados
      </h2>
      <p>
        Los PDF incrustan las fuentes que utilizan para que el documento se vea
        idéntico en todos los dispositivos, lo cual es estupendo para la
        fidelidad pero añade peso. Un exportador que se porta bien crea{" "}
        <strong>subconjuntos</strong> de fuentes, incrustando solo los
        caracteres que realmente se usan. Las herramientas mal configuradas
        incrustan la familia de fuentes <em>entera</em>, y un documento que usa
        varias tipografías decorativas puede arrastrar varios megabytes de datos
        de fuentes que apenas toca. Limitarse a un pequeño conjunto de fuentes
        comunes, y dejar que tu software cree subconjuntos, mantiene esto a raya.
      </p>
      <p>
        Luego está la pura ineficiencia. Algunos programas escriben la misma
        imagen o recurso en el archivo varias veces en lugar de referenciarlo
        una sola vez: un logotipo que aparece en una cabecera en cada página
        puede acabar incrustado decenas de veces. Los ciclos repetidos de
        &ldquo;Guardar como&rdquo; y las ediciones incrementales también pueden
        dejar atrás objetos huérfanos y obsoletos que nunca se eliminan. Volver
        a guardar el PDF con una herramienta que reescriba y elimine duplicados
        de su estructura de objetos limpia todo esto automáticamente.
      </p>

      <h2 id="metadata">Causa n.&deg;&nbsp;4: metadatos, adjuntos y restos</h2>
      <p>
        Los contribuyentes más pequeños suman. Los PDF pueden llevar metadatos
        del documento, paquetes XMP, perfiles de color incrustados, miniaturas,
        datos de campos de formulario, JavaScript e incluso archivos adjuntos
        completos. Los documentos exportados desde software de diseño a veces
        incluyen capas ocultas, comentarios o historial de revisiones. Nada de
        esto es visible en la página, pero todo cuenta para el total de bytes.
        Optimizar o &ldquo;aplanar&rdquo; el PDF elimina las partes que no
        necesitas dejando intacto el contenido visible.
      </p>

      <h2 id="when-it-wont-shrink">Cuando un PDF no se reduce mucho</h2>
      <p>
        La compresión no es magia, y ayuda saber cuándo has tocado fondo. Si tu
        PDF es <strong>en su mayoría texto real y gráficos vectoriales</strong>{" "}
        —un informe nativo digital, un contrato, un listado de código— es
        probable que ya sea pequeño, y hay poco que ganar. Los bytes están
        haciendo un trabajo útil, y apretar más no servirá de nada. Las grandes
        ganancias provienen casi por completo de las{" "}
        <strong>imágenes</strong>: fotos en alta resolución y páginas
        escaneadas. Si recomprimir esas imágenes no mueve la aguja, lo más
        probable es que tu archivo no tuviera muchas imágenes para empezar.
      </p>
      <p>
        Una forma rápida de diagnosticarlo: pregúntate si puedes seleccionar y
        copiar el texto del documento. Si puedes, es nativo digital y el tamaño
        proviene de imágenes incrustadas, fuentes o restos. Si no puedes —si el
        texto es solo parte de una imagen— tienes un escaneo, y reducir la
        resolución de esas imágenes de página es tu mayor palanca.
      </p>

      <h2 id="do-it">Reducir el tuyo, de forma privada</h2>
      <p>
        La buena noticia es que solucionar todo esto no requiere subir tu
        documento a ningún sitio. El{" "}
        <Link href="/es/pdf-compressor">compresor de PDF de FileShrinking</Link>{" "}
        se ejecuta por completo en tu navegador, así que un contrato
        confidencial o un documento de identidad escaneado nunca sale de tu
        dispositivo: se procesa localmente y no se envía nada a ningún servidor.
        Empieza por ahí con cualquier PDF grande; si estás montando un documento
        a partir de tus propias fotos, redúcelas primero con el{" "}
        <Link href="/es/compress-jpeg">compresor de JPEG</Link> para que el peso
        de más nunca llegue a entrar. Entre los dos, la mayoría de los PDF
        sobredimensionados quedan en un tamaño manejable y apto para correo en
        una sola pasada.
      </p>
    </>
  );
}
