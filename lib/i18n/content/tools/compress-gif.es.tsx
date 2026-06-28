import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir GIF — Optimizador de GIF gratis",
  metaDescription:
    "Comprime un GIF a WebP o PNG en tu navegador. 100% privado, sin subidas: tus archivos no salen del dispositivo. Para GIF animados, conviértelos a vídeo.",
  heading: "Compresor de GIF",
  intro: (
    <>
      Convierte un GIF en una imagen WebP o PNG mucho más pequeña, directamente en
      tu navegador: nada se sube nunca. Ten en cuenta que esto convierte solo el{" "}
      <strong>primer fotograma</strong> y no conserva la animación. Para reducir un
      GIF <em>animado</em> manteniendo el movimiento, conviértelo en su lugar a un{" "}
      <Link href="/es/compress-mp4">vídeo MP4 diminuto</Link>.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir un GIF",
    description:
      "Convierte un GIF en un WebP o PNG más pequeño localmente en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tu GIF",
        text: "Arrastra y suelta tu archivo .gif en la zona de carga, haz clic para examinar o pégalo desde el portapapeles. Puedes añadir varios a la vez.",
      },
      {
        name: "Elige un formato de salida",
        text: "Elige WebP para el archivo más pequeño y listo para la web, o PNG para una copia sin pérdidas y con la máxima compatibilidad del primer fotograma.",
      },
      {
        name: "Ajusta la calidad",
        text: "Para WebP, arrastra el control deslizante de calidad: alrededor de 75 es un gran equilibrio entre tamaño y detalle. PNG siempre es sin pérdidas.",
      },
      {
        name: "Descarga tu archivo",
        text: "Guarda las imágenes una a una o todas a la vez en un ZIP. Vuelve a ejecutarlo con distintos ajustes cuando quieras para comparar resultados.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Esto mantiene mi GIF animado?",
      a: (
        <>
          No, y esto es lo más importante que debes saber. Esta herramienta dentro
          del navegador convierte el <strong>primer fotograma</strong> de tu GIF en
          una única imagen WebP o PNG estática. No conserva la animación. Si tu GIF
          se mueve y quieres mantener ese movimiento ocupando una fracción del
          tamaño, conviértelo en su lugar a un vídeo corto con nuestro{" "}
          <Link href="/es/compress-mp4">compresor de MP4</Link> o el{" "}
          <Link href="/es/video-compressor">compresor de vídeo</Link>.
        </>
      ),
      text: "No. Esta herramienta convierte el primer fotograma de tu GIF en una única imagen WebP o PNG estática y no conserva la animación. Para mantener el movimiento ocupando una fracción del tamaño, convierte un GIF animado a un vídeo corto con nuestro compresor de MP4 o el compresor de vídeo.",
    },
    {
      q: "¿Mis archivos GIF se suben a un servidor?",
      a: "No. Cada archivo se procesa localmente en tu navegador. Tus GIF nunca salen de tu dispositivo y no hay ningún servidor al que subirlos: incluso puedes desconectarte de internet después de que cargue la página y seguirá funcionando.",
      text: "No. Cada archivo se procesa localmente en tu navegador. Tus GIF nunca salen de tu dispositivo y no hay ningún servidor al que subirlos. Puedes desconectarte de internet después de que cargue la página y seguirá funcionando.",
    },
    {
      q: "¿El compresor de GIF es realmente gratis?",
      a: "Sí, es completamente gratis, sin registro, sin marcas de agua y sin límites de número de archivos ni de tamaño más allá de lo que pueda manejar la memoria de tu dispositivo. El sitio se mantiene con anuncios discretos.",
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua y sin límites de número de archivos ni de tamaño más allá de lo que pueda manejar la memoria de tu dispositivo. El sitio se mantiene con anuncios discretos.",
    },
    {
      q: "¿La conversión reducirá la calidad?",
      a: (
        <>
          Para un GIF estático, convertirlo a WebP normalmente mejora la calidad{" "}
          <em>y</em> reduce el tamaño del archivo, porque WebP admite millones de
          colores mientras que el GIF está limitado a 256. Elige{" "}
          <strong>PNG</strong> para un resultado sin pérdidas, o usa el control
          deslizante de calidad con <strong>WebP</strong> para sacrificar un poco de
          detalle a cambio de un archivo mucho más pequeño. Alrededor de 75 es un
          gran equilibrio.
        </>
      ),
      text: "Para un GIF estático, convertirlo a WebP normalmente mejora la calidad y reduce el tamaño del archivo, porque WebP admite millones de colores mientras que el GIF está limitado a 256. Elige PNG para un resultado sin pérdidas, o usa el control deslizante de calidad con WebP para sacrificar un poco de detalle a cambio de un archivo mucho más pequeño. Alrededor de 75 es un buen equilibrio.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo procesar?",
      a: "No hay un límite estricto: depende de la memoria disponible en tu dispositivo. Los móviles y portátiles manejan con holgura GIF típicos de unos pocos megabytes, e incluso archivos más grandes funcionan bien. Como todo se ejecuta en memoria, los archivos muy grandes usan más RAM, así que cierra otras pestañas pesadas si llegas a un límite.",
      text: "No hay un límite estricto; depende de la memoria disponible en tu dispositivo. Los GIF típicos de unos pocos megabytes e incluso archivos más grandes funcionan bien. Como todo se ejecuta en memoria, los archivos muy grandes usan más RAM, así que cierra otras pestañas pesadas si llegas a un límite.",
    },
    {
      q: "¿Debería usar WebP o PNG como salida?",
      a: (
        <>
          Usa <strong>WebP</strong> para el archivo más pequeño: es ideal para la
          web y admite modos con pérdidas y sin pérdidas. Usa <strong>PNG</strong>{" "}
          cuando necesites la máxima compatibilidad con software antiguo o una copia
          sin pérdidas garantizada, por ejemplo un logotipo o icono que hayas
          extraído de un GIF.
        </>
      ),
      text: "Usa WebP para el archivo más pequeño; es ideal para la web y admite modos con pérdidas y sin pérdidas. Usa PNG cuando necesites la máxima compatibilidad con software antiguo o una copia sin pérdidas garantizada, como un logotipo o icono extraído de un GIF.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué convertir o comprimir un GIF?</h2>
      <p>
        El formato GIF está en todas partes, pero es una de las formas menos
        eficientes de almacenar una imagen. Un GIF está limitado a una paleta de
        solo <strong>256 colores</strong> por fotograma y usa un esquema de
        compresión antiguo y ligero, así que las fotografías y los gráficos
        detallados guardados como GIF se ven con bandas y pesan mucho más de lo que
        deberían. Los GIF animados son aún peores: cada fotograma se almacena como
        una imagen completa, por eso un clip corto puede dispararse a muchos
        megabytes, a veces más que un vídeo en alta definición del mismo contenido.
      </p>
      <p>
        Esta herramienta aborda el caso estático. Lee el primer fotograma de tu GIF
        y lo vuelve a codificar como un <strong>WebP</strong> o{" "}
        <strong>PNG</strong> moderno, lo que normalmente produce un archivo mucho
        más pequeño y de mayor calidad. Como todo ocurre en tu dispositivo, también
        es privado: tu GIF se decodifica en memoria, se convierte con un codificador
        WebAssembly y se te devuelve directamente. Nunca toca la red.
      </p>
      <p>
        Si tu GIF está animado, sigue leyendo: la jugada realmente útil no es
        comprimir el GIF en absoluto, sino convertirlo a vídeo, donde el ahorro es
        enorme.
      </p>

      <h2 id="animation">¿GIF animado? Conviértelo a vídeo en su lugar</h2>
      <p>
        Seamos transparentes: este conversor dentro del navegador genera un único
        fotograma estático, así que no puede conservar la animación. Es una
        limitación deliberada y honesta, no un error. Para un GIF animado, la
        respuesta correcta es reemplazarlo por un formato de vídeo real como MP4
        (H.264) o WebM. Los códecs de vídeo modernos usan compensación de
        movimiento (solo almacenan lo que cambia entre fotogramas), así que la misma
        animación normalmente queda un <strong>90% más pequeña o más</strong>{" "}
        viéndose más nítida.
      </p>
      <p>
        Esto no es solo nuestra opinión; es una recomendación de rendimiento web de
        toda la vida. El web.dev de Google recomienda que{" "}
        <a
          href="https://web.dev/articles/replace-gifs-with-videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          reemplaces los GIF animados por vídeo
        </a>{" "}
        precisamente por esta razón. Para hacerlo aquí, envía tu GIF animado a
        nuestro <Link href="/es/compress-mp4">compresor de MP4</Link> o al más
        general <Link href="/es/video-compressor">compresor de vídeo</Link>, que
        también admite MOV, WebM y más. Obtendrás un archivo diminuto que se
        reproduce con fluidez y se repite en bucle automáticamente igual que lo
        hacía el GIF original.
      </p>

      <h2 id="format">Qué es un GIF y por qué ganan WebP o PNG</h2>
      <p>
        GIF (Graphics Interchange Format) se remonta a 1987 y usa compresión LZW con
        una paleta indexada limitada a 256 colores. Admite animación sencilla y un
        nivel de transparencia binaria, lo que lo hizo icónico en la web temprana,
        pero esas restricciones son exactamente por las que le cuesta con cualquier
        cosa más allá de gráficos pequeños y planos. Puedes leer el trasfondo
        técnico en la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format"
          target="_blank"
          rel="noopener noreferrer"
        >
          referencia de formatos de imagen de MDN
        </a>
        .
      </p>
      <p>
        Convertir el fotograma a <strong>WebP</strong> elimina el límite de 256
        colores, añade transparencia alfa completa y admite modos con pérdidas y sin
        pérdidas, así que los archivos suelen ser mucho más pequeños con una calidad
        igual o mejor. <strong>PNG</strong> es la opción adecuada cuando necesitas
        una copia sin pérdidas garantizada o la mayor compatibilidad con software,
        por ejemplo, al extraer un logotipo o una pegatina de un GIF. Si más adelante
        quieres explorar otros destinos como AVIF, nuestra{" "}
        <Link href="/es/compress-webp">herramienta WebP</Link> y nuestro{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link> te permiten
        comparar formatos en paralelo.
      </p>

      <h2 id="tips">Consejos para los mejores resultados</h2>
      <ul>
        <li>
          <strong>¿GIF animado? Pásalo a vídeo.</strong> No luches contra el
          formato. Conviértelo con el{" "}
          <Link href="/es/compress-mp4">compresor de MP4</Link> para el mayor ahorro
          y la reproducción más fluida.
        </li>
        <li>
          <strong>Elige PNG para gráficos, WebP para el tamaño.</strong> Los
          logotipos, los iconos y el arte de bordes nítidos se mantienen claros como
          PNG; para la web, WebP es casi siempre la opción más pequeña.
        </li>
        <li>
          <strong>Redimensiona antes de convertir.</strong> Si la imagen se mostrará
          a 400 px de ancho, redúcela con la opción de redimensionado integrada: eso
          ahorra mucho más que los ajustes de calidad por sí solos.
        </li>
        <li>
          <strong>Compara el resultado.</strong> Prueba WebP con calidad 75, luego
          vuelve a ejecutarlo más bajo o cambia a PNG y comprueba si notas la
          diferencia al tamaño de tu pantalla.
        </li>
      </ul>
    </>
  ),
};
