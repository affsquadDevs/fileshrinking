import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresor de PDF — Gratis, privado y en el navegador",
  metaDescription:
    "Comprime PDF en tu navegador. Recomprime las imágenes incrustadas para reducir PDF escaneados y con muchas imágenes, sin subir nada ni registrarte.",
  heading: "Compresor de PDF",
  intro: (
    <>
      Reduce el tamaño de los PDF escaneados y con muchas imágenes directamente
      en tu navegador. Esta herramienta recomprime las imágenes incrustadas en
      tu documento y elimina los metadatos sobrantes, de modo que el archivo se
      hace más pequeño mientras tu texto se mantiene nítido, y nunca se sube
      nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir un PDF",
    description:
      "Reduce un PDF localmente en tu navegador en cuatro pasos, sin subir nada.",
    steps: [
      {
        name: "Añade tu PDF",
        text: "Arrastra y suelta tu PDF en la zona de carga o haz clic para buscarlo. El archivo se lee directamente en tu navegador: nunca se envía a ningún sitio.",
      },
      {
        name: "Elige un nivel de compresión",
        text: "Selecciona un preajuste o ajusta con precisión el control de calidad de imagen. Equilibrado vale para la mayoría de los documentos; elige Más pequeño para el mayor ahorro en escaneos y archivos con muchas fotos.",
      },
      {
        name: "Deja que se procese en tu dispositivo",
        text: "Las imágenes incrustadas se reducen de resolución y se vuelven a codificar como JPEG, y se eliminan los metadatos, todo en local. Verás el tamaño original, el nuevo tamaño y el porcentaje ahorrado.",
      },
      {
        name: "Descarga el PDF más pequeño",
        text: "Guarda tu archivo optimizado. Si el resultado fuera mayor que tu original, la herramienta conserva el original para que nunca obtengas un archivo más grande.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis archivos PDF a un servidor?",
      a: (
        <>
          No. Cada PDF se abre y se reescribe por completo en tu navegador
          usando pdf-lib y un codificador de imágenes WebAssembly. No se sube
          nada: no hay ningún servidor al que enviar tu documento. Incluso
          puedes desconectarte de internet después de que la página cargue y
          seguirá funcionando.
        </>
      ),
      text: "No. Cada PDF se abre y se reescribe por completo en tu navegador usando pdf-lib y un codificador de imágenes WebAssembly. No se sube nada y no hay ningún servidor al que enviar tu documento. Puedes desconectarte de internet después de que la página cargue y seguirá funcionando.",
    },
    {
      q: "¿El compresor de PDF es realmente gratis?",
      a: (
        <>
          Sí: es completamente gratis, sin registro, sin marcas de agua
          estampadas en tus páginas y sin límites diarios de archivos o
          páginas. El único tope práctico es la memoria de tu dispositivo. El
          sitio se mantiene con anuncios discretos.
        </>
      ),
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua en tus páginas y sin límites diarios de archivos o páginas. El único tope práctico es la memoria de tu dispositivo. El sitio se mantiene con anuncios discretos.",
    },
    {
      q: "¿Comprimir reducirá la calidad de mi PDF?",
      a: (
        <>
          Solo afecta a las imágenes incrustadas, que se reducen de resolución
          y se vuelven a codificar como JPEG; el texto y los gráficos
          vectoriales se mantienen nítidos y totalmente seleccionables. Los
          ajustes de mayor calidad de imagen conservan las fotos nítidas,
          mientras que los más bajos ahorran más espacio. Los PDF escaneados
          (que en realidad son imágenes) mostrarán el contraste más visible.
        </>
      ),
      text: "Solo afecta a las imágenes incrustadas, que se reducen de resolución y se vuelven a codificar como JPEG; el texto y los gráficos vectoriales se mantienen nítidos y seleccionables. Los ajustes de mayor calidad de imagen conservan las fotos nítidas, mientras que los más bajos ahorran más espacio. Los PDF escaneados, que en realidad son imágenes, muestran el contraste más visible.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo comprimir?",
      a: (
        <>
          No hay un límite estricto: depende de cuánta memoria libre tenga tu
          dispositivo. Los documentos típicos de unos pocos megabytes son
          instantáneos, y los PDF escaneados grandes de 50 a 100 MB suelen
          funcionar en un portátil moderno. Los archivos muy grandes usan más
          RAM porque todo el PDF se mantiene en memoria mientras se reescribe.
        </>
      ),
      text: "No hay un límite estricto; depende de cuánta memoria libre tenga tu dispositivo. Los documentos típicos de unos pocos megabytes son instantáneos, y los PDF escaneados grandes de 50 a 100 MB suelen funcionar en un portátil moderno. Los archivos muy grandes usan más RAM porque todo el PDF se mantiene en memoria mientras se reescribe.",
    },
    {
      q: "¿Por qué no se redujo nada mi PDF?",
      a: (
        <>
          Esta herramienta reduce los PDF recomprimiendo las imágenes
          incrustadas. Si tu documento es en su mayoría texto, tablas o
          gráficos vectoriales, no hay imágenes grandes que optimizar, así que
          hay poco que eliminar. Cuando un PDF recomprimido acabaría siendo más
          grande que el original, la herramienta conserva tu archivo original
          intacto.
        </>
      ),
      text: "Esta herramienta reduce los PDF recomprimiendo las imágenes incrustadas. Si tu documento es en su mayoría texto, tablas o gráficos vectoriales, no hay imágenes grandes que optimizar, así que hay poco que eliminar. Cuando un PDF recomprimido acabaría siendo más grande que el original, la herramienta conserva tu archivo original intacto.",
    },
    {
      q: "¿Comprimir mantiene mi PDF con texto buscable?",
      a: (
        <>
          Sí. La herramienta nunca rasteriza tus páginas ni convierte el texto
          en imágenes, así que cualquier texto seleccionable y buscable del
          original sigue siendo seleccionable y buscable después. Solo se
          vuelven a codificar los datos de imagen incrustados en el archivo, y
          se conserva el diseño de la página.
        </>
      ),
      text: "Sí. La herramienta nunca rasteriza tus páginas ni convierte el texto en imágenes, así que cualquier texto seleccionable y buscable del original sigue siendo seleccionable y buscable después. Solo se vuelven a codificar los datos de imagen incrustados en el archivo, y se conserva el diseño de la página.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué son tan grandes los archivos PDF?</h2>
      <p>
        Un PDF puede dispararse hasta decenas de megabytes por motivos que no
        resultan obvios al mirar la página. El mayor culpable, con diferencia,
        son las <strong>imágenes incrustadas</strong>: cuando escaneas un
        documento, exportas diapositivas o sueltas una foto del móvil en un
        informe, la imagen a resolución completa se guarda dentro del archivo,
        a menudo a 300 PPP o más, mucho más detalle del que una pantalla o un
        destinatario de correo llegarán a ver nunca. Otros factores habituales
        son las <strong>fuentes incrustadas</strong>, los objetos duplicados de
        ediciones repetidas y los <strong>metadatos</strong> sobrantes, como
        miniaturas, anotaciones e historial de revisiones.
      </p>
      <p>
        Los documentos escaneados son el caso extremo. Un &laquo;PDF
        escaneado&raquo; es en realidad una pila de fotografías de papel, con
        una imagen grande por página y poco o ningún texto real. Por eso un
        escaneo de 10 páginas puede ser más grande que un informe de texto de
        200 páginas. Esos archivos con muchas imágenes y escaneados son
        justamente donde este compresor brilla.
      </p>
      <p>
        Ayuda pensar en un PDF como un contenedor parecido a un zip, en lugar
        de como una única imagen plana. Un informe nacido digital exportado
        desde un procesador de textos es en su mayoría instrucciones de texto
        compactas más unas pocas fuentes incrustadas, así que se mantiene
        pequeño. En el momento en que añades gráficos de alta resolución, fotos
        de producto o capturas de pantalla a página completa, el archivo hereda
        todos sus datos de píxeles. Editar y volver a guardar repetidamente en
        algunas aplicaciones también puede dejar copias huérfanas de imágenes
        reemplazadas, inflando silenciosamente el archivo con datos que ya ni
        siquiera son visibles en la página.
      </p>

      <h2 id="how-it-works">Cómo funciona este compresor de PDF</h2>
      <p>
        Seamos precisos sobre lo que ocurre, porque la honestidad importa más
        que una promesa llamativa de &laquo;90&nbsp;% más pequeño&raquo;. Esta
        herramienta abre tu PDF, encuentra las imágenes incrustadas en él y{" "}
        <strong>reduce la resolución</strong> de las que son más grandes de lo
        necesario, y luego{" "}
        <strong>las vuelve a codificar como JPEG</strong> con la calidad que
        elijas. También elimina los metadatos no esenciales. Después reconstruye
        el documento con{" "}
        <a
          href="https://pdf-lib.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pdf-lib
        </a>{" "}
        y un codificador de imágenes WebAssembly, todo dentro de la pestaña del
        navegador.
      </p>
      <p>
        Lo que <strong>no</strong> hace es igual de importante. No aplana tus
        páginas convirtiéndolas en imágenes, así que tu{" "}
        <strong>texto sigue siendo real, seleccionable y buscable</strong>, y
        los gráficos vectoriales se mantienen nítidos a cualquier nivel de zoom.
        La otra cara: si tu PDF es en su mayoría texto, tablas o arte
        vectorial, casi no hay nada que un recompresor de imágenes pueda
        recortar, y el ahorro será pequeño. En ese caso, la herramienta
        simplemente <strong>devuelve tu archivo original</strong>: nunca te
        entrega algo más grande de lo que empezaste.
      </p>
      <p>
        Los dos ajustes que controlas se corresponden directamente con esas dos
        palancas. El
        <strong> control de calidad de imagen</strong> establece con qué
        agresividad se vuelve a codificar cada imagen como JPEG: más alto
        conserva intactos el detalle fino y los degradados, más bajo descarta
        más para un archivo más pequeño. Los preajustes también limitan las
        dimensiones máximas en píxeles de las imágenes incrustadas, de modo que
        una foto sobredimensionada se <strong>reduce de resolución</strong> a
        una resolución sensata antes de volver a codificarse. La reducción de
        resolución suele ser de donde proceden los mayores ahorros, porque
        reducir a la mitad el ancho y el alto de una imagen elimina
        aproximadamente tres cuartas partes de sus píxeles. Todo se procesa de
        un archivo en uno, de modo que el uso de memoria se mantiene predecible
        incluso en un móvil.
      </p>

      <h2 id="format">Qué es realmente un PDF, y el modelo de privacidad</h2>
      <p>
        El PDF (Formato de Documento Portátil) fue creado por Adobe y ahora es
        un estándar ISO abierto (ISO 32000). Un PDF es un contenedor de
        objetos: descripciones de página, fuentes, trazados vectoriales y flujos
        de imágenes, cada uno de los cuales puede usar su propia compresión.
        Como las imágenes se almacenan como flujos separados, pueden cambiarse
        por versiones más pequeñas y recodificadas sin tocar el resto del
        documento: ese es el mecanismo en el que se apoya esta herramienta.
        Puedes leer la propia descripción del formato por parte de Adobe en la{" "}
        <a
          href="https://www.adobe.com/acrobat/about-adobe-pdf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          página de referencia de Adobe PDF
        </a>
        .
      </p>
      <p>
        La privacidad es la razón para hacer esto en un navegador en lugar de
        subirlo a un sitio web. Los PDF son a menudo los archivos <em>más</em>{" "}
        sensibles que la gente comprime: contratos, declaraciones de impuestos,
        historiales médicos, escaneos de documentos de identidad y acuerdos
        firmados. Con un compresor en línea típico, todo eso sale de tu máquina
        y se queda en el servidor de otra persona. Aquí, tu documento se lee en
        memoria, se reescribe en tu dispositivo y se te devuelve directamente.
        No se transmite, registra ni almacena nada: puedes desconectarte de
        internet después de que la página cargue y la herramienta seguirá
        funcionando.
      </p>
      <p>
        Este enfoque local-first tiene también una ventaja práctica: no hay
        colas, ni topes de tamaño por archivo impuestos por un servidor, ni
        espera a que terminen una subida y una descarga. La velocidad depende
        únicamente de tu propio hardware. El inconveniente es que los archivos
        muy grandes se apoyan en la memoria de tu dispositivo mientras se
        reescriben, así que un escaneo extremadamente grande en un móvil
        antiguo puede ir lento; dividirlo antes en PDF más pequeños es una
        solución fácil.
      </p>

      <h2 id="tips">Consejos para los PDF más pequeños</h2>
      <ul>
        <li>
          <strong>Escanea a menos PPP.</strong> 150 a 200 PPP son de sobra para
          la lectura en pantalla y el correo; 600 PPP cuadruplica los datos
          para un detalle que rara vez verás. Ajusta la resolución antes de
          escanear para la victoria más fácil de todas.
        </li>
        <li>
          <strong>Elige primero Equilibrado, luego Más pequeño.</strong>{" "}
          Empieza con el preajuste Equilibrado, comprueba el resultado, después
          vuelve a ejecutarlo en Más pequeño y compara. En escaneos con muchas
          fotos, el ajuste más bajo puede reducir el tamaño aproximadamente a la
          mitad de nuevo con poca diferencia visible.
        </li>
        <li>
          <strong>Comprime las imágenes de origen antes de meterlas.</strong>{" "}
          Si estás creando un PDF a partir de fotos o capturas de pantalla,
          redúcelas primero con el{" "}
          <Link href="/es/image-compressor">compresor de imágenes</Link> o el{" "}
          <Link href="/es/compress-jpeg">compresor de JPEG</Link>. Una entrada
          más ligera significa un PDF más ligero.
        </li>
        <li>
          <strong>Redimensiona las imágenes sobredimensionadas de
          antemano.</strong> Una foto de 6000 píxeles en una página A4 es
          detalle desperdiciado. Usa el{" "}
          <Link href="/es/image-resizer">redimensionador de imágenes</Link> o
          convierte a un formato moderno con el{" "}
          <Link href="/es/image-converter">conversor de imágenes</Link> antes de
          montar el documento.
        </li>
        <li>
          <strong>No esperes milagros de los PDF de texto.</strong> Si un
          archivo es casi todo texto y apenas se reduce, eso es normal:
          simplemente no había imágenes pesadas que optimizar.
        </li>
      </ul>
    </>
  ),
};
