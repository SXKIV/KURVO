# CLAUDE.md — Contexto de KURVO para Claude Code

> Archivo de contexto del repositorio `kurvo`. Léelo completo al empezar cada sesión.
> Este proyecto **no** tiene relación con SIIMPLE ni con otros repos: ignora cualquier contexto ajeno a este archivo.

## 1. Proyecto

**KURVO** (nombre temporal) es la plataforma web del colectivo de arte impreso **KURVOZINE** (Santiago de Chile).

- **Visión a largo plazo:** repositorio / red social exclusiva de arte, con perfiles de edición casi total. No hay un molde obligatorio por usuarie.
- **Fase actual — MVP Fanzine** (MVP = producto mínimo viable, la primera versión simple que ya funciona): una página de KURVO sobre el proyecto que se siente como un **fanzine digital vivo y experimental de KURVOZINE**.

Prioridades del MVP, en orden:
1. Identidad autoral del colectivo.
2. Libertad radical de personalización: la página demuestra en pequeño lo que después tendrán los perfiles.
3. Ruptura con las plantillas de la web corporativa.

Referencia de tono (no de código): https://kurvozine.neocities.org/

Historia, volúmenes y filosofía del colectivo: `docs/textos/kurvozine_contexto.md`. Léelo antes de escribir textos o proponer diseño. Clave: KURVOZINE defiende el papel frente a la saturación digital (multisensorialidad, materiales irrepetibles, tirajes finitos), así que la web debe traducir eso al medio digital, no parecer "una web más".

## 2. Equipo

Usa **solo pseudónimos** en código, commits, comentarios y documentación:
Agus · Luna · Morra · Malú · Xakal (coordina con Claude).

## 3. Lo que KURVO NO es

Behance, ArtStation, DeviantArt, Dribbble, Artsy, ARTMO y Tumblr son un **mapa del mercado, no un modelo**. No reproduzcas su arquitectura, layout ni componentes típicos:

- ❌ Grillas uniformes de tarjetas con miniatura + título + likes.
- ❌ Hero centrado con titular, subtítulo y botón CTA.
- ❌ Paletas neutras "limpias", sombras suaves, bordes redondeados por defecto, Inter/Roboto.
- ❌ Perfiles con plantilla fija (banner + avatar + bio + galería).
- ❌ Librerías de UI genéricas (Bootstrap, Material, shadcn con estilos por defecto) como base visual.

## 4. Lenguaje visual: fanzine digital

Principios (se detallarán en `DESIGN.md` cuando el equipo los defina):

- **Lo impreso como punto de partida:** fotocopia, risografía, collage, recorte, grapa, tinta corrida, registro desalineado, escaneos con textura.
- **Composición editorial, no de app:** páginas o pliegos en vez de "secciones"; asimetría, superposición, texto que rota o invade imágenes.
- **Tipografía con carácter:** mezcla de familias, escritura a mano, máquina de escribir, tamaños extremos.
- **Lo hecho a mano se nota**, y lo imperfecto es intencional.
- **El usuarie puede intervenir:** desde el MVP, al menos una forma de que quien visita altere lo que ve (cambiar "papel", tinta, orden de páginas, modo de lectura, etc.).

Límites que no se rompen:
- Contenido legible y navegable con teclado; contraste suficiente en el texto principal.
- `prefers-reduced-motion` respetado.
- Funciona en móvil (el zine también se lee en el teléfono).
- Rendimiento razonable: imágenes optimizadas, sin dependencias pesadas sin justificar.

## 5. Stack (provisional)

- Sitio **estático** para el MVP, publicable en **GitHub Pages**.
- Preferencia: HTML/CSS/JS moderno, o **Astro** si se necesita componer muchas páginas. Cualquier cambio de stack se consulta con Xakal y se registra en `docs/decisiones.md`.
- Pensar a futuro: la fase red social necesitará autenticación, base de datos y un sistema de temas por perfil. No lo construyas ahora, pero no tomes decisiones que lo bloqueen (por ejemplo, separa contenido de presentación y usa variables CSS / tokens para lo personalizable).

## 6. Estructura del repo (propuesta)

```
kurvo/
├─ CLAUDE.md             ← este archivo
├─ DESIGN.md             ← lenguaje visual y tokens (pendiente)
├─ README.md
├─ docs/
│  ├─ decisiones.md      ← registro de decisiones del equipo
│  ├─ referencias/       ← capturas, escaneos, análisis de sitios
│  └─ textos/            ← manifiesto, kurvozine_contexto.md y contenido editorial
├─ public/               ← imágenes, tipografías, texturas
└─ src/                  ← código del sitio
```

## 7. Cómo trabajar

1. Antes de construir algo visual, lee `DESIGN.md` y `docs/decisiones.md`.
2. Para trabajo visual usa el plugin **frontend-design**. Después de cada cambio importante, revisa el resultado en el navegador (Playwright o Chrome DevTools MCP) en escritorio y en móvil.
3. Si analizas sitios de referencia (Firecrawl u otro), guarda el análisis en `docs/referencias/` y extrae **principios**, nunca copies layouts ni recursos. Las referencias del mercado (sección 3) se estudian para diferenciarse.
4. Trabaja en ramas (`fanzine/<tema>`) y abre PR. No hagas push directo a `main`.
5. Commits en español, cortos y en imperativo: `agrega pliego del manifiesto`.
6. Si una decisión es del equipo (estética, contenido, nombre, stack), no la tomes tú: propone opciones y deja una nota en el PR.
7. No inventes contenido del colectivo. Usa marcadores `[TEXTO PENDIENTE — Luna]` o similares.

## 8. Cómo comunicarte con el equipo

El equipo es multidisciplinar (estética, periodismo, psicología, sociología, derecho) y no técnico. En PR, notas, comentarios dirigidos a personas y documentación de `docs/`, explica entre paréntesis cada término técnico la primera vez que aparece. Glosario base:

- **MVP** (producto mínimo viable): la primera versión simple que ya funciona.
- **Repo** (repositorio): la carpeta del proyecto en GitHub, con todo su historial de cambios.
- **Rama / branch**: una copia paralela del proyecto para probar cambios sin tocar la versión oficial.
- **PR** (pull request): una propuesta de cambio que el equipo revisa antes de sumarla a la versión oficial.
- **Commit**: un cambio guardado con una descripción.
- **Stack**: el conjunto de tecnologías con que se construye el sitio.
- **Deploy**: publicar el sitio para que se vea en internet.
- **MCP / plugin**: herramientas extra que le dan a Claude nuevas capacidades (por ejemplo, ver una página en el navegador).
- **Tokens de diseño**: los valores visuales reutilizables (colores, tipografías, tamaños) guardados con nombre.

## 9. Estado

- [ ] Repo creado y GitHub Pages activo
- [ ] `DESIGN.md` v0
- [ ] Manifiesto KURVO en `docs/textos/`
- [ ] Primer pliego del fanzine publicado
