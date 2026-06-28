import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir PNG — Optimizador de PNG gratis",
  metaDescription:
    "Optimiza imágenes PNG en tu navegador con OxiPNG: sin pérdida, privado y sin subidas. O convierte a WebP para archivos mucho más pequeños.",
  heading: "Compresor de PNG",
  intro: (
    <>
      Optimiza imágenes PNG directamente en tu navegador con OxiPNG, un
      optimizador sin pérdida que reduce el tamaño de los archivos sin tocar ni
      un solo píxel. Conserva la transparencia y los bordes nítidos intactos, o
      convierte a WebP para conseguir un ahorro mucho mayor. Nada se sube nunca.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir un PNG",
    description:
      "Optimiza imágenes PNG sin pérdida en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tus imágenes PNG",
        text: "Arrastra y suelta tus archivos PNG en la zona de carga, haz clic para explorar o pega desde el portapapeles. Puedes añadir varios a la vez.",
      },
      {
        name: "Elige un nivel de optimización",
        text: "Elige Rápido, Equilibrado o Máximo. Los niveles más altos buscan con más empeño una codificación sin pérdida más pequeña, así que tardan un poco más pero exprimen algo más.",
      },
      {
        name: "Optimiza en tu dispositivo",
        text: "Cada PNG se reescribe localmente con OxiPNG. Verás el tamaño original, el tamaño nuevo y el porcentaje ahorrado de cada archivo, conservando todos los píxeles.",
      },
      {
        name: "Descarga — o convierte para ahorrar más",
        text: "Descarga los archivos de uno en uno o todos a la vez en un ZIP. Si una foto en PNG sigue siendo grande, cambia la salida a WebP para obtener un resultado mucho más pequeño y apto para la web.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Mis archivos PNG se suben a un servidor?",
      a: (
        <>
          No. Cada PNG se optimiza localmente en tu navegador usando
          WebAssembly. Tus imágenes nunca salen de tu dispositivo y no hay
          ningún servidor al que subirlas; incluso puedes desconectarte de
          internet después de que la página cargue y seguirá funcionando.
        </>
      ),
      text: "No. Cada PNG se optimiza localmente en tu navegador usando WebAssembly. Tus imágenes nunca salen de tu dispositivo y no hay ningún servidor al que subirlas. Puedes desconectarte de internet después de que la página cargue y seguirá funcionando.",
    },
    {
      q: "¿El compresor de PNG es realmente gratis?",
      a: (
        <>
          Sí, es completamente gratis, sin registro, sin marcas de agua y sin
          límites de número de archivos ni de tamaño más allá de lo que pueda
          manejar la memoria de tu dispositivo. El sitio se mantiene con
          anuncios discretos.
        </>
      ),
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua y sin límites de número de archivos ni de tamaño más allá de lo que pueda manejar la memoria de tu dispositivo. El sitio se mantiene con anuncios discretos.",
    },
    {
      q: "¿Optimizar mi PNG reducirá su calidad?",
      a: (
        <>
          No, la optimización de PNG con OxiPNG es{" "}
          <strong>totalmente sin pérdida</strong>. Cada píxel se conserva
          exactamente, incluida la transparencia; OxiPNG simplemente reescribe
          el archivo de forma más eficiente. La contrapartida es que el ahorro
          sin pérdida es modesto, normalmente del 5–30 %. Si en su lugar
          conviertes a WebP, ese paso es con pérdida y puede cambiar
          ligeramente la imagen, pero reduce el tamaño mucho más.
        </>
      ),
      text: "No. La optimización de PNG con OxiPNG es totalmente sin pérdida. Cada píxel se conserva exactamente, incluida la transparencia; OxiPNG simplemente reescribe el archivo de forma más eficiente. El ahorro sin pérdida es modesto, normalmente del 5-30 %. Convertir a WebP es con pérdida pero reduce el tamaño mucho más.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo optimizar?",
      a: (
        <>
          No hay un límite estricto: depende de la memoria disponible de tu
          dispositivo. Los teléfonos y portátiles manejan cómodamente capturas
          de pantalla y logotipos habituales, e incluso PNG grandes de alta
          resolución. Los lotes grandes se procesan de un archivo en uno para
          mantener bajo el uso de memoria.
        </>
      ),
      text: "No hay un límite estricto; depende de la memoria disponible de tu dispositivo. Las capturas de pantalla habituales, los logotipos e incluso los PNG grandes de alta resolución funcionan bien. Los lotes grandes se procesan de un archivo en uno para mantener bajo el uso de memoria.",
    },
    {
      q: "¿Por qué mi foto en PNG sigue siendo enorme después de optimizarla?",
      a: (
        <>
          El PNG es sin pérdida, así que no puede descartar detalle fotográfico
          como hacen JPEG o WebP: una foto a todo color simplemente necesita
          muchos datos como PNG. La optimización recorta lo sobrante, pero la
          verdadera solución para las fotos es convertir a un formato con
          pérdida. Prueba nuestras herramientas{" "}
          <Link href="/es/compress-webp">WebP</Link> o{" "}
          <Link href="/es/compress-avif">AVIF</Link> para que los archivos de
          fotos ocupen una fracción del tamaño.
        </>
      ),
      text: "El PNG es sin pérdida, así que no puede descartar detalle fotográfico como hacen JPEG o WebP; una foto a todo color necesita muchos datos como PNG. La optimización recorta lo sobrante, pero la verdadera solución para las fotos es convertir a un formato con pérdida como WebP o AVIF.",
    },
    {
      q: "¿Optimizar conserva la transparencia de mi PNG?",
      a: (
        <>
          Sí. El canal alfa (transparencia) se conserva exactamente, así que
          los logotipos, iconos y elementos de interfaz con fondo transparente
          salen idénticos píxel a píxel, solo que en un archivo más pequeño.
          Convertir a WebP también conserva la transparencia; convertir a JPEG
          no, ya que JPEG no tiene canal alfa.
        </>
      ),
      text: "Sí. El canal alfa (transparencia) se conserva exactamente, así que los logotipos, iconos y elementos de interfaz con fondo transparente salen idénticos píxel a píxel en un archivo más pequeño. WebP también conserva la transparencia; JPEG no, ya que no tiene canal alfa.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué comprimir o convertir un PNG?</h2>
      <p>
        El PNG está en todas partes: es el formato predeterminado para las
        capturas de pantalla, la opción habitual para logotipos e iconos, y el
        estándar para cualquier gráfico que necesite un fondo transparente. El
        problema es que los archivos PNG suelen ser más grandes de lo necesario.
        Los editores de imágenes y las herramientas de captura guardan archivos
        generosos y sin optimizar, con metadatos de más, ajustes de compresión
        poco óptimos y datos de color que no necesitan. Optimizar elimina ese
        desperdicio para que las páginas carguen más rápido, los adjuntos se
        envíen antes y el almacenamiento rinda más.
      </p>
      <p>
        Como esta herramienta se ejecuta por completo en tu dispositivo, es
        también la forma privada de hacerlo. Los optimizadores en línea
        tradicionales suben tus imágenes a un servidor remoto, las procesan allí
        y te las devuelven. Aquí, cada PNG se lee en memoria, se reescribe con
        una compilación en WebAssembly de <strong>OxiPNG</strong> y se te
        devuelve directamente: tus archivos nunca pasan por una red, algo que
        importa cuando una captura de pantalla o un recurso de diseño contiene
        información sensible.
      </p>

      <h2 id="lossless">Optimización sin pérdida vs. conversión con pérdida</h2>
      <p>
        El PNG es un formato <strong>sin pérdida</strong>: reproduce cada píxel
        exactamente, sin artefactos de compresión y con soporte completo para la
        transparencia. Esa fidelidad es la razón de ser del PNG, pero también
        limita lo pequeño que puede llegar a ser. OxiPNG mantiene tu imagen{" "}
        <strong>perfecta píxel a píxel</strong>: solo encuentra una forma más
        eficiente de almacenar los mismos datos reduciendo la paleta de colores
        cuando es posible, eligiendo mejores filtros y descartando bloques
        innecesarios. Seamos honestos con las cuentas: el ahorro sin pérdida es{" "}
        <strong>modesto, normalmente del 5–30 %</strong>, y un PNG ya optimizado
        puede que apenas se reduzca.
      </p>
      <p>
        Cuando necesitas una reducción drástica, la respuesta no es un PNG
        mejor, sino un formato distinto. Convertir un PNG a{" "}
        <Link href="/es/compress-webp">WebP</Link> o{" "}
        <Link href="/es/compress-avif">AVIF</Link> aplica una compresión con
        pérdida que puede recortar el tamaño del archivo entre un 60 y un 90 %
        sin dejar de admitir la transparencia. La contrapartida es que la
        conversión con pérdida puede introducir cambios sutiles, así que es
        ideal para fotografías e imágenes complejas, mientras que el PNG sin
        pérdida sigue siendo lo mejor para gráficos de bordes nítidos donde cada
        píxel cuenta. Esta herramienta te deja elegir: conserva PNG para la
        fidelidad o cambia la salida a WebP para el tamaño.
      </p>

      <h2 id="format">¿Qué es un PNG y cuándo deberías usarlo?</h2>
      <p>
        El PNG (Portable Network Graphics) se creó como un reemplazo de GIF sin
        patentes y sin pérdida. Usa compresión DEFLATE junto con filtros de
        predicción por filas, y admite un canal alfa completo de 8 bits para una
        transparencia suave. Eso lo hace excelente para{" "}
        <strong>
          logotipos, iconos, capturas de pantalla, dibujos lineales, gráficas y
          cualquier imagen con bordes nítidos, color plano o texto
        </strong>
        : contenido que los formatos con pérdida emborronan o rodean de halos.
        Puedes leer los detalles técnicos en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics"
          target="_blank"
          rel="noopener noreferrer"
        >
          la referencia de formatos de imagen de MDN
        </a>
        .
      </p>
      <p>
        El PNG es la elección <strong>equivocada</strong> para las fotografías.
        Como nunca descarta detalle, una foto de tono continuo se convierte en
        un PNG enorme, a menudo muchas veces más grande que la misma imagen como{" "}
        <Link href="/es/compress-jpeg">JPEG</Link> o WebP. Si has estado
        guardando fotos como PNG, ese único hábito es probablemente tu mayor
        fuente de peso innecesario. Recurre al PNG cuando necesites bordes
        nítidos o transparencia, y recurre a un formato con pérdida cuando
        tengas una foto. ¿No sabes cuál usar? Nuestro{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link> te permite
        probar ambos y comparar los resultados uno al lado del otro.
      </p>

      <h2 id="tips">Consejos para obtener los mejores resultados</h2>
      <ul>
        <li>
          <strong>Ajusta el nivel de optimización a la tarea.</strong> Usa{" "}
          &laquo;Rápido&raquo; para una pasada rápida sobre muchos archivos, y
          &laquo;Máximo&raquo; cuando exprimir hasta el último byte de una sola
          imagen destacada compense el tiempo extra de procesamiento.
        </li>
        <li>
          <strong>Redimensiona antes de optimizar.</strong> Una captura de
          pantalla 4K mostrada a 800 px de ancho es en su mayoría píxeles
          desperdiciados. Usa la opción de redimensionado integrada para lograr
          un ahorro mucho mayor del que la optimización sin pérdida puede ofrecer
          por sí sola.
        </li>
        <li>
          <strong>Convierte las fotos, no luches contra ellas.</strong> Si un
          &laquo;PNG&raquo; es en realidad una foto, cambia la salida a{" "}
          <Link href="/es/compress-webp">WebP</Link> en lugar de esperar que la
          optimización sin pérdida haga milagros.
        </li>
        <li>
          <strong>Reserva el PNG para la transparencia.</strong> Cuando
          necesites un fondo transparente y una amplia compatibilidad, el PNG sin
          pérdida es la opción segura, y OxiPNG mantiene ese canal alfa perfecto
          píxel a píxel.
        </li>
      </ul>
    </>
  ),
};
