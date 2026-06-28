import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Redimensionar imágenes online gratis por píxeles o %",
  metaDescription:
    "Redimensiona JPG, PNG, WebP, AVIF y GIF por píxeles o porcentaje en tu navegador. Privado y sin subir nada: tus imágenes nunca salen de tu dispositivo.",
  heading: "Redimensionar imágenes",
  intro: (
    <>
      Redimensiona imágenes JPG, PNG, WebP, AVIF y GIF por píxeles exactos o por
      porcentaje, directamente en tu navegador. Cambiar las dimensiones es la
      forma más eficaz de reducir un archivo: suelta tus imágenes, elige un
      tamaño objetivo y descárgalas en segundos. Nunca se sube nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo redimensionar una imagen",
    description:
      "Redimensiona imágenes por píxeles o porcentaje localmente en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tus imágenes",
        text: "Arrastra y suelta tus fotos en la zona de carga, haz clic para examinar o pega desde el portapapeles. Se admiten JPEG, PNG, WebP, AVIF y GIF, y puedes añadir varias a la vez.",
      },
      {
        name: "Elige píxeles o porcentaje",
        text: "Selecciona «Porcentaje» para escalar por una proporción (ideal para lotes enteros) o «Píxeles» para escribir un ancho o un alto exacto. Mantén activada la relación de aspecto para evitar deformaciones.",
      },
      {
        name: "Define formato y calidad (opcional)",
        text: "Deja el formato en «Mismo formato» para conservar el tipo original, o conviértelo a WebP o AVIF para obtener un archivo más pequeño. Ajusta el control de calidad para comprimir al mismo tiempo.",
      },
      {
        name: "Descarga tus imágenes redimensionadas",
        text: "Cada imagen se redimensiona en tu dispositivo con remuestreo Lanczos. Descárgalas una a una o todas a la vez en un ZIP.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis imágenes a un servidor cuando las redimensiono?",
      a: (
        <>
          No. El redimensionado ocurre por completo en tu navegador usando el
          procesador de tu propio dispositivo. Los archivos se leen en memoria,
          se redimensionan y se te devuelven al instante: nunca se envía nada a
          un servidor, así que tus imágenes siguen siendo totalmente privadas.
          Incluso puedes desconectarte de internet una vez cargada la página.
        </>
      ),
      text: "No. El redimensionado ocurre por completo en tu navegador usando el procesador de tu dispositivo. Los archivos se leen en memoria, se redimensionan y se te devuelven al instante. Nunca se envía nada a un servidor, así que tus imágenes siguen siendo privadas. Incluso puedes desconectarte de internet una vez cargada la página.",
    },
    {
      q: "¿El redimensionador de imágenes es realmente gratis?",
      a: (
        <>
          Sí: es totalmente gratis, sin registro, sin marcas de agua y sin
          límites en la cantidad de imágenes que puedes redimensionar ni en su
          tamaño, más allá de lo que permita la memoria de tu dispositivo. El
          sitio se mantiene con anuncios discretos.
        </>
      ),
      text: "Sí. Es totalmente gratis, sin registro, sin marcas de agua y sin límites en la cantidad ni el tamaño de las imágenes más allá de lo que permita la memoria de tu dispositivo. El sitio se mantiene con anuncios discretos.",
    },
    {
      q: "¿Redimensionar reducirá la calidad de mi imagen?",
      a: (
        <>
          Hacer una imagen más pequeña es delicado con la calidad porque los
          píxeles se promedian de forma inteligente mediante remuestreo Lanczos
          de alta calidad, que mantiene los bordes nítidos y evita el aspecto
          dentado del escalado simple. La calidad solo se resiente si amplías
          (escalas hacia arriba) una imagen más allá de su tamaño original, ya
          que no hay detalle real que inventar.
        </>
      ),
      text: "Hacer una imagen más pequeña es delicado con la calidad porque los píxeles se promedian mediante remuestreo Lanczos de alta calidad, que mantiene los bordes nítidos. La calidad solo se resiente si amplías una imagen más allá de su tamaño original, porque no hay detalle real que inventar.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo redimensionar?",
      a: (
        <>
          No hay un límite fijo: depende de la memoria disponible en tu
          dispositivo. Las fotos habituales de unos pocos megabytes e incluso
          imágenes muy grandes de 40-80 MP se redimensionan sin problemas. Los
          lotes grandes se procesan de un archivo en archivo para mantener bajo
          el uso de memoria.
        </>
      ),
      text: "No hay un límite fijo; depende de la memoria disponible en tu dispositivo. Las fotos habituales de unos pocos megabytes e incluso imágenes muy grandes de 40-80 MP se redimensionan sin problemas. Los lotes grandes se procesan de un archivo en archivo para mantener bajo el uso de memoria.",
    },
    {
      q: "¿Puedo mantener la relación de aspecto para que mi imagen no se vea estirada?",
      a: (
        <>
          Sí. Mantén marcada la casilla «Mantener relación de aspecto» e
          introduce solo un ancho o solo un alto: la otra dimensión se calcula
          automáticamente para que la imagen escale de forma proporcional.
          Desmárcala únicamente cuando necesites deliberadamente dimensiones
          exactas y no proporcionales.
        </>
      ),
      text: "Sí. Mantén marcada la casilla Mantener relación de aspecto e introduce solo un ancho o solo un alto; la otra dimensión se calcula automáticamente para que la imagen escale de forma proporcional. Desmárcala únicamente cuando necesites deliberadamente dimensiones exactas y no proporcionales.",
    },
    {
      q: "¿Puedo redimensionar y comprimir al mismo tiempo?",
      a: (
        <>
          Sí, y deberías hacerlo. Define las dimensiones objetivo y luego elige
          un formato de salida y un nivel de calidad. El redimensionado reduce
          el número de píxeles mientras que la compresión exprime los píxeles
          restantes, así que combinar ambos da el archivo más pequeño posible en
          una sola pasada.
        </>
      ),
      text: "Sí, y deberías hacerlo. Define las dimensiones objetivo y luego elige un formato de salida y un nivel de calidad. El redimensionado reduce el número de píxeles mientras que la compresión exprime los píxeles restantes, así que combinar ambos da el archivo más pequeño posible en una sola pasada.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué redimensionar tus imágenes?</h2>
      <p>
        Los teléfonos y las cámaras modernas capturan imágenes enormes: una
        sola foto puede tener 6000 píxeles de ancho y pesar diez megabytes o
        más. Eso es mucho más detalle del que casi cualquier pantalla, correo o
        página web mostrará jamás. La cabecera de un blog puede mostrarse a 1200
        píxeles de ancho; una foto de perfil a 400; la firma de un correo a 150.
        Enviar un archivo de 6000 píxeles a un hueco de 1200 píxeles desperdicia
        ancho de banda, ralentiza la carga de las páginas e infla los adjuntos
        sin ningún beneficio visible.
      </p>
      <p>
        Redimensionar es también la{" "}
        <strong>palanca más potente que tienes sobre el tamaño del archivo</strong>.
        Como los datos de una imagen escalan con su número total de píxeles,
        reducir a la mitad tanto el ancho como el alto elimina aproximadamente
        tres cuartas partes de los píxeles —y, por tanto, la mayor parte del
        tamaño del archivo— antes incluso de cualquier compresión. Bajar la
        calidad JPEG podría recortar entre un 30 y un 50 %; redimensionar una
        foto demasiado grande a su tamaño real de visualización suele recortar
        entre un 80 y un 95 %. Si un archivo te parece demasiado grande,
        redimensiona primero y comprime después.
      </p>
      <p>
        Y como esta herramienta funciona por completo en tu dispositivo, es la
        forma privada de hacerlo. Otros redimensionadores online suben tus fotos
        a un servidor remoto, las procesan allí y te las devuelven. Aquí tus
        imágenes se leen en memoria, se redimensionan localmente y se te
        devuelven al instante: nunca tocan una red.
      </p>

      <h2 id="quality">Cómo afecta el redimensionado a la calidad</h2>
      <p>
        Reducir el tamaño de una imagen es, por naturaleza, delicado con la
        calidad, pero <em>cómo</em> se combinan los píxeles importa mucho. El
        escalado simple se limita a descartar píxeles, lo que produce bordes
        dentados y parpadeo en los detalles finos. Esta herramienta usa en su
        lugar el <strong>remuestreo Lanczos</strong> de alta calidad, que
        pondera un vecindario de píxeles circundantes para cada píxel de salida.
        El resultado mantiene los bordes nítidos y el texto legible, de modo que
        una imagen reducida se ve limpia en lugar de borrosa o con dientes de
        sierra.
      </p>
      <p>
        La única operación que realmente perjudica es el{" "}
        <strong>escalado hacia arriba</strong>: ampliar una imagen más allá de
        sus dimensiones originales. Ningún remuestreador puede inventar detalle
        que nunca se capturó, así que una foto ampliada se ve blanda y
        emborronada. Como norma, redimensiona siempre solo hacia{" "}
        <em>abajo</em>: elige el mayor tamaño que realmente necesites y
        redimensiona a ese, nunca por encima de las dimensiones de origen.
        Cuando además conviertes a un formato con pérdida, recuerda que la
        compresión y el redimensionado se acumulan: una imagen redimensionada
        tiene menos píxeles que comprimir, que es exactamente por lo que ambos
        juntos producen archivos tan pequeños.
      </p>

      <h2 id="sizes">Píxeles, porcentaje y tamaños objetivo habituales</h2>
      <p>
        El modo <strong>porcentaje</strong> es ideal para lotes: pon un 50 % y
        cada imagen se reduce de forma proporcional sin importar su tamaño de
        partida. El modo <strong>píxeles</strong> es para objetivos precisos:
        escribe un ancho (o un alto) y, con la relación de aspecto bloqueada, la
        otra dimensión se calcula por ti para que nada se estire. La relación de
        aspecto no es más que la proporción entre el ancho y el alto (16:9, 4:3,
        1:1); mantenerla intacta es lo que evita que las caras y los logotipos
        se vean aplastados. Puedes leer más sobre cómo funcionan las imágenes y
        sus dimensiones en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          la guía de imágenes en la web de MDN
        </a>
        .
      </p>
      <p>
        Objetivos útiles que conviene tener presentes: la mayoría del contenido{" "}
        <strong>web</strong> luce muy bien entre 1200 y 2000 píxeles en el lado
        largo (usa el extremo mayor para imágenes hero a todo ancho en pantallas
        de alta densidad). Los adjuntos y firmas de <strong>correo</strong>{" "}
        deberían mantenerse normalmente en 800 píxeles o menos para no saturar
        las bandejas de entrada. Para las <strong>redes sociales</strong>, las
        dimensiones habituales son aproximadamente 1080×1080 para una
        publicación cuadrada de Instagram, 1080×1920 para historias y reels
        verticales, 1200×630 para una vista previa de enlace de Facebook u Open
        Graph, y 1500×500 para una cabecera de X/Twitter. En caso de duda,
        redimensiona al mayor lugar donde aparecerá la imagen y deja que la
        plataforma la reduzca desde ahí.
      </p>

      <h2 id="tips">Consejos para obtener los mejores resultados</h2>
      <ul>
        <li>
          <strong>Nunca escales hacia arriba.</strong> Ampliar más allá del
          tamaño original solo añade desenfoque. Elige la mayor dimensión que
          realmente necesites y detente ahí.
        </li>
        <li>
          <strong>Redimensiona antes de comprimir.</strong> Menos píxeles
          significan un archivo más pequeño y menos trabajo para el codificador.
          Para obtener las fotos más pequeñas, redimensiónalas aquí y luego
          pásalas por la{" "}
          <Link href="/es/compress-jpeg">compresión JPEG</Link>.
        </li>
        <li>
          <strong>Bloquea la relación de aspecto.</strong> Introduce solo el
          ancho o solo el alto y deja que la otra dimensión se rellene
          automáticamente: es la forma más fácil de evitar imágenes estiradas y
          deformadas.
        </li>
        <li>
          <strong>Convierte mientras redimensionas.</strong> Cambiar a WebP o
          AVIF con el{" "}
          <Link href="/es/image-converter">conversor de imágenes</Link> puede
          reducir una foto redimensionada otro 25-50 % sin pérdida de calidad
          visible.
        </li>
        <li>
          <strong>Conserva tus originales.</strong> Redimensiona cada vez a
          partir de un máster a resolución completa en lugar de volver a
          redimensionar una copia ya reducida, lo que acumula pérdida de
          calidad.
        </li>
      </ul>
    </>
  ),
};
