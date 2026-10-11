# Graph Report - leading-page  (2026-10-11)

## Corpus Check
- Large corpus: 58 files · ~887,999 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 312 nodes · 354 edges · 36 communities (35 shown, 1 thin omitted)
- Extraction: 79% EXTRACTED · 21% INFERRED · 0% AMBIGUOUS · INFERRED: 76 edges (avg confidence: 0.84)
- Token cost: 1,490,042 input · 0 output

## Community Hubs (Navigation)
- Landing Page Build & Motion
- Scroll-World Video Pipeline
- Design System & Brand Content
- Scrub Engine (skill template)
- Scroll World Runtime (site)
- Project Context & Video Strategy
- Diorama Background Knockout
- Patio Photo (original)
- Patio Photo (960w)
- Tap Bar Photo (original)
- Entrance Photo (original)
- Tasting Table Photo (original)
- Communal Tables Photo (original)
- Paseo Stop 0 Entrance
- Paseo Stop 2 Taproom
- Fermentation Room Photo (original)
- Entrance WebP (960w)
- Entrance WebP
- Fermentation Room WebP
- Patio WebP
- Nano Banana Image Prompts
- Paseo Stop 4 Barrel Cellar
- Paseo Stop 6 Courtyard
- Barrel Room Photo (original)
- Tap Bar WebP
- Tap Bar WebP (960w)
- Communal Tables WebP (960w)
- Communal Tables WebP
- Fermentation Room WebP (960w)
- Barrel Room WebP
- Tasting Table WebP (960w)
- Tasting Table WebP
- Paseo Stop 3 Brewery
- Paseo Stop 5 Tasting
- Barrel Room WebP (960w)
- Paseo Stop 1 Tap Bar

## God Nodes (most connected - your core abstractions)
1. `mountScrollWorld()` - 15 edges
2. `mountScrollWorld()` - 15 edges
3. `scroll-world skill` - 13 edges
4. `Fermento 47 landing page (index.html)` - 10 edges
5. `Six connector clips paseo-1..6.mp4` - 8 edges
6. `Part B: Visual system` - 7 edges
7. `Prompt templates & intake` - 7 edges
8. `Project context: Fermento 47 landing` - 7 edges
9. `Frame-identical seams rule` - 6 edges
10. `Pipeline copy-paste scripts (bash 3.2 safe)` - 6 edges

## Surprising Connections (you probably didn't know these)
- `First/last frame chaining method` --semantically_similar_to--> `Frame-identical seams rule`  [INFERRED] [semantically similar]
  PROMPTS-video.md → .claude/skills/scroll-world/SKILL.md
- `Nano Banana image prompts` --semantically_similar_to--> `Scene still prompt`  [INFERRED] [semantically similar]
  PROMPTS-nano-banana.md → .claude/skills/scroll-world/references/prompts.md
- `Scroll world section (#inicio, #world)` --semantically_similar_to--> `scroll-world index template`  [INFERRED] [semantically similar]
  index.html → .claude/skills/scroll-world/references/index-template.html
- `Style block (1920s brick warehouse, amber light)` --semantically_similar_to--> `Style preamble (clay diorama default)`  [INFERRED] [semantically similar]
  PROMPTS-nano-banana.md → .claude/skills/scroll-world/references/prompts.md
- `Video clip prompts (Fermento 47)` --semantically_similar_to--> `Leg prompt (architecture A)`  [INFERRED] [semantically similar]
  PROMPTS-video.md → .claude/skills/scroll-world/references/prompts.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Fermento 47 scroll world production pipeline** — prompts_nano_banana_nano_banana_prompts, prompts_video_video_clip_prompts, contexto_para_claude_ffmpeg_encoding, contexto_para_claude_paseo_scroll_world, index_mundo_section [INFERRED 0.85]
- **Seamless chain method** — _claude_skills_scroll_world_skill_frame_identical_seams, _claude_skills_scroll_world_references_pipeline_extract_boundary_frames, _claude_skills_scroll_world_skill_qa_seams, prompts_video_first_last_frame_method, _claude_skills_scroll_world_skill_connector_clips [INFERRED 0.85]
- **Image-to-scroll-video pipeline** — 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_nano_banana, 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_webp_images, 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_gemini_veo, 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_six_clips, 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_ffmpeg, 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_scroll_world_js [EXTRACTED 1.00]
- **Clip seam and fluidity fixes** — 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_ssim_seam_matching, 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_blur_crossfade, 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_scroll_inertia, 2026_10_11_024035_crea_una_carpeta_llamada_leading_page_linger [INFERRED 0.85]
- **Taproom bar scene composition** — img_barra_de_grifos_jfif_beer_tap_tower, img_barra_de_grifos_jfif_chalkboard_menu, img_barra_de_grifos_jfif_bar_counter_seating, img_barra_de_grifos_jfif_industrial_taproom_aesthetic [INFERRED 0.85]
- **Industrial Taproom Aesthetic** — img_entrada_jfif_industrial_brick_interior, img_entrada_jfif_warm_edison_lighting, img_entrada_jfif_steel_glass_doors, img_entrada_jfif_communal_high_tables [INFERRED 0.85]
- **Tasting Room Scene Composition** — img_mesa_de_cata_jfif_beer_tasting_flight, img_mesa_de_cata_jfif_live_edge_tasting_table, img_mesa_de_cata_jfif_barrel_aging_cellar, img_mesa_de_cata_jfif_industrial_brick_vault_ambience [INFERRED 0.85]
- **Industrial-rustic ambience of the communal hall** — img_mesas_comunales_jfif_industrial_brick_interior, img_mesas_comunales_jfif_warm_edison_lighting, img_mesas_comunales_jfif_hanging_plants, img_mesas_comunales_jfif_communal_seating [INFERRED 0.85]
- **Industrial patio design elements** — img_patio_jfif_ivy_covered_brick_walls, img_patio_jfif_steel_framed_glass_doors, img_patio_jfif_string_lights, img_patio_jfif_wooden_picnic_tables [INFERRED 0.85]
- **Brewing-to-Barrel-Aging Production Flow** — img_sala_de_barriles_jfif_brewhouse_tanks, img_sala_de_barriles_jfif_barrel_aging_cellar, img_sala_de_barriles_jfif_oak_barrels [INFERRED 0.75]
- **Visible Brewery Production Area** — img_sala_de_fermentacion_jfif_fermentation_tanks, img_sala_de_fermentacion_jfif_copper_brewhouse, img_sala_de_fermentacion_jfif_glass_partition [INFERRED 0.85]
- **Taproom entrance scene composition (first stop of scroll walkthrough)** — img_paseo_parada_0_steel_glass_doors, img_paseo_parada_0_backlit_tap_bar, img_paseo_parada_0_communal_tables, img_paseo_parada_0_warm_pendant_lighting [INFERRED 0.75]
- **Industrial-rustic taproom ambience** — img_paseo_parada_2_brick_arches, img_paseo_parada_2_wine_barrels, img_paseo_parada_2_edison_lighting, img_paseo_parada_2_fermentation_tanks [INFERRED 0.85]
- **Outdoor Hospitality Ambience** — img_paseo_parada_6_brick_courtyard, img_paseo_parada_6_string_lights, img_paseo_parada_6_picnic_tables [INFERRED 0.85]
- **Taproom entrance scene composition** — img_webp_0_entrada_960_glass_steel_entrance_doors, img_webp_0_entrada_960_backlit_tap_bar, img_webp_0_entrada_960_communal_high_tables, img_webp_0_entrada_960_warm_industrial_aesthetic [INFERRED 0.85]
- **Industrial Craft Taproom Aesthetic** — img_webp_0_entrada_industrial_brick_hall, img_webp_0_entrada_copper_tap_wall_bar, img_webp_0_entrada_warm_pendant_lighting, img_webp_0_entrada_steel_glass_doors [INFERRED 0.85]
- **Craft beer bar scene composition** — img_webp_1_barra_grifos_tap_wall, img_webp_1_barra_grifos_wooden_bar_counter, img_webp_1_barra_grifos_industrial_brewpub_interior, img_webp_1_barra_grifos_warm_copper_lighting [INFERRED 0.85]
- **Industrial-warm venue atmosphere (brick, lighting, plants, communal tables)** — img_webp_2_mesas_comunales_960_communal_seating, img_webp_2_mesas_comunales_960_industrial_brick_interior, img_webp_2_mesas_comunales_960_warm_ambient_lighting, img_webp_2_mesas_comunales_960_hanging_plants [INFERRED 0.85]
- **Industrial-cozy venue ambience design** — img_webp_2_mesas_comunales_industrial_warehouse_aesthetic, img_webp_2_mesas_comunales_warm_edison_lighting, img_webp_2_mesas_comunales_hanging_plants, img_webp_2_mesas_comunales_high_top_communal_seating [INFERRED 0.85]
- **Visible Brewery Taproom Experience** — img_webp_3_sala_fermentacion_960_fermentation_tanks, img_webp_3_sala_fermentacion_960_copper_brewhouse, img_webp_3_sala_fermentacion_960_taproom_seating [INFERRED 0.85]
- **Visible Brewery Production from Taproom** — img_webp_3_sala_fermentacion_fermentation_tanks, img_webp_3_sala_fermentacion_copper_brewhouse, img_webp_3_sala_fermentacion_glass_partition, img_webp_3_sala_fermentacion_taproom_seating [INFERRED 0.85]
- **Brewery production: brewhouse to barrel aging** — img_webp_4_sala_barriles_brewhouse_view, img_webp_4_sala_barriles_barrel_aging_cellar, img_webp_4_sala_barriles_oak_barrels [INFERRED 0.75]
- **Brewery Tasting Room Experience** — img_webp_5_mesa_cata_960_beer_tasting_flight, img_webp_5_mesa_cata_960_live_edge_tasting_table, img_webp_5_mesa_cata_960_barrel_aging_cellar, img_webp_5_mesa_cata_960_industrial_brick_ambience [INFERRED 0.85]
- **Brewery Cellar Tasting Experience** — img_webp_5_mesa_cata_beer_tasting_flight, img_webp_5_mesa_cata_barrel_aging_cellar, img_webp_5_mesa_cata_live_edge_tasting_table, img_webp_5_mesa_cata_industrial_brick_ambiance [INFERRED 0.85]
- **Courtyard venue atmosphere elements** — img_webp_6_patio_960_string_lights, img_webp_6_patio_960_wooden_picnic_tables, img_webp_6_patio_960_industrial_brick_ivy, img_webp_6_patio_960_outdoor_courtyard_patio [INFERRED 0.85]
- **Industrial Outdoor Ambience Elements** — img_webp_6_patio_steel_glass_doors, img_webp_6_patio_string_lights, img_webp_6_patio_wooden_picnic_tables, img_webp_6_patio_ivy_brick_walls [INFERRED 0.85]

## Communities (36 total, 1 thin omitted)

### Community 0 - "Landing Page Build & Motion"
Cohesion: 0.06
Nodes (33): cubic-bezier(0.32,0.72,0,1) easing, Version query cache busting (?v=N), CSS transitions (entrada, revelar, boton, tarjeta, enlace), ffmpeg (imageio-ffmpeg), index.html, IntersectionObserver reveal, landing-page-design skill (elayadesign), legal.html (+25 more)

### Community 1 - "Scroll-World Video Pipeline"
Cohesion: 0.08
Nodes (30): scroll-world index template, mountScrollWorld config (sections, connectors, diveScroll, connScroll), Encode everything for scrubbing (ffmpeg), Extract boundary frames (seam handoff), gen_dive / gen_conn (Higgsfield fallback), gen_dive_monid / gen_conn_monid (Monid default), Pipeline copy-paste scripts (bash 3.2 safe), Native 9:16 portrait chain (mobile) (+22 more)

### Community 2 - "Design System & Brand Content"
Cohesion: 0.10
Nodes (13): 404 page: Este grifo esta seco, Landing Page Design skill, redesign-existing-projects companion skill, Fermento 47 (fictional craft brewery), Cervezas section (six house beers), Experiencias section (tastings, tours), Word-highlight tagline section, Floating pill header and mobile menu (+5 more)

### Community 3 - "Scrub Engine (skill template)"
Cohesion: 0.19
Nodes (11): injectCSS(), mountScrollWorld(), ctaBtns(), esc(), layout(), loadClip(), onFirstGesture(), onResize() (+3 more)

### Community 4 - "Scroll World Runtime (site)"
Cohesion: 0.19
Nodes (12): injectCSS(), mountScrollWorld(), ctaBtns(), el(), esc(), layout(), loadClip(), onFirstGesture() (+4 more)

### Community 5 - "Project Context & Video Strategy"
Cohesion: 0.17
Nodes (12): Arko nikkei restaurant landing (mcp-higgsfield-landing-main), CONTEXTO-PARA-CLAUDE.md, Fermento 47 (fictional craft brewery landing), Forja Gym (alternative fictional gym concept), Gemini / Veo video generation, Higgsfield, MiniMax H3, PROMPTS-video.md (+4 more)

### Community 7 - "Patio Photo (original)"
Cohesion: 0.29
Nodes (6): Gravel Courtyard Beer Garden, Ivy-Covered Red Brick Walls, Patio Photo (outdoor courtyard at dusk), Black Steel-Framed Glass Doors, Festoon String Lights, Wooden Picnic Tables and Benches

### Community 8 - "Patio Photo (960w)"
Cohesion: 0.29
Nodes (6): Patio Courtyard Photo (6-patio-960), Industrial Brick Walls with Ivy, Outdoor Gravel Courtyard Patio, Black Steel-Framed Glass Doors, Overhead Festoon String Lights, Wooden Picnic Tables and Benches

### Community 9 - "Tap Bar Photo (original)"
Cohesion: 0.40
Nodes (6): Wooden bar counter with stools, Multi-tap beer dispensing wall, Chalkboard beer menu panels, Craft beer taproom, Barra de grifos (tap bar photo), Industrial taproom aesthetic (brick, steel, copper, wood)

### Community 10 - "Entrance Photo (original)"
Cohesion: 0.33
Nodes (6): Communal Wooden High Tables and Stools, Entrada - Industrial Taproom Entrance View, Industrial Brick and Steel Interior, Black Steel-Framed Glass Doors, Backlit Beer Tap Wall Bar, Warm Edison Bulb and Pendant Lighting

### Community 11 - "Tasting Table Photo (original)"
Cohesion: 0.40
Nodes (6): Barrel Aging Cellar (oak barrels on racks), Beer Tasting Flight (6 styles, light to dark), Craft Brewery Tasting Room Experience, Mesa de Cata (Tasting Table Photo), Industrial Brick Vault Ambience (warm pendant lighting, steel beams), Live-Edge Wooden Tasting Table with Stools

### Community 12 - "Communal Tables Photo (original)"
Cohesion: 0.40
Nodes (6): Communal Seating (long wooden high tables with stools and benches), Food Hall / Event Venue Space, Hanging Plants Decor (ferns and trailing ivy), Industrial Brick Warehouse Interior (exposed brick, black steel beams, concrete floor), Mesas Comunales (communal tables hall photo), Warm Ambient Lighting (Edison bulbs and copper pendant lamps)

### Community 13 - "Paseo Stop 0 Entrance"
Cohesion: 0.40
Nodes (6): Paseo Stop 0: Taproom Entrance View, Backlit Beer Tap Bar, Wooden Communal High Tables with Stools, Industrial Brick Taproom Interior, Black Steel-Framed Glass Entrance Doors, Warm Pendant and Edison Bulb Lighting

### Community 14 - "Paseo Stop 2 Taproom"
Cohesion: 0.40
Nodes (6): Exposed Brick Arches, Wooden High Tables and Bar Stools, Warm Edison Bulb String Lighting, Stainless Steel Fermentation Tanks, Parada 2 - Brewery Taproom Interior, Oak Barrels Used as Standing Tables

### Community 15 - "Fermentation Room Photo (original)"
Cohesion: 0.40
Nodes (5): Copper Brewhouse Kettles, Stainless Steel Conical Fermenters, Steel-Framed Glass Partition, Sala de Fermentacion (Fermentation Room Photo), Taproom Seating Area (wood tables and stools)

### Community 16 - "Entrance WebP (960w)"
Cohesion: 0.40
Nodes (5): Backlit Copper Tap Wall Bar, Wooden Communal High Tables and Stools, Entrance Hero Image (0-entrada, 960w), Black Steel-Framed Glass Entrance Doors, Industrial Brewery Taproom Interior

### Community 17 - "Entrance WebP"
Cohesion: 0.40
Nodes (6): Communal High Tables with Stools, Copper Tap Wall Bar, Taproom Entrance View (0-entrada), Industrial Brick Warehouse Interior, Black Steel Glass Entrance Doors, Warm Pendant and Edison Bulb Lighting

### Community 18 - "Fermentation Room WebP"
Cohesion: 0.47
Nodes (4): Copper Brewhouse Kettles, Stainless Steel Conical Fermentation Tanks, Sala de Fermentacion (Brewery Taproom Image), Taproom Seating (Wooden Communal Tables and Stools)

### Community 19 - "Patio WebP"
Cohesion: 0.33
Nodes (5): Courtyard Beer Garden Patio (6-patio), Ivy-Covered Exposed Brick Walls, Black Steel-Framed Glass Doors, Festoon String Lights, Wooden Picnic Tables and Benches

### Community 20 - "Nano Banana Image Prompts"
Cohesion: 0.40
Nodes (5): Nano Banana (Gemini image model), Pillow, PROMPTS-nano-banana.md, Seven tour stops (entrada, barra, salon, fabrica, barricas, cata, patio), WebP stop images (1920/960 px, q80)

### Community 21 - "Paseo Stop 4 Barrel Cellar"
Cohesion: 0.50
Nodes (5): Paseo Stop 4: Barrel Aging Cellar, Brick-Vaulted Barrel Aging Cellar, Stainless Fermentation Tanks Brewhouse, Industrial Brick and Steel-Glass Aesthetic, Oak Barrels on Steel Racks

### Community 22 - "Paseo Stop 6 Courtyard"
Cohesion: 0.40
Nodes (4): Ivy-Covered Brick Courtyard, Parada 6 - Courtyard Beer Garden View, Communal Wooden Picnic Tables on Gravel, Festoon String Lights at Dusk

### Community 23 - "Barrel Room Photo (original)"
Cohesion: 0.50
Nodes (4): Brick-Vaulted Barrel Aging Cellar, Stainless and Copper Fermentation Tanks (Brewhouse), Sala de Barriles (Barrel Room Photo), Oak Barrels on Steel Racks

### Community 24 - "Tap Bar WebP"
Cohesion: 0.50
Nodes (4): Barra de grifos (Tap Bar Photo), Industrial Brewpub Interior (exposed brick, steel beams, Edison bulbs), Copper Beer Tap Wall (multi-tap draft system), Long Wooden Bar Counter with Stools

### Community 25 - "Tap Bar WebP (960w)"
Cohesion: 0.50
Nodes (5): Copper beer tap wall (draft taps), Barra de grifos (taproom bar photo, 960w), Industrial taproom aesthetic (brick, steel, warm lighting), Responsive WebP image variant (960w), Wooden bar counter with stools

### Community 26 - "Communal Tables WebP (960w)"
Cohesion: 0.40
Nodes (5): Mesas Comunales (communal tables interior photo), Communal High-Top Seating, Hanging Plant Decor, Industrial Brick Warehouse Interior, Warm Edison Bulb and Copper Pendant Lighting

### Community 27 - "Communal Tables WebP"
Cohesion: 0.40
Nodes (5): Communal Tables Hall (Mesas Comunales), Hanging Ferns and Trailing Plants, High-top Wooden Communal Tables with Stools and Benches, Industrial Warehouse Aesthetic (exposed brick, black steel beams, concrete floor), Warm Edison Bulb and Copper Pendant Lighting

### Community 28 - "Fermentation Room WebP (960w)"
Cohesion: 0.40
Nodes (4): Copper Brewhouse Kettles, Stainless Steel Fermentation Tanks, Sala de Fermentacion (taproom view, 960w), Taproom Communal Seating

### Community 29 - "Barrel Room WebP"
Cohesion: 0.50
Nodes (4): Barrel Aging Cellar (vaulted brick), Brewhouse / Stainless & Copper Fermentation Tanks, Sala de Barriles (Barrel Room Photo), Oak Barrels on Steel Racks

### Community 30 - "Tasting Table WebP (960w)"
Cohesion: 0.60
Nodes (4): Mesa de Cata (Tasting Table Image), Barrel Aging Cellar (oak barrels on racks), Beer Tasting Flight (6 styles, light to dark), Live-Edge Wood Tasting Table with Stools

### Community 31 - "Tasting Table WebP"
Cohesion: 0.50
Nodes (4): Barrel-Aging Cellar (oak barrels on racks, brick vaults), Beer Tasting Flight (5 glasses, light to dark), Tasting Table in Barrel Cellar (5-mesa-cata), Live-Edge Wood Tasting Table with Stools

### Community 32 - "Paseo Stop 3 Brewery"
Cohesion: 0.67
Nodes (3): Brewhouse Fermentation Tanks (stainless & copper), Paseo Stop 3: Brewery Taproom, Taproom Communal Wooden Tables and Stools

### Community 33 - "Paseo Stop 5 Tasting"
Cohesion: 0.67
Nodes (4): Oak Barrel Aging Cellar, Parada 5: Brewery Barrel Room Tasting, Beer Tasting Flight (6 styles, light to dark), Industrial Brick Arches and Warm Pendant Lighting

### Community 34 - "Barrel Room WebP (960w)"
Cohesion: 0.67
Nodes (3): Barrel Aging Cellar (vaulted brick arch, stacked oak barrels), Brewhouse Stainless Fermentation Tanks (behind steel-framed glass), Sala de Barriles (barrel room photo, 960w)

### Community 35 - "Paseo Stop 1 Tap Bar"
Cohesion: 0.67
Nodes (3): Industrial Brewery Aesthetic (brick, steel, copper, wood), Backlit Copper Beer Tap Wall, Paseo Stop 1: Industrial Taproom Bar

## Knowledge Gaps
- **99 isolated node(s):** `world`, `reveal`, `enlacesNav`, `seccionActual`, `menuBoton` (+94 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 137 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `el()` connect `Scroll World Runtime (site)` to `Landing Page Build & Motion`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `mountScrollWorld()` (e.g. with `scrub-engine.js` and `layout()`) actually correct?**
  _`mountScrollWorld()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `world`, `reveal`, `enlacesNav` to the rest of the system?**
  _99 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Landing Page Build & Motion` be split into smaller, more focused modules?**
  _Cohesion score 0.057692307692307696 - nodes in this community are weakly interconnected._
- **Are the 6 inferred relationships involving `mountScrollWorld()` (e.g. with `scroll-world.js` and `layout()`) actually correct?**
  _`mountScrollWorld()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Should `Scroll-World Video Pipeline` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Should `Design System & Brand Content` be split into smaller, more focused modules?**
  _Cohesion score 0.09881422924901186 - nodes in this community are weakly interconnected._