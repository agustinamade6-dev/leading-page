# Prompts para Nano Banana · escenario ficticio

Mismo método que el proyecto de Arko (`mcp-higgsfield-landing-main`): **7 imágenes = 7 paradas de un paseo** por el local.
Después, un modelo de video (Veo, Kling, MiniMax H3…) une cada imagen N con la N+1 y la landing hace el scrub con el scroll.

## Cómo usarlos

1. Genera la **imagen 0** con su prompt + el bloque de estilo.
2. Para cada imagen siguiente, **adjunta la imagen anterior** como referencia y usa su prompt. Así el local se mantiene coherente (mismos materiales, luz y colores).
3. Relación de aspecto **16:9** en todas.
4. Si una imagen sale mal, repítela antes de pasar a la siguiente: cada una es la base de la otra.
5. Guárdalas como `0-entrada.jpg`, `1-…`, etc. en `leading-page/img/`.

> Los prompts van en inglés porque los modelos responden mejor. Sin personas, sin texto ni logos (la IA los deforma).

---

## Opción A · Cervecería artesanal "Fermento 47"

### Bloque de estilo (pégalo al final de cada prompt)

```text
Style: photorealistic architectural interior photography, 16:9 widescreen, eye-level camera at 1.6 m, 24mm lens, straight verticals. Converted 1920s brick warehouse: exposed red brick, black steel beams, polished concrete floor, warm oak wood, copper and brushed stainless steel accents. Evening, warm amber lighting from Edison bulbs and pendant lamps, soft shadows, cozy and premium atmosphere. Empty space, no people, no text, no logos, no signage lettering.
```

### 0 · Entrada

```text
The entrance of a craft brewery taproom seen from just inside the front door: tall black steel-framed glass doors behind the camera, a wide open hall ahead with long communal oak tables, and in the distance a long bar with a wall of copper beer taps glowing under pendant lamps.
```

### 1 · Barra de grifos (adjunta la imagen 0)

```text
Using the attached image as the same location, continue the walk forward: we now stand in front of the long oak bar. Behind it, a brick wall with a row of 24 copper beer taps, chalkboard panels with no readable text, and shelves of glassware. Same materials, same warm lighting.
```

### 2 · Mesas comunales (adjunta la imagen 1)

```text
Using the attached image as the same location, the camera turns left away from the bar toward the main seating area: long communal oak tables with black steel stools, hanging Edison bulbs at different heights and potted plants hanging from the steel beams. Same materials, same warm lighting.
```

### 3 · Sala de fermentación (adjunta la imagen 2)

```text
Using the attached image as the same location, walking past the tables toward a floor-to-ceiling glass wall: behind it, the brewhouse with tall shiny stainless steel fermentation tanks, copper brew kettles and pipes, softly backlit. Same materials, same warm lighting.
```

### 4 · Sala de barricas (adjunta la imagen 3)

```text
Using the attached image as the same location, through an open brick archway next to the glass wall: a dim barrel-aging room with stacked oak barrels on steel racks, a vaulted brick ceiling and small warm spotlights on the barrels. Same materials, same warm lighting.
```

### 5 · Mesa de cata (adjunta la imagen 4)

```text
Using the attached image as the same location, at the end of the barrel room: a private tasting table made of a thick oak slab, with a flight of six small beer glasses in different colors from pale gold to dark stout on a wooden paddle, under a single warm pendant lamp. Same materials, same warm lighting.
```

### 6 · Patio exterior (adjunta la imagen 5)

```text
Using the attached image as the same location, through a large black steel door at the back: an outdoor beer garden at dusk with string lights overhead, wooden picnic tables, gravel floor, brick walls covered in ivy and the deep blue evening sky. Same materials, warm string lights.
```

---

## Opción B · Gimnasio "Forja Gym"

### Bloque de estilo (pégalo al final de cada prompt)

```text
Style: photorealistic architectural interior photography, 16:9 widescreen, eye-level camera at 1.6 m, 24mm lens, straight verticals. Premium industrial gym: raw concrete walls, matte black steel, black rubber flooring, light oak wood details, tall windows. Early morning, cool natural daylight mixed with warm linear LED strips, dramatic but clean atmosphere. Empty space, no people, no text, no logos, no signage lettering.
```

### 0 · Recepción

```text
The reception of a premium gym seen from the entrance: a minimalist oak reception desk on the left, a living plant wall behind it, and ahead a wide opening that reveals the main training floor with black equipment and tall windows.
```

### 1 · Pesas libres (adjunta la imagen 0)

```text
Using the attached image as the same location, walking past reception onto the training floor: a long row of matte black dumbbells on steel racks in front of a full-height mirror wall, adjustable benches and black rubber flooring. Same materials, same lighting.
```

### 2 · Racks de potencia (adjunta la imagen 1)

```text
Using the attached image as the same location, the camera turns right: a line of black power racks with barbells and stacked bumper plates, each on an oak lifting platform, under linear LED strips on the concrete ceiling. Same materials, same lighting.
```

### 3 · Zona de cardio (adjunta la imagen 2)

```text
Using the attached image as the same location, continuing forward to a row of treadmills and rowing machines facing floor-to-ceiling windows with a soft view of a city at sunrise. Same materials, same lighting.
```

### 4 · Zona funcional (adjunta la imagen 3)

```text
Using the attached image as the same location, past the cardio area into an open functional training zone: green artificial turf lane with a weighted sled, battle ropes anchored to the wall, kettlebells lined up by size and wooden plyo boxes. Same materials, same lighting.
```

### 5 · Ring de boxeo (adjunta la imagen 4)

```text
Using the attached image as the same location, at the end of the turf lane: a boxing area with a black boxing ring and heavy punching bags hanging from steel beams, lit by a few dramatic warm spotlights. Same materials, same lighting.
```

### 6 · Zona de recuperación (adjunta la imagen 5)

```text
Using the attached image as the same location, through a glass door beside the ring: a calm recovery room with light oak walls, a cedar sauna with a glass front, a cold plunge tub and soft warm indirect lighting. Same materials, calmer lighting.
```

---

## Siguiente paso: los clips

Con las 7 imágenes, se generan 6 clips (imagen N como primer fotograma, N+1 como último), igual que en Arko. Plantilla basada en su prompt:

```text
16:9 widescreen, smooth first-person POV walk, one continuous take on a steady gimbal at eye level. The camera [describe el movimiento de N a N+1]. Gentle ease-in and ease-out, settling exactly on the final frame. Constant focal length, no zoom, no cuts, no fades, no people, no camera shake. Preserve the architecture, materials and lighting exactly. Photorealistic. Silent video, no audio.
```

Negative prompt:

```text
cut, scene change, fade, dissolve, crossfade, morphing, warping geometry, flicker, zoom, fisheye distortion, shaky handheld, fast motion, people, hands, text, extra objects, lighting change, vertical framing, black bars, letterbox, audio, music, sound
```
