import type { StaticPages } from "~/i18n/types";

/**
 * Spanish versions of the about + legal pages. Internal links point at the
 * Spanish URLs so a visitor never falls back into the English tree mid-policy.
 */
const pages: StaticPages = {
  about: {
    slug: "acerca-de",
    title: "Acerca de",
    description:
      "Acerca de StorageCalc: por qué existe este sitio independiente de calculadoras, quién lo mantiene, de dónde salen los cálculos y cómo ponerse en contacto.",
    heading: "Acerca de StorageCalc",
    subtitle:
      "Una colección independiente y gratuita de calculadoras de almacenamiento, creada porque las calculadoras de los fabricantes escondían las fórmulas.",
    body: `
      <h2>Por qué existe este sitio</h2>
      <p>Todos los fabricantes de almacenamiento (Hikvision, Synology, AWS, Azure) publican una calculadora en su web. Todas son <em>aceptables</em>, pero tienen tres problemas:</p>
      <ul>
        <li>Te encierran en el catálogo de un único fabricante. ¿Quieres comparar AWS S3 con Azure Blob? Acabas saltando entre tres pestañas e intentando recordar las tarifas de salida de datos.</li>
        <li>Ocultan la fórmula. Introduces unos valores, aparece un número y no tienes ni idea de cómo se ha obtenido.</li>
        <li>Están pensadas como embudos de venta. Llamadas a la acción comerciales en cada pantalla, avisos para crear una cuenta y fricción del tipo «habla con ventas».</li>
      </ul>
      <p>StorageCalc corrige los tres. Cada calculadora muestra su fórmula. Cada página es gratuita, sin registro y está pensada para darte una cifra fiable rápido.</p>

      <h2>De dónde salen los cálculos</h2>
      <p>La fórmula de cada calculadora procede de estándares del sector documentados públicamente:</p>
      <ul>
        <li><strong>RAID</strong>: definiciones RAID de la SNIA y fórmulas estándar de capacidad, paridad y tolerancia a fallos.</li>
        <li><strong>Videovigilancia</strong>: tablas de dimensionamiento publicadas por Hikvision, Hanwha (Wisenet) y Axis. Tasas de bits de referencia a 25 fps por resolución, ajustadas según la eficiencia del códec.</li>
        <li><strong>Nube</strong>: precios públicos de AWS S3, Azure Blob, Google Cloud Storage y Firebase Cloud Storage, región de EE. UU.</li>
      </ul>
      <p>Cuando los fabricantes no publican cifras exactas, usamos valores intermedios prudentes que coinciden con instalaciones reales. La sección «Sobre esta calculadora» de cada página indica la fuente concreta.</p>

      <h2>Qué encontrarás aquí</h2>
      <p>Una biblioteca de calculadoras de RAID, videovigilancia, NAS, almacenamiento en la nube y algunos ámbitos especializados. La lista completa está en la <a href="/es/">página de inicio</a>. Vamos añadiendo más a medida que detectamos búsquedas mal cubiertas.</p>

      <h2>Qué NO encontrarás</h2>
      <ul>
        <li>Cuentas. No hay nada que registrar.</li>
        <li>Seguimiento antes de que aceptes el aviso de cookies. Consulta la <a href="/es/politica-de-privacidad/">política de privacidad</a>.</li>
        <li>Posiciones pagadas. Las calculadoras no se ordenan según quién paga, sino alfabéticamente o por categoría.</li>
        <li>Patrocinio de fabricantes. Si en el futuro ves anuncios, serán de Google AdSense y estarán claramente identificados.</li>
      </ul>

      <h2>Cómo se mantiene gratuito este sitio</h2>
      <p>El sitio es estático y está alojado en Cloudflare Pages (plan gratuito), y con el tiempo podría mostrar anuncios de Google para cubrir la renovación del dominio. Los cálculos en sí seguirán siendo siempre gratuitos y sin registro.</p>

      <h2>Contribuciones y correcciones</h2>
      <p>Si encuentras un fallo, una especificación de fabricante equivocada o quieres que añadamos una calculadora:</p>
      <ul>
        <li>Abre una incidencia o una pull request en el repositorio del proyecto (enlace pendiente).</li>
        <li>O escribe al responsable del sitio (enlace pendiente).</li>
      </ul>
      <p>Los avisos de errores de cálculo son la máxima prioridad: la exactitud es la razón de ser de este sitio.</p>

      <h2>Legal</h2>
      <ul>
        <li><a href="/es/politica-de-privacidad/">Política de privacidad</a></li>
        <li><a href="/es/politica-de-cookies/">Política de cookies</a></li>
        <li><a href="/es/terminos-de-servicio/">Términos del servicio</a></li>
        <li><a href="/es/descargo-de-responsabilidad/">Descargo de responsabilidad</a>, el más importante. Léelo antes de basar una decisión real en cualquiera de estas cifras.</li>
      </ul>
    `,
  },

  disclaimer: {
    slug: "descargo-de-responsabilidad",
    title: "Descargo de responsabilidad",
    description:
      "Descargo de responsabilidad de StorageCalc: las calculadoras ofrecen estimaciones, los precios de los fabricantes cambian, el RAID no es una copia de seguridad y otros puntos que conviene conocer antes de fiarse de un resultado.",
    subtitle:
      "Qué pueden y qué no pueden decirte estas calculadoras. Léelo antes de basar una decisión real en una cifra.",
    updated: "Última actualización: 18/05/2026",
    body: `
      <h2>Generalidades</h2>
      <p>Las calculadoras de StorageCalc son <strong>herramientas de estimación destinadas únicamente a la planificación</strong>. Utilizan fórmulas estándar del sector y especificaciones públicas de los fabricantes, pero los resultados reales varían. Verifica siempre con la documentación actualizada del fabricante antes de comprar hardware, firmar contratos de nube o tomar decisiones críticas para la seguridad.</p>

      <h2>Calculadoras RAID</h2>
      <ul>
        <li><strong>El RAID no es una copia de seguridad.</strong> El RAID protege frente al fallo de un disco, no frente a la corrupción de archivos, el ransomware, un borrado accidental, un incendio o un robo. Mantén siempre copias fuera del arreglo de todo aquello que no puedas permitirte perder.</li>
        <li>Los multiplicadores de velocidad suponen E/S paralelas ideales y ausencia de cuellos de botella en la controladora. El rendimiento real depende de la controladora RAID, la velocidad del bus, el tipo de disco (HDD, SSD o NVMe), el tamaño de banda y la carga de trabajo simultánea.</li>
        <li>Las cifras de tolerancia a fallos corresponden al mejor de los casos en régimen estable. Las ventanas de reconstrucción y las tasas de errores de lectura irrecuperables (URE) pueden cambiar el cálculo en la práctica, sobre todo en arreglos grandes con discos de varios terabytes.</li>
        <li>La sobrecarga del sistema de archivos (ext4, XFS, ZFS, NTFS) suele consumir entre un 1 y un 10 % de la capacidad bruta. Las instantáneas, la deduplicación y los bloques reservados la reducen todavía más.</li>
      </ul>

      <h2>Calculadoras de videovigilancia y CCTV</h2>
      <ul>
        <li>Las estimaciones de tasa de bits se basan en las tablas de dimensionamiento publicadas por los fabricantes (Hikvision, Hanwha, Axis, etc.). La tasa real varía un ±20 % según la complejidad de la escena: las escenas con mucha actividad consumen más y las estáticas menos.</li>
        <li>El ahorro de los códecs inteligentes (H.265+, WiseStream II, Zipstream) oscila entre el 50 y el 80 % según la actividad de la escena. Modelamos un 75 %, que se aproxima a una escena urbana típica.</li>
        <li>El supuesto de un ciclo de actividad del 40 % para la grabación por movimiento es prudente. Con una detección de eventos bien ajustada (clasificación de persona o vehículo), el tiempo grabado real puede quedar por debajo del 10 % de la franja activa.</li>
        <li>La grabación de audio, los archivos con doble flujo y los clips de incidencias añaden entre un 5 y un 15 % sobre la estimación de solo vídeo de la calculadora.</li>
        <li>Los discos recomendados son exclusivamente modelos para videovigilancia (WD Purple, Seagate SkyHawk, Toshiba S300). Los discos de consumo funcionarán un tiempo y fallarán pronto bajo cargas de escritura continua.</li>
      </ul>

      <h2>Calculadoras de almacenamiento en la nube</h2>
      <ul>
        <li><strong>Los precios cambian con frecuencia.</strong> Las cifras de esta calculadora son las tarifas públicas de la región de EE. UU. más habitual a principios de 2025. El coste real depende de la región, los descuentos por compromiso de uso, los acuerdos corporativos y los cambios de precio posteriores a la publicación.</li>
        <li>Los niveles gratuitos están modelados solo en parte. Se descuentan los niveles gratuitos de salida de datos (100 GB/mes en AWS, Azure y GCP). No se descuentan los de almacenamiento (5 GB de Firebase Spark, 5 GB del nivel gratuito de AWS durante 12 meses) porque se aplican únicamente a cuentas nuevas y tienen condiciones de elegibilidad.</li>
        <li>El precio de las operaciones varía según la clase: usamos la tarifa pública por categoría de operación. La capacidad reservada, los Savings Plans y los descuentos por uso comprometido pueden reducir el coste real entre un 20 y un 50 %.</li>
        <li>Las transferencias entre regiones, los recargos por picos de solicitudes y las tarifas de transición del ciclo de vida pueden generar conceptos de factura no contemplados aquí.</li>
        <li><strong>No uses esta calculadora para facturar ni para comprometer presupuestos sin contrastarla con la calculadora oficial de cada proveedor y con las tarifas reales de tu cuenta.</strong></li>
      </ul>

      <h2>Calculadoras de trasteros y almacenamiento físico</h2>
      <ul>
        <li>Las estimaciones de capacidad suponen una densidad de embalaje razonable. Los objetos incómodos (colchones, sofás, equipos de gimnasio) y los espacios de protección reducen el volumen aprovechable entre un 20 y un 40 %.</li>
        <li>El precio de los trasteros varía mucho según la ubicación, la temporada y la demanda. Usa el tamaño recomendado por la calculadora, pero pide presupuestos reales en tu zona.</li>
      </ul>

      <h2>Marcas de los fabricantes</h2>
      <p>StorageCalc menciona a varios fabricantes (Hikvision, Hanwha, Axis, Genetec, Ubiquiti, Synology, Amazon, Microsoft, Google, Firebase, WD, Seagate, Toshiba) por sus nombres de producto. Esas marcas pertenecen a sus respectivos propietarios. Su uso aquí es meramente descriptivo y no implica respaldo, colaboración, afiliación ni patrocinio.</p>

      <h2>Esto no es asesoramiento profesional</h2>
      <p>Este sitio lo gestiona un editor independiente, no un arquitecto de almacenamiento certificado, un instalador de videovigilancia ni una consultora de nube. Para decisiones de almacenamiento críticas para el negocio, la seguridad o el cumplimiento normativo, consulta a un profesional cualificado.</p>

      <h2>Sin garantías</h2>
      <p>El servicio se ofrece «tal cual», sin garantía de ningún tipo. Consulta nuestros <a href="/es/terminos-de-servicio/">términos del servicio</a> para ver el descargo completo y la limitación de responsabilidad.</p>
    `,
  },

  "privacy-policy": {
    slug: "politica-de-privacidad",
    title: "Política de privacidad",
    description:
      "Qué recopila StorageCalc, por qué y cómo rechazarlo. En resumen: casi ningún dato personal, pero usamos Google Analytics y podemos mostrar anuncios de Google.",
    subtitle:
      "Qué recopilamos, por qué y cómo rechazarlo. En resumen: casi ningún dato personal, pero usamos Google Analytics y podemos mostrar anuncios de Google.",
    updated: "Última actualización: 18/05/2026",
    body: `
      <h2>Resumen breve</h2>
      <p>StorageCalc es un sitio estático. No hay registro de usuarios, ni base de datos que guarde lo que introduces, ni formulario de contacto, ni recogida de correos electrónicos. Todas las calculadoras funcionan íntegramente en tu navegador.</p>
      <p>Los únicos datos que recopilamos son estadísticas de uso anónimas mediante <strong>Google Analytics</strong>, y podemos mostrar publicidad a través de <strong>Google Ads</strong>. Ambas cosas pueden rechazarse desde el aviso de cookies.</p>

      <h2>1. Quiénes somos</h2>
      <p>Este sitio, StorageCalc, lo gestiona un editor independiente que ofrece calculadoras de almacenamiento gratuitas. No somos una empresa, no tenemos inversores detrás y no vendemos datos. Puedes contactarnos mediante la información de la <a href="/es/acerca-de/">página Acerca de</a>.</p>

      <h2>2. Información que recopilamos</h2>
      <h3>2.1 Lo que SÍ recopilamos</h3>
      <ul>
        <li><strong>Datos analíticos</strong> mediante Google Analytics 4: páginas vistas anonimizadas, país o ciudad aproximados, tipo de dispositivo, URL de procedencia y tiempo en la página. Nos sirve para saber qué calculadoras resultan útiles y cuáles conviene mejorar.</li>
        <li><strong>Datos publicitarios</strong> mediante Google Ads / AdSense (cuando estén activos): cookies usadas para personalizar anuncios y limitar su frecuencia.</li>
      </ul>

      <h3>2.2 Lo que NO recopilamos</h3>
      <ul>
        <li>Nombres, direcciones de correo, teléfonos ni ninguna información que permita identificarte.</li>
        <li>Los datos que introduces en las calculadoras (número de discos, tasas de bits de cámaras, volúmenes en la nube): permanecen únicamente en tu navegador.</li>
        <li>Credenciales de acceso: no hay cuentas.</li>
        <li>Información de pago: el sitio es gratuito y no se vende nada.</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>Consulta la <a href="/es/politica-de-cookies/">política de cookies</a> específica para conocer todos los detalles. En resumen:</p>
      <ul>
        <li>No se instala ninguna cookie hasta que la aceptes en el aviso.</li>
        <li>Si aceptas: se instalan cookies de Google Analytics y Google Ads.</li>
        <li>Si rechazas: no se instala nada y puedes seguir usando todas las calculadoras.</li>
        <li>Tu elección se guarda en el <code>localStorage</code> de tu dispositivo.</li>
      </ul>

      <h2>4. Google Analytics</h2>
      <p>Usamos Google Analytics 4 para medir el tráfico agregado. Google puede tratar esos datos conforme a su propia <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">política de privacidad</a>. Puedes instalar el <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">complemento de inhabilitación de Google Analytics</a> para bloquear GA en todos los sitios, o simplemente rechazar las cookies en este.</p>
      <p>No activamos Google Signals, ni los informes demográficos, ni las funciones publicitarias en nuestra propiedad de GA.</p>

      <h2>5. Google Ads / AdSense</h2>
      <p>Este sitio puede mostrar anuncios servidos por Google AdSense u otras redes publicitarias, que pueden usar cookies para mostrar anuncios relevantes. Puedes gestionar la personalización de anuncios en la <a href="https://adssettings.google.com" rel="noopener" target="_blank">configuración de anuncios de Google</a>.</p>

      <h2>6. Servicios de terceros</h2>
      <ul>
        <li><strong>Cloudflare</strong> (alojamiento y CDN): ve las direcciones IP para enrutar el tráfico. Se aplica su política de privacidad.</li>
        <li><strong>Google Fonts</strong>: la tipografía Inter se carga desde la CDN de Google, que puede registrar la solicitud.</li>
        <li><strong>Google Analytics</strong>: consulta el apartado 4.</li>
        <li><strong>Google Ads</strong>: consulta el apartado 5.</li>
      </ul>

      <h2>7. Tus derechos (RGPD / CCPA)</h2>
      <p>Como no recopilamos datos personales, la mayoría de los derechos del interesado no resultan aplicables. Para el tratamiento que realiza Google Analytics, ejerce tus derechos directamente ante Google mediante los enlaces anteriores. También puedes:</p>
      <ul>
        <li>Rechazar todas las cookies desde nuestro aviso.</li>
        <li>Borrar en cualquier momento las cookies y el <code>localStorage</code> de tu navegador.</li>
        <li>Usar el modo de navegación privada para no dejar rastro.</li>
      </ul>

      <h2>8. Menores</h2>
      <p>Este sitio no está dirigido a menores de 13 años. No recopilamos datos de nadie de forma consciente.</p>

      <h2>9. Cambios en esta política</h2>
      <p>Si esta política cambia de forma sustancial, actualizaremos la fecha de última actualización que figura al principio de la página. Seguir usando el sitio tras los cambios implica su aceptación.</p>

      <h2>10. Contacto</h2>
      <p>¿Dudas sobre esta política? Consulta los datos de contacto en la <a href="/es/acerca-de/">página Acerca de</a>.</p>
    `,
  },

  "cookie-policy": {
    slug: "politica-de-cookies",
    title: "Política de cookies",
    description:
      "Qué cookies utiliza StorageCalc, para qué sirven y cómo controlarlas.",
    subtitle:
      "Qué cookies utiliza StorageCalc, para qué sirven y cómo controlarlas.",
    updated: "Última actualización: 18/05/2026",
    body: `
      <h2>Resumen breve</h2>
      <p>No instalamos ninguna cookie hasta que pulsas <strong>Aceptar</strong> en el aviso. Si pulsas <strong>Rechazar</strong>, no se instala ninguna y todas las calculadoras siguen funcionando con normalidad. Tu elección se guarda en el <code>localStorage</code>, no en una cookie.</p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo. Pueden almacenar preferencias, seguir tu navegación entre páginas o habilitar determinadas funciones. Cada cookie tiene una finalidad distinta: algunas son imprescindibles y otras opcionales.</p>

      <h2>2. Cookies que utilizamos</h2>

      <h3>Cookies imprescindibles</h3>
      <p>Ninguna. El sitio funciona perfectamente sin cookies.</p>

      <h3>Cookies analíticas (solo si aceptas)</h3>
      <table class="my-4 w-full border-collapse text-sm">
        <thead>
          <tr class="border-b border-slate-300 text-left">
            <th class="py-2 pr-3 font-semibold text-slate-900">Cookie</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Proveedor</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Finalidad</th>
            <th class="py-2 font-semibold text-slate-900">Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">_ga</td>
            <td class="py-2 pr-3">Google Analytics</td>
            <td class="py-2 pr-3">Distingue a los usuarios únicos.</td>
            <td class="py-2">2 años</td>
          </tr>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">_ga_*</td>
            <td class="py-2 pr-3">Google Analytics</td>
            <td class="py-2 pr-3">Conserva el estado de la sesión.</td>
            <td class="py-2">2 años</td>
          </tr>
        </tbody>
      </table>

      <h3>Cookies publicitarias (solo si aceptas y se muestran anuncios)</h3>
      <table class="my-4 w-full border-collapse text-sm">
        <thead>
          <tr class="border-b border-slate-300 text-left">
            <th class="py-2 pr-3 font-semibold text-slate-900">Cookie</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Proveedor</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Finalidad</th>
            <th class="py-2 font-semibold text-slate-900">Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">__gads / __gpi</td>
            <td class="py-2 pr-3">Google AdSense</td>
            <td class="py-2 pr-3">Entrega de anuncios, límite de frecuencia y prevención del fraude.</td>
            <td class="py-2">13 meses</td>
          </tr>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">IDE / NID</td>
            <td class="py-2 pr-3">Google Ads</td>
            <td class="py-2 pr-3">Personalización de anuncios en los servicios de Google.</td>
            <td class="py-2">13 meses</td>
          </tr>
        </tbody>
      </table>

      <h2>3. localStorage</h2>
      <p>Guardamos un único elemento en el <code>localStorage</code> de tu navegador:</p>
      <ul>
        <li><code>consent</code>: conserva tu elección en el aviso de cookies (<code>accepted</code>, <code>rejected</code> o <code>dismissed</code>) para no volver a preguntarte.</li>
      </ul>
      <p>No es una cookie y no se envía a ningún servidor. Puedes borrarlo desde las herramientas de desarrollo del navegador o eliminando los datos del sitio.</p>

      <h2>4. Cómo gestionar las cookies</h2>
      <ul>
        <li><strong>En este sitio:</strong> usa el aviso para aceptar o rechazar. Para cambiar tu elección más adelante, borra los datos del sitio y recarga la página.</li>
        <li><strong>Google Analytics:</strong> instala el <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">complemento de inhabilitación</a>.</li>
        <li><strong>Google Ads:</strong> visita la <a href="https://adssettings.google.com" rel="noopener" target="_blank">configuración de anuncios de Google</a> para gestionar la personalización.</li>
        <li><strong>Todas las cookies:</strong> usa los controles de tu navegador (normalmente en Configuración → Privacidad).</li>
      </ul>

      <h2>5. Señal «Do Not Track»</h2>
      <p>Este sitio no responde por ahora a las señales «Do Not Track» del navegador, porque no existe consenso en el sector sobre cómo interpretarlas. Usa el aviso de cookies para rechazarlas: esa elección sí se aplica.</p>

      <h2>6. Cambios en esta política</h2>
      <p>Los cambios sustanciales se reflejarán en la fecha de última actualización. Si se introduce una nueva categoría de cookies, el aviso volverá a solicitar tu consentimiento.</p>
    `,
  },

  "terms-of-service": {
    slug: "terminos-de-servicio",
    title: "Términos del servicio",
    description:
      "Al usar StorageCalc aceptas estos términos. Son breves; aun así, léelos.",
    subtitle:
      "Al usar StorageCalc aceptas estos términos. Son breves; aun así, léelos.",
    updated: "Última actualización: 18/05/2026",
    body: `
      <h2>1. Aceptación</h2>
      <p>Al acceder a StorageCalc (el «Servicio») o utilizarlo, aceptas quedar vinculado por estos términos del servicio. Si no estás de acuerdo, no uses el Servicio. Se ofrece de forma gratuita y sin necesidad de crear una cuenta.</p>

      <h2>2. El Servicio</h2>
      <p>StorageCalc ofrece calculadoras interactivas para estimar la capacidad, el coste y la configuración de almacenamiento en distintas tecnologías (RAID, videovigilancia, NAS, nube, etc.). Todos los cálculos se ejecutan en tu navegador; no se envía ningún dato a un servidor.</p>

      <h2>3. Licencia de uso</h2>
      <p>Te concedemos una licencia personal, no exclusiva e intransferible para usar el Servicio con fines lícitos. Puedes:</p>
      <ul>
        <li>Usar las calculadoras con fines personales, educativos o de planificación comercial.</li>
        <li>Compartir enlaces a páginas concretas de calculadoras.</li>
        <li>Citar las calculadoras en artículos, presentaciones o pliegos técnicos (agradecemos el enlace).</li>
      </ul>
      <p>No puedes:</p>
      <ul>
        <li>Extraer, replicar ni rehospedar las calculadoras o sus cálculos sin autorización.</li>
        <li>Realizar ingeniería inversa, modificar o intentar extraer las estructuras de datos subyacentes.</li>
        <li>Usar el Servicio de forma que infrinja la legislación aplicable o los derechos de terceros.</li>
      </ul>

      <h2>4. Sin garantías: las calculadoras son estimaciones</h2>
      <p><strong>El Servicio se ofrece «TAL CUAL», sin garantía de ningún tipo.</strong> Las calculadoras son herramientas de estimación basadas en especificaciones públicas y fórmulas estándar del sector. No garantizamos su exactitud, integridad ni idoneidad para ningún fin concreto.</p>
      <ul>
        <li>Las especificaciones de los fabricantes cambian. Las fórmulas RAID tienen casos límite. Los precios de la nube cambian cada mes. Las tasas de bits de videovigilancia varían con la complejidad de la escena.</li>
        <li>Verifica siempre las cifras críticas con la documentación actualizada del fabricante antes de comprar, desplegar o asumir compromisos contractuales.</li>
        <li>Consulta nuestro <a href="/es/descargo-de-responsabilidad/">descargo de responsabilidad</a> para ver las salvedades de cada categoría.</li>
      </ul>

      <h2>5. Esto no es asesoramiento profesional</h2>
      <p>El Servicio no sustituye el asesoramiento de un arquitecto de almacenamiento cualificado, un instalador de videovigilancia, un arquitecto de nube u otro experto. Las decisiones que impliquen presupuesto, seguridad, cumplimiento normativo o infraestructuras críticas deben ser revisadas por un profesional cualificado.</p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>En la máxima medida permitida por la ley, ni StorageCalc, ni su responsable, ni sus colaboradores serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos (incluidos el lucro cesante y la pérdida de datos, de reputación u otras pérdidas intangibles) derivados del uso del Servicio, aun habiendo sido advertidos de esa posibilidad.</p>
      <p>Nuestra responsabilidad acumulada total por cualquier reclamación relacionada con el Servicio se limita a <strong>0 USD</strong> (cero), dado que el Servicio se presta de forma gratuita.</p>

      <h2>7. Enlaces de terceros y anuncios</h2>
      <p>El Servicio puede contener enlaces a sitios de terceros (documentación de fabricantes, herramientas relacionadas) y mostrar anuncios servidos por Google. No controlamos esos sitios ni esos anuncios y no somos responsables de su contenido, sus prácticas de privacidad ni su exactitud.</p>

      <h2>8. Propiedad intelectual</h2>
      <p>El Servicio, incluidos su diseño, su código y la implementación de las calculadoras, es propiedad intelectual de su responsable. Las marcas mencionadas (Hikvision, AWS, Azure, Synology, etc.) pertenecen a sus respectivos titulares. Su uso aquí es meramente descriptivo y no implica respaldo, colaboración ni afiliación.</p>

      <h2>9. Privacidad</h2>
      <p>Tu uso también se rige por nuestra <a href="/es/politica-de-privacidad/">política de privacidad</a> y nuestra <a href="/es/politica-de-cookies/">política de cookies</a>.</p>

      <h2>10. Cambios</h2>
      <p>Podemos actualizar estos términos cada cierto tiempo. Los cambios sustanciales se reflejarán en la fecha de última actualización. Seguir usando el sitio tras los cambios implica su aceptación.</p>

      <h2>11. Terminación</h2>
      <p>Podemos suspender o retirar el Servicio en cualquier momento y sin previo aviso. Tú puedes dejar de usarlo cuando quieras.</p>

      <h2>12. Legislación aplicable</h2>
      <p>Estos términos se rigen por la legislación de la jurisdicción en la que reside el responsable del sitio, sin atender a las normas sobre conflicto de leyes. Cualquier controversia se resolverá ante los tribunales de dicha jurisdicción.</p>

      <h2>13. Contacto</h2>
      <p>¿Alguna duda? Consulta la <a href="/es/acerca-de/">página Acerca de</a>.</p>
    `,
  },
};

export default pages;
