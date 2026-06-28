import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Acerca de FileShrinking",
  metaDescription:
    "Conoce quién crea FileShrinking y por qué nuestro compresor 100% en el navegador mantiene tus imágenes, PDF, vídeo y audio en tu dispositivo.",
  title: "Acerca de FileShrinking",
  intro: (
    <>
      FileShrinking es un conjunto de herramientas gratuito y centrado en la
      privacidad para comprimir imágenes, PDF, vídeo y audio. Cada archivo se
      procesa por completo en tu navegador, así que nada de lo que abras aquí se
      sube nunca a un servidor.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2>Nuestra misión</h2>
      <p>
        FileShrinking existe para que la compresión de archivos sea realmente
        gratuita, realmente privada y esté al alcance de cualquiera que tenga un
        navegador web. Los archivos grandes ralentizan los sitios web, saturan
        las bandejas de entrada y llenan el almacenamiento del móvil y los planes
        en la nube. Reducirlos no debería exigir instalar software, crear una
        cuenta, pagar una suscripción ni entregar tus documentos personales a una
        empresa que nunca has conocido. Nuestro objetivo es sencillo: ofrecerte
        una compresión de nivel profesional que se ejecuta en tu propio
        dispositivo, no cuesta nada y respeta tu privacidad desde el diseño.
      </p>

      <h2>Por qué importa el &laquo;100% en tu navegador&raquo;</h2>
      <p>
        La mayoría de los compresores en línea funcionan subiendo tu archivo a un
        servidor remoto, procesándolo allí y devolviéndote el resultado. Eso
        significa que una copia de tu foto, contrato o vídeo casero queda en el
        ordenador de otra persona, al menos temporalmente. FileShrinking funciona
        de otra forma. Cuando eliges un archivo, este se carga en la memoria de tu
        navegador y se comprime localmente usando compilaciones en WebAssembly de
        codificadores de código abierto y de confianza como MozJPEG, OxiPNG y
        FFmpeg. El archivo final se te devuelve directamente.
      </p>
      <p>
        El resultado práctico es que <strong>tus archivos físicamente nunca salen
        de tu dispositivo</strong>. No hay nada que podamos almacenar, nada que
        podamos filtrar en una brecha de datos y nada que podamos vender o
        compartir. Puedes comprobarlo tú mismo: abre cualquiera de nuestras
        herramientas, desconéctate de internet y la compresión seguirá
        funcionando, porque todo el trabajo pesado ocurre en tu máquina. Ese
        modelo exclusivamente local es la base de la confianza que te pedimos que
        deposites en nosotros, y no es un eslogan de marketing del que podamos
        desdecirnos discretamente más adelante.
      </p>

      <h2>Qué creamos</h2>
      <p>
        FileShrinking es un conjunto creciente de herramientas centradas en una
        sola tarea. Nuestro{" "}
        <Link href="/es/image-compressor">compresor de imágenes</Link> admite
        JPEG, PNG, WebP, AVIF y GIF, con herramientas complementarias para
        convertir y redimensionar. Junto a las herramientas de imagen ofrecemos un
        compresor de PDF que recomprime las imágenes incrustadas dentro de los
        documentos, compresión de vídeo en el navegador para formatos como MP4,
        MOV, WebM, MKV y AVI, y un compresor de audio para MP3, WAV y AAC. Todas
        las herramientas comparten los mismos principios: sin subidas, sin
        registro, sin marcas de agua y sin límites artificiales en el número o
        tamaño de archivos más allá de lo que permita la memoria de tu propio
        dispositivo.
      </p>

      <h2>Cómo investigamos y redactamos nuestras guías</h2>
      <p>
        Además de las herramientas, publicamos guías prácticas y artículos
        explicativos en nuestro{" "}
        <Link href="/es/blog">blog</Link> sobre cómo funcionan realmente los
        formatos de compresión y cómo conseguir el mejor equilibrio entre calidad
        y tamaño. Nos tomamos en serio la precisión. Nuestro proceso editorial
        parte de fuentes primarias y autorizadas: las propias especificaciones de
        los formatos, la documentación de la plataforma web de{" "}
        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN Web Docs
        </a>{" "}
        y el{" "}
        <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
          W3C
        </a>
        , y la documentación de los codificadores de código abierto en los que se
        basan nuestras herramientas. Contrastamos las afirmaciones con el
        comportamiento real de las herramientas que publicamos, citamos nuestras
        fuentes para que puedas verificarlas y revisamos los artículos cuando
        cambian los estándares o la compatibilidad de los navegadores. Cuando
        tenemos dudas, lo decimos en lugar de adivinar.
      </p>

      <h2>Quién mantiene FileShrinking</h2>
      <p>
        FileShrinking está creado y mantenido por un pequeño equipo independiente
        de desarrolladores web a quienes les importan el rendimiento y la
        privacidad en la web moderna. No contamos con capital riesgo ni tenemos un
        negocio de datos; el sitio se mantiene gratuito gracias a publicidad
        discreta y claramente identificada.
      </p>
      <p>
        Nuestros responsables proceden de entornos de rendimiento web y
        procesamiento de medios, y han pasado años ayudando a equipos a publicar
        páginas más ligeras y rápidas sin sacrificar la calidad. El equipo dirige
        la orientación técnica del proyecto, revisa cada herramienta antes de su
        lanzamiento y es responsable de los estándares editoriales descritos más
        arriba. Puedes contactar con nosotros directamente en{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2>Publicidad, analítica y tu consentimiento</h2>
      <p>
        Para mantener FileShrinking gratuito mostramos publicidad y usamos
        analítica para saber qué herramientas resultan útiles. Estos servicios de
        terceros están{" "}
        <strong>sujetos a tu consentimiento</strong>: los scripts de publicidad y
        analítica solo se cargan después de que aceptes, y puedes rechazarlos y
        seguir usando todas las herramientas. Y lo más importante: nada de esto
        cambia la forma en que se tratan tus archivos: la publicidad y la analítica
        nunca reciben tus documentos, fotos, vídeo o audio, porque estos nunca
        salen de tu dispositivo en primer lugar. Para conocer todos los detalles,
        consulta nuestras políticas de privacidad y de cookies publicadas.
      </p>

      <h2>Ponte en contacto</h2>
      <p>
        Las preguntas, los informes de errores o las ideas sobre la próxima
        herramienta que deberíamos crear siempre son bienvenidos. Visita nuestra{" "}
        <Link href="/es/contact">página de contacto</Link> o escríbenos a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
        Leemos todo y usamos tus comentarios para decidir qué mejorar.
      </p>
    </>
  ),
};
