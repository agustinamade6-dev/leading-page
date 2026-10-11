# Prompts para los clips de video · Fermento 47

Seis clips, uno por cada par de fotos seguidas: la foto N es el **primer fotograma** y la N+1 el **último**.
Mismo método que Arko (`mcp-higgsfield-landing-main/PROMPTS.md`, paso 6).

## Ajustes (iguales en los 6 clips)

- Modelo con **primer y último fotograma** (start/end frame): MiniMax H3 (el que usó Arko), Kling 3.0 o Veo.
- Relación de aspecto **16:9**, **1080p**.
- **Sin audio.**
- Misma duración en todos: **8 s** (como Arko) o 5 s si quieres ahorrar créditos.
- Usa los **originales** de `img/` (`.jfif.jpeg`), no los `.webp`: tienen más resolución.
- El mismo archivo es el último fotograma del clip N y el primero del N+1. Así las costuras encajan.

| Clip | Primer fotograma | Último fotograma |
|---|---|---|
| 1 | `Entrada.jfif.jpeg` | `Barra de grifos.jfif.jpeg` |
| 2 | `Barra de grifos.jfif.jpeg` | `Mesas Comunales.jfif.jpeg` |
| 3 | `Mesas Comunales.jfif.jpeg` | `Sala de Fermentacion.jfif.jpeg` |
| 4 | `Sala de Fermentacion.jfif.jpeg` | `Sala de Barriles.jfif.jpeg` |
| 5 | `Sala de Barriles.jfif.jpeg` | `Mesa de Cata.jfif.jpeg` |
| 6 | `Mesa de Cata.jfif.jpeg` | `Patio.jfif.jpeg` |

Guarda los resultados como `video/paseo-1.mp4` … `video/paseo-6.mp4`.

---

## Clip 1 · Entrada → Barra de grifos

```text
16:9 widescreen, smooth first-person POV walk through a craft brewery taproom in a converted red brick warehouse, one continuous take on a steady gimbal at eye level. The camera steps forward through the open black steel-framed glass doors and walks slowly down the center aisle between the long oak tables with black steel stools, toward the glowing copper tap wall. It comes to rest facing the long oak bar head-on, with the row of bar stools in front and the copper taps, chalkboard panels and pendant lamps centered. Gentle ease-in and ease-out, settling exactly on the final frame. Constant focal length, no zoom, no cuts, no fades, no people, no camera shake. Preserve the real architecture, materials and warm amber lighting exactly. Photorealistic. Silent video, no audio.
```

## Clip 2 · Barra de grifos → Mesas comunales

```text
16:9 widescreen, smooth first-person POV inside a craft brewery taproom in a converted red brick warehouse, one continuous take on a steady gimbal at eye level. The camera slowly turns around away from the copper tap bar and glides back into the main hall, until it looks straight down the long central aisle: communal oak tables with black steel stools on both sides, hanging ferns from the black steel beams, clusters of Edison bulbs, tall factory windows on the left and an arched doorway at the far end. Gentle ease-in and ease-out, settling exactly on the final frame. Constant focal length, no zoom, no cuts, no fades, no people, no camera shake. Preserve the real architecture, materials and warm amber lighting exactly. Photorealistic. Silent video, no audio.
```

## Clip 3 · Mesas comunales → Sala de fermentación

```text
16:9 widescreen, smooth first-person POV walk through a craft brewery taproom in a converted red brick warehouse, one continuous take on a steady gimbal at eye level. The camera gently turns right and walks between the oak tables toward a floor-to-ceiling black steel-framed glass wall. Behind the glass, the brewhouse appears: tall stainless steel fermentation tanks on the left and copper brew kettles on the right, softly lit. The camera comes to rest centered in front of the glass wall, with two oak tables in the foreground and two copper pendant lamps above. Gentle ease-in and ease-out, settling exactly on the final frame. Constant focal length, no zoom, no cuts, no fades, no people, no camera shake. Preserve the real architecture, materials and warm amber lighting exactly. Photorealistic. Silent video, no audio.
```

## Clip 4 · Sala de fermentación → Sala de barriles

```text
16:9 widescreen, smooth first-person POV walk through a craft brewery in a converted red brick warehouse, one continuous take on a steady gimbal at eye level. The camera slowly pans left along the glass wall of the brewhouse and glides toward a large red brick archway next to it. Through the arch, a vaulted brick barrel room is revealed: oak barrels stacked on black steel racks, lit by small warm spotlights. The camera settles facing the archway, with the glass wall and the stainless steel tanks still visible on the right edge. Gentle ease-in and ease-out, settling exactly on the final frame. Constant focal length, no zoom, no cuts, no fades, no people, no camera shake. Preserve the real architecture, materials and warm amber lighting exactly. Photorealistic. Silent video, no audio.
```

## Clip 5 · Sala de barriles → Mesa de cata

```text
16:9 widescreen, smooth first-person POV walk through a craft brewery barrel room, one continuous take on a steady gimbal at eye level. The camera walks slowly through the red brick archway into the vaulted barrel room, then turns gently left to reveal a thick live-edge oak tasting table under a single copper pendant lamp, with a wooden paddle holding six small beer glasses from pale gold to dark stout. Stacked oak barrels on black steel racks fill the right side, and more brick arches open on the left. Gentle ease-in and ease-out, settling exactly on the final frame. Constant focal length, no zoom, no cuts, no fades, no people, no camera shake. Preserve the real architecture, materials and warm amber lighting exactly. Photorealistic. Silent video, no audio.
```

## Clip 6 · Mesa de cata → Patio

```text
16:9 widescreen, smooth first-person POV walk through a craft brewery in a converted red brick warehouse, one continuous take on a steady gimbal at eye level. The camera turns left away from the tasting table, walks past the brick arches toward a large open black steel double door in the brick wall, and stops right at the threshold, looking out onto an outdoor beer garden at dusk: string lights overhead, wooden picnic tables on gravel, ivy-covered brick walls and a deep blue evening sky. The open glass doors frame the view on both sides. Gentle ease-in and ease-out, settling exactly on the final frame. Constant focal length, no zoom, no cuts, no fades, no people, no camera shake. Preserve the real architecture, materials and warm amber lighting exactly. Photorealistic. Silent video, no audio.
```

---

## Negative prompt (el mismo en los 6 clips)

```text
cut, scene change, fade, dissolve, crossfade, morphing, warping geometry, flicker, zoom, fisheye distortion, shaky handheld, fast motion, people, hands, text, extra objects, lighting change, vertical framing, black bars, letterbox, audio, music, sound
```

## Consejos

- **Prueba primero un solo clip** (por ejemplo el 3) en dos o tres modelos y quédate con el mejor, como hizo Arko con Kling, MiniMax y Seedance.
- Si la cámara **atraviesa una pared o un vidrio**, o el clip tiene un **corte**, repítelo. A Arko le pasó con dos clips.
- El clip 2 y el 6 tienen los giros más grandes. Si salen raros, prueba con 8 s en vez de 5 s para que el movimiento sea más lento.
- Cuando los tengas, se recodifican con ffmpeg (un keyframe cada 6 fotogramas, `-g 6`) para que el video se mueva suave con el scroll. Eso lo hago yo.
