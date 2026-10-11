# Contexto del proyecto: landing "Fermento 47"

Pégalo al principio de un chat nuevo en claude.ai para seguir trabajando en el proyecto.

---

Hola Claude. Estoy haciendo una landing page de prueba y quiero seguir con ella aquí. Este es el contexto:

## Qué es

Landing de **Fermento 47**, una cervecería artesanal **ficticia** (sitio de prueba, no es un negocio real). La portada es un **"scroll world"**: un paseo en video por el local que avanza y retrocede con el scroll, inspirado en el proyecto de Arko de midudev (github.com/midudev/mcp-higgsfield-landing).

## Cómo se hizo

1. **7 imágenes con Nano Banana** (Gemini), una por parada del paseo: entrada, barra de grifos, mesas comunales, sala de fermentación, sala de barricas, mesa de cata y patio. Estilo: almacén de ladrillo de los años 20, acero negro, roble, cobre, luz ámbar, sin personas, 16:9.
2. **6 clips de video con Gemini/Veo**, de 10 s, cada uno con la imagen N como primer fotograma y la N+1 como último.
3. **Codificación con ffmpeg** (según la skill scroll-world): sin audio, `crf 20`, GOP 8 (`-g 8`), `unsharp`, color marcado como BT.709, `+faststart`. Recortes: clip 1 a 5 s (se acercaba de más a la barra), clip 3 sin los últimos 0,42 s y clip 4 sin los primeros 0,29 s (para que encajen).
4. **Pósters**: un WebP por parada, sacado del primer fotograma de su clip (el patio, del último fotograma del clip 6).

## Archivos (carpeta `leading-page/`)

- `index.html`: la landing. HTML, CSS y JS puros, sin build.
- `styles.css`: estilos. Tema oscuro, fondo `#131209`, texto crema `#f4ead8`, acento ámbar `#e39b3b`, fuente Manrope.
- `script.js`: configuración del paseo, apariciones al hacer scroll, frase con palabras que se iluminan, menú móvil y validación del formulario.
- `scroll-world.js`: motor de scroll de la skill **scroll-world** (github.com/oso95/scroll-world), con parches míos documentados al inicio del archivo.
- `video/paseo-1.mp4` … `paseo-6.mp4` y `img/paseo/parada-0.webp` … `parada-6.webp`.
- `legal.html` y `404.html`.
- `.claude/skills/`: las skills `scroll-world` y `landing-page-design` (github.com/elayadesign/ai-design-skills).

## Cómo está montado el paseo

Arquitectura A de scroll-world (paseo hacia delante): **cada parada lleva el clip que sale de ella** (sección 0 = clip 1 … sección 5 = clip 6) y el patio (sección 6) es solo imagen con el botón de reservar. Sin conectores. Ajustes: 2,4 pantallas de scroll por clip de 10 s (1,4 para el clip 1), `linger: 0.35`, `crossfade: 0.08`.

Parches que le hice al motor:
- La mezcla entre escenas no funcionaba (era un corte); ahora la escena entrante se dibuja encima mientras entra.
- `fade` y `blur` por sección para tapar las uniones que no encajan.
- `stillZoom: false` (las imágenes fijas no hacen zoom).
- `heading: 'h1'` para el título principal y `\n` para saltos de línea.
- El texto ya no se descentra al animarse.
- Si la descarga del clip falla (abriendo con doble clic, `file://`), usa la ruta directa.

## Problemas conocidos

- **Unión clip 2 → clip 3**: Gemini no usó la imagen de inicio en el clip 3, así que empieza en otro lugar (un arco con barriles). Se disimula con una mezcla larga y desenfocada (`fade: 0.8`, `blur: 10`). La solución real es regenerar ese clip con la imagen "Mesas comunales" como primer fotograma.
- **Unión clip 1 → clip 2**: la barra se ve un poco distinta en cada clip. Mezcla con desenfoque leve (`fade: 0.35`, `blur: 3`).
- **Clips 3 y 4** son de 848×478; el resto, 1280×720.
- **Móvil**: no hay versión 9:16; en el móvil se recorta el centro del video horizontal.
- Ya no tengo créditos en Gemini para generar más video.

## Cómo se abre

Con un servidor local: `npx serve C:\dev\leading-page` y luego `http://localhost:3000` (recargar con Ctrl + F5). Al cambiar un clip o un script, subir la versión (`?v=6` en `index.html` y `VERSION` en `script.js`) para saltarse la caché.

## Reglas de diseño que sigue (skill landing-page-design)

Una sola tipografía (Manrope), tamaños de la escala de Tailwind, espaciados de su tabla (0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96), fondos oscuros de su lista, curva de movimiento `cubic-bezier(0.32, 0.72, 0, 1)`, sin guiones en el texto, sin palabras sueltas al final de una línea, iconos de Phosphor.

---

**Lo que quiero hacer ahora:** [escribe aquí tu siguiente pedido]
