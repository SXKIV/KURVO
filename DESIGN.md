# DESIGN.md — Lenguaje visual de KURVO

> ## ⚠️ BORRADOR v0 — nada de esto está decidido
>
> Este documento propone **tres direcciones estéticas** para el fanzine digital, para que el equipo las discuta. Ninguna está elegida.
> Se pueden escoger, mezclar, cambiar o descartar todas. Cuando el equipo decida, la decisión se anota en [`docs/decisiones.md`](docs/decisiones.md) y este archivo se reescribe con la versión elegida.
>
> Base: [`docs/textos/kurvozine_contexto.md`](docs/textos/kurvozine_contexto.md) (que también está pendiente de revisión del equipo).

---

## Cómo leer este documento

Cada dirección tiene seis partes:

1. **Idea central:** de qué parte de la historia de KURVOZINE sale y qué quiere transmitir.
2. **Tipografías:** las familias de letra. Todas las propuestas son **gratuitas y de licencia abierta** (se pueden usar en la web sin pagar), disponibles en Google Fonts. Son ejemplos de *tipo* de letra, no una lista cerrada.
3. **Paleta:** los colores, con su código **hex** (la forma en que la web escribe un color, por ejemplo `#1a1a1a` es casi negro).
4. **Texturas:** lo que hace que la pantalla parezca papel, tinta o material.
5. **Composición de una página:** cómo se ordenan los elementos en un "pliego" (una página doble del zine).
6. **Qué puede alterar quien visita:** las formas en que el público interviene lo que ve.

Algunos términos que aparecen:

- **Tokens de diseño:** los valores visuales reutilizables (colores, tipografías, tamaños) guardados con nombre, como `--tinta` o `--papel`. Permiten cambiar todo el aspecto del sitio modificando pocos valores, y son la base de lo que después serán los perfiles personalizables.
- **Variables CSS:** la forma técnica de guardar esos tokens en el código de la web (CSS es el lenguaje que define cómo se ve una página).
- **Contraste:** cuánto se distingue el texto del fondo. Se mide como una proporción (por ejemplo `14:1`). Para que el texto principal se lea bien se pide **al menos 4.5:1**, y para títulos grandes al menos 3:1 (estándar internacional de accesibilidad, llamado WCAG).
- **Reducción de movimiento (`prefers-reduced-motion`):** una preferencia que algunas personas activan en su teléfono o computador porque las animaciones les marean o distraen. El sitio debe respetarla y quitar o suavizar el movimiento.
- **Almacenamiento local:** una memoria pequeña del navegador de cada visitante. Sirve para recordar, por ejemplo, qué papel eligió alguien, sin necesitar cuentas ni servidores.
- **Ilegible a propósito / decorativo:** texto que es parte de la imagen (como un collage) y no del contenido. Puede romper las reglas de contraste, siempre que la información importante también esté en texto legible.

> Las imágenes, escaneos y textos reales tienen que venir del colectivo. Donde haga falta material se marca `[MATERIAL PENDIENTE]`.

---

## Dirección A — "Fotocopia de facultad"

### Idea central

KURVOZINE nace en 2021 en una Facultad de Derecho que se sentía "gris", y su nombre juega con **derecho / curvo**: lo recto y normado frente a lo que se dobla. Esta dirección toma la estética de la **fotocopiadora y el apunte universitario** (expedientes, formularios, márgenes, timbres) y la **tuerce**: las líneas rectas se curvan, los formularios se desordenan, la letra oficial convive con rayones a mano. Es el blanco y negro del tóner, con un solo color de resaltador.

### Tipografías

| Uso | Propuesta | Por qué |
|---|---|---|
| Texto principal | **Courier Prime** (máquina de escribir) | Suena a expediente, a documento "oficial". Muy legible. |
| Títulos | **Anton** o **Oswald** en tamaños enormes y apretados | Recuerda a los titulares fotocopiados de afiches y fanzines punk. |
| Notas al margen | **Reenie Beanie** o **Nanum Pen Script** (letra a mano) | Los apuntes, las correcciones, la voz que interrumpe lo formal. |

### Paleta

| Token | Color | Uso |
|---|---|---|
| `--papel` | `#f1ede3` (papel bond algo amarillento) | Fondo |
| `--toner` | `#1a1a1a` (negro tóner) | Texto e imágenes. Contraste con el papel: **14.9:1** ✅ |
| `--gris-copia` | `#d9d4c5` (gris de fotocopia gastada) | Bloques, sombras de escaneo. El tóner sobre este gris: **11.8:1** ✅ |
| `--resaltador` | `#e8f53a` (amarillo fluor) | Subrayados, palabras marcadas. El tóner sobre el resaltador: **14.6:1** ✅ |

### Texturas

- Grano y manchas de tóner sobre todo el papel, con bordes negros de "tapa mal cerrada" de la fotocopiadora.
- Imágenes en **alto contraste** (solo blanco y negro, sin grises), como fotocopia de fotocopia.
- Marcas de grapa, perforaciones de archivador, timbres y folios numerados.
- `[MATERIAL PENDIENTE]`: escaneos reales de páginas de zines de KURVOZINE y de fotocopias para sacar las texturas.

### Composición de una página

- Cada pliego parte de una **retícula rígida de formulario** (casillas, líneas, numeración), y el contenido **se sale de ella**: textos girados, imágenes que pisan las casillas, títulos que se curvan como si la hoja se doblara.
- Márgenes anchos donde viven las notas a mano.
- En el teléfono, el pliego se convierte en una tira vertical, como un rollo de fotocopias pegadas, y las notas al margen pasan a intercalarse en el texto.

### Qué puede alterar quien visita

- **"Pasar por la fotocopiadora":** un botón que genera una nueva copia y la degrada un poco (más grano, más contraste, leve desalineación). Cada copia es distinta, como en lo físico.
- **Número de ejemplar:** cada visita recibe un número de "ejemplar" propio (guardado en el almacenamiento local), como un tiraje.
- **Enderezar o curvar:** un control que pasa de "derecho" (todo ordenado y recto) a "kurvo" (todo se tuerce). En modo "derecho" la página queda más simple y legible.
- **Cambiar el papel:** bond, roneo o reciclado.

---

## Dirección B — "Riso de correspondencia"

### Idea central

El **Vol. 9** trató sobre el correo electrónico y el cruce de fronteras, y fue una convocatoria abierta; el colectivo además ya cruzó a la Feria Migra en Buenos Aires. Esta dirección imagina el zine como **correspondencia impresa en risografía**: postales, sobres, sellos y etiquetas que viajan. La **risografía** es una técnica de impresión por capas en la que cada color es una tinta distinta y las capas nunca calzan perfecto; ese "error de registro" (colores corridos) es la marca de la dirección.

### Tipografías

| Uso | Propuesta | Por qué |
|---|---|---|
| Texto principal | **Space Mono** o **IBM Plex Mono** (monoespaciada, cada letra ocupa el mismo ancho) | Evoca el correo electrónico, el código, la etiqueta impresa. |
| Títulos | **Bricolage Grotesque** o **Rubik Mono One** muy grandes, impresos en dos capas desalineadas | El titular de afiche risográfico. |
| Sellos y direcciones | **Special Elite** (máquina de escribir gastada) | El sobre escrito a máquina, el timbre del correo. |

### Paleta

Los colores imitan tintas reales de risografía. Se usan **de a dos por pliego** (cada pliego es una "tirada" con su pareja de tintas).

| Token | Color | Uso |
|---|---|---|
| `--papel` | `#f6efdf` (papel crema) | Fondo |
| `--tinta-azul` | `#1f2a6b` (azul profundo) | Texto principal. Contraste: **11.4:1** ✅ |
| `--tinta-rosa` | `#e8457f` (rosa fluor) | Solo títulos grandes, ilustraciones y capas decorativas. Contraste: **3.3:1**, **no sirve para texto chico** ⚠️ |
| `--tinta-amarilla` | `#ffd400` (amarillo) | Fondos de etiquetas y bloques. El azul sobre el amarillo: **9.2:1** ✅ |

### Texturas

- **Desalineación de capas:** cada imagen o título se arma con dos tintas levemente corridas.
- Tramas de puntos (el "punteado" de la impresión), tinta que no cubre parejo, papel con fibras.
- Elementos postales: matasellos, estampillas, bordes perforados, sobres, etiquetas de aduana.
- `[MATERIAL PENDIENTE]`: escaneos de impresiones riso, sobres, estampillas y material de la convocatoria del Vol. 9.

### Composición de una página

- Cada pliego es un **objeto postal** distinto (una postal, un sobre abierto, un formulario de aduana, una carta) puesto sobre una mesa, superpuestos y levemente girados.
- El recorrido es como abrir un correo: primero el sobre, luego lo de adentro.
- En el teléfono, los objetos se apilan en vertical y se "abren" uno a uno.

### Qué puede alterar quien visita

- **Elegir el par de tintas:** cambia todo el zine a otra combinación (azul + rosa, verde + amarillo, etc.), como reimprimirlo.
- **Ajustar el registro:** un control que va de "perfecto" a "muy corrido". Con reducción de movimiento activa, el ajuste es inmediato, sin animación.
- **Reordenar la correspondencia:** arrastrar o reordenar los pliegos para leerlos en otro orden (también con teclado).
- **Escribir una postal:** a futuro podría ser una convocatoria abierta real; en el MVP, solo una postal que se queda en el navegador de quien la escribe, sin enviarse a ningún lado.

---

## Dirección C — "Herbario sensorial"

### Idea central

KURVOZINE ha hecho zines que **se huelen** (Vol. 5, con lavanda recolectada en Santiago), que se **escuchan** (el volumen de llamadas telefónicas), que se **tocan** (Vol. 8, cartulina reciclada irrepetible) y prepara un **libro-objeto**. Esta dirección traduce esa **multisensorialidad** a la web: la página como un herbario o cuaderno de objetos encontrados, con material orgánico escaneado, sonido opcional y cosas que se descubren al tocar.

### Tipografías

| Uso | Propuesta | Por qué |
|---|---|---|
| Texto principal | **EB Garamond** o **Young Serif** (letra clásica con remates) | Sensación de libro, de cuaderno de colección. Muy legible en textos largos. |
| Títulos | **Fraunces** en tamaños extremos, con sus variantes "blandas" | Una letra antigua que se puede deformar suavemente, orgánica. |
| Etiquetas y fichas | **Caveat** o letra a mano escaneada del colectivo `[MATERIAL PENDIENTE]` | Las etiquetas escritas a mano de un herbario. |

### Paleta

| Token | Color | Uso |
|---|---|---|
| `--papel` | `#ece6f2` (lila muy pálido) | Fondo |
| `--tinta` | `#2e1d3b` (ciruela muy oscuro) | Texto principal. Contraste: **12.7:1** ✅ |
| `--lavanda` | `#6b4f8a` (lavanda oscura) | Títulos, enlaces, detalles. Contraste con el papel: **5.5:1** ✅ |
| `--kraft` | `#c9a77c` (cartulina kraft) | Fichas, sobres, bloques. La tinta sobre el kraft: **6.9:1** ✅ |

Modo **noche** posible: se invierten papel y tinta (el papel pálido sobre ciruela mantiene **12.7:1**).

### Texturas

- Escaneos de flores prensadas, hojas, cartulina con fibras, cinta adhesiva vieja, papel mantequilla semitransparente.
- Fichas de cartón, sobres pegados a la página, bolsillos.
- Sonido: grabaciones cortas (voz, tono de teléfono, papel que se arruga), **siempre opcionales**: nunca suenan solas al entrar.
- `[MATERIAL PENDIENTE]`: escaneos del Vol. 5 con lavanda, del Vol. 8 y del volumen de llamadas, y grabaciones de audio si existen.

### Composición de una página

- Cada pliego es una **lámina de herbario**: un objeto principal grande, rodeado de fichas, notas y fragmentos pegados con cinta.
- Hay elementos que **se abren**: sobres con texto adentro, papel mantequilla que se levanta para mostrar lo de abajo, pliegues que se despliegan.
- En el teléfono, la lámina se recorre de arriba hacia abajo y lo que se abre funciona con toques simples.

### Qué puede alterar quien visita

- **Encender el sonido:** un interruptor visible (apagado por defecto) que activa audios al pasar o tocar ciertos objetos.
- **"Frotar" la página:** al pasar el dedo o el cursor por algunas zonas aparece lo que está debajo, como raspar o frotar un papel. También tiene una alternativa con teclado o botón.
- **Día / noche:** cambiar entre papel claro y oscuro.
- **Colección propia:** guardar objetos favoritos en una "caja" personal (almacenamiento local), como quien se lleva una flor del herbario.

---

## Lo que se mantiene en cualquier dirección

Estos límites vienen de [`CLAUDE.md`](CLAUDE.md) y no dependen de qué dirección se elija:

- **Texto principal legible**, con contraste de al menos 4.5:1. Lo ilegible solo puede ser decorativo.
- **Navegable con teclado:** todo lo que se puede hacer con el ratón o el dedo, también se puede hacer con el teclado.
- **Movimiento respetuoso:** si la persona pidió reducir el movimiento, no hay animaciones fuertes ni efectos que se muevan solos.
- **Funciona en el teléfono:** cada pliego tiene su versión para pantalla vertical.
- **Liviano:** imágenes optimizadas (comprimidas para que carguen rápido) y pocas tipografías por página (idealmente 2 o 3).
- **Sonido nunca automático.**
- **Todo lo personalizable va en tokens** (papel, tinta, tipografías, nivel de "desorden"), para que el día de mañana cada perfil de artista pueda tener los suyos.

Ejemplo de cómo se verían los tokens en el código, sea cual sea la dirección:

```css
:root {
  --papel: #f1ede3;
  --tinta: #1a1a1a;
  --acento: #e8f53a;
  --letra-texto: "Courier Prime", monospace;
  --letra-titulo: "Anton", sans-serif;
  --desorden: 0.4; /* 0 = todo recto y ordenado · 1 = máximo collage */
}
```

## Preguntas para que el equipo decida

1. ¿Cuál de las tres ideas centrales se siente más **KURVOZINE**? ¿O alguna mezcla (por ejemplo, la fotocopia de A con la interacción sensorial de C)?
2. ¿El sitio tiene **una sola estética**, o **cada pliego puede tener una dirección distinta**, como volúmenes diferentes de un mismo zine?
3. ¿Qué material físico real (escaneos, fotos, audios, letra a mano) puede aportar el colectivo, y quién lo reúne?
4. ¿Qué tan **finita** queremos que sea la experiencia: copias numeradas, páginas que cambian con cada visita, ediciones que "se agotan"?
5. ¿Qué forma de intervenir lo que se ve es imprescindible para el MVP (la primera versión simple que ya funciona)?

Cuando haya respuesta, se registra en [`docs/decisiones.md`](docs/decisiones.md) y este borrador pasa a ser `DESIGN.md` v1.
