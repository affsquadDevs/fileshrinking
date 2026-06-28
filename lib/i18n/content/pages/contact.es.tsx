import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Contacto",
  metaDescription:
    "Ponte en contacto con FileShrinking: preguntas, comentarios, errores o ideas. Escribe a hello@fileshrinking.com — privacidad primero, sin datos guardados.",
  title: "Contáctanos",
  intro: (
    <>
      Nos encantaría saber de ti. Tanto si tienes una pregunta, un comentario,
      un error que informar o una idea para una función, el formulario de abajo
      es la forma más rápida de llegar a las personas que crean FileShrinking.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="get-in-touch">Ponte en contacto</h2>
      <p>
        FileShrinking es un conjunto de herramientas gratuito y centrado en la
        privacidad para reducir archivos directamente en tu navegador: desde
        imágenes <Link href="/es/compress-jpeg">JPEG</Link> y{" "}
        <Link href="/es/compress-png">PNG</Link> hasta{" "}
        <Link href="/es/pdf-compressor">documentos PDF</Link>,{" "}
        <Link href="/es/video-compressor">vídeo</Link> y{" "}
        <Link href="/es/audio-compressor">audio</Link>. Como cada herramienta se
        ejecuta por completo en tu propio dispositivo, no vemos tus archivos y no
        podemos recuperarlos ni inspeccionarlos. Pero para cualquier otra cosa
        &mdash; cómo funciona una herramienta, por qué un resultado se ve como se
        ve o qué deberíamos crear a continuación &mdash; estaremos encantados de
        ayudarte.
      </p>
      <p>Motivos por los que la gente suele escribirnos:</p>
      <ul>
        <li>
          <strong>Preguntas</strong> sobre cómo funciona una herramienta, qué
          formato elegir o cómo obtener el archivo más pequeño sin perder
          calidad.
        </li>
        <li>
          <strong>Informes de errores</strong> &mdash; un archivo que no se
          procesa, un botón que no responde o cualquier cosa que parezca rota.
          Indicarnos tu navegador y sistema operativo nos ayuda a reproducirlo
          rápidamente.
        </li>
        <li>
          <strong>Solicitudes de funciones</strong> &mdash; un formato que
          desearías que admitiéramos, una opción que echas en falta o un flujo de
          trabajo que podríamos mejorar.
        </li>
        <li>
          <strong>Comentarios</strong> de cualquier tipo, incluyendo lo que te
          encanta y lo que te frustra. Todo influye en lo que hacemos después.
        </li>
      </ul>

      <h2 id="form">Envíanos un mensaje</h2>
      <p>
        Rellena el formulario de abajo y haz clic en &laquo;Enviar
        mensaje&raquo;. Hay algo importante que debes saber sobre cómo funciona:{" "}
        <strong>
          el formulario redacta un correo en tu propia aplicación de correo en
          lugar de enviarnos nada directamente.
        </strong>{" "}
        Cuando lo envías, tu dispositivo abre tu cliente de correo predeterminado
        (como Apple Mail, Outlook o Gmail) con el mensaje ya escrito y dirigido a
        nosotros. No se transmite nada hasta que <em>tú</em> pulsas enviar dentro
        de esa aplicación. Como resultado, FileShrinking no recopila, transmite a
        un servidor ni almacena ningún dato del mensaje a través de esta página
        &mdash; el mismo principio de privacidad que mantiene tus archivos en tu
        dispositivo se aplica también a tus mensajes.
      </p>

      <ContactForm />

      <h2 id="email">¿Prefieres escribir directamente por correo?</h2>
      <p>
        Siempre puedes contactarnos a la manera tradicional. Escribe a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> desde
        la cuenta que prefieras y tu mensaje llegará directamente a nuestra
        bandeja de soporte. Esto resulta útil si tu navegador bloquea la acción
        de &laquo;abrir mi aplicación de correo&raquo; del formulario, si estás en
        un ordenador compartido sin un cliente de correo configurado, o si
        simplemente quieres adjuntar una captura de pantalla &mdash; lo que a
        menudo hace que un informe de error sea mucho más fácil de entender.
      </p>

      <h2 id="response-times">Tiempos de respuesta</h2>
      <p>
        FileShrinking lo lleva un equipo pequeño, así que leemos cada mensaje
        personalmente en lugar de derivarlos a un centro de llamadas. Intentamos
        responder en un plazo de <strong>dos a tres días laborables</strong>. En
        periodos de mucha actividad, o ante preguntas técnicas complejas que
        requieren investigación, puede tardar algo más &mdash; gracias de
        antemano por tu paciencia. Si no recibes respuesta en una semana
        aproximadamente, revisa tu carpeta de spam o correo no deseado y luego no
        dudes en volver a escribirnos por si tu mensaje original se perdió.
      </p>
      <p>
        Ten en cuenta que ofrecemos soporte únicamente en inglés y que no podemos
        ayudarte con archivos que hayas procesado en otro lugar ni con software de
        terceros. Para preguntas sobre cómo tratamos los datos y sobre las
        limitadas analíticas y publicidad de este sitio &mdash; todas sujetas a tu
        consentimiento &mdash; consulta nuestra{" "}
        <Link href="/es/privacy-policy">Política de privacidad</Link>. Para las
        normas que rigen el uso del sitio, consulta nuestras{" "}
        <Link href="/es/terms-of-service">Condiciones del servicio</Link>.
      </p>

      <h2 id="before-you-write">Antes de escribir, un consejo rápido</h2>
      <p>
        Muchas preguntas habituales ya están respondidas en la página de cada
        herramienta, donde encontrarás unas breves preguntas frecuentes sobre
        privacidad, límites de tamaño, calidad y procesamiento por lotes. Si
        sientes curiosidad por quién crea FileShrinking y por qué elegimos un
        enfoque totalmente del lado del cliente, nuestra{" "}
        <Link href="/es/about">página Quiénes somos</Link> cuenta la historia. Y
        si tu respuesta no está ahí, para eso es exactamente el formulario de
        arriba &mdash; no dudes en escribirnos.
      </p>
    </>
  ),
};
