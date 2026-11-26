# Neón — Ideas que cobran vida

Sitio web corporativo para **Neón**, un estudio creativo independiente enfocado en experiencias digitales, identidad y diseño con propósito. La página presenta una estética editorial contemporánea basada en tipografía expresiva, formas geométricas, colores intensos y pequeñas interacciones.

## Vista general

El sitio es una *landing page* de una sola página compuesta por:

- **Inicio:** propuesta del estudio, llamadas a la acción e ilustración geométrica interactiva.
- **Proyectos:** selección de trabajos de identidad y diseño digital.
- **Nosotros:** declaración de principios del estudio.
- **Navegación adaptable:** menú convencional en escritorio y menú desplegable en dispositivos móviles.

## Características

- Diseño *responsive* para escritorio, tablet y móvil.
- Navegación interna con desplazamiento suave.
- Ilustración construida completamente con HTML y CSS.
- Efecto de paralaje con el puntero sobre las formas de la sección principal.
- Menú móvil accesible mediante atributos `aria-expanded` y etiquetas dinámicas.
- Marcado semántico con `header`, `nav`, `main`, `section` y `article`.
- Variables CSS centralizadas para mantener una paleta visual consistente.
- Sin dependencias de compilación ni gestor de paquetes.

## Tecnologías

- **HTML5**
- **CSS3**
- **JavaScript vanilla**
- **Google Fonts:** DM Sans y Manrope

## Estructura del proyecto

```text
MiWeb/
├── index.html    # Contenido y estructura de la landing page
├── styles.css    # Diseño, componentes, animaciones visuales y responsive
├── main.js       # Menú móvil e interacción de las formas
└── .github/
    └── README.md # Documentación del proyecto
```

## Cómo ejecutar el proyecto

No se requiere instalación ni proceso de compilación.

1. Clona o descarga este repositorio.
2. Abre la carpeta `MiWeb`.
3. Abre `index.html` directamente en un navegador.

También puedes servir el proyecto con cualquier servidor estático local. Por ejemplo, desde la raíz del repositorio:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

> La página consulta Google Fonts en línea. Si no hay conexión, el navegador utilizará las fuentes alternativas declaradas en CSS.

## Personalización

### Contenido

Edita `index.html` para modificar:

- El nombre y la descripción del estudio.
- Los enlaces de navegación.
- Los textos de las secciones.
- Los proyectos y sus metadatos.

### Diseño

Los colores principales están definidos como variables al comienzo de `styles.css`:

- `--ink`: color principal oscuro.
- `--paper`: color de fondo claro.
- `--coral`: acento coral.
- `--yellow`: acento amarillo.
- `--blue`: acento azul.
- `--lime`: fondo del primer proyecto.
- `--violet`: fondo del segundo proyecto.

### Interacciones

La lógica de `main.js` controla:

- La apertura y el cierre del menú móvil.
- El cierre automático del menú al seleccionar un enlace.
- El desplazamiento de las formas geométricas según la posición del puntero.

## Diseño adaptable

Los puntos de corte principales son:

- `900px`: cambia el menú a versión móvil y reorganiza las secciones en una sola columna.
- `560px`: ajusta tipografía, espaciados, botones, ilustraciones y tarjetas para pantallas pequeñas.

## Estado

Proyecto front-end estático preparado para servir como plantilla o base de un portafolio creativo. Puede ampliarse con nuevas páginas, proyectos, formularios de contacto, un pie de página o integración con un CMS.

## Licencia

No se ha especificado una licencia para este proyecto.

---

# Neón — Ideas that come to life

Corporate website for **Neón**, an independent creative studio focused on digital experiences, identity, and purposeful design. The website features a contemporary editorial aesthetic based on expressive typography, geometric shapes, vibrant colors, and subtle interactions.

## Overview

The site is a one-page landing page composed of:

- **Home:** studio pitch, calls to action, and interactive geometric illustration.
- **Projects:** selection of identity and digital design works.
- **About Us:** studio's statement of principles.
- **Adaptive Navigation:** conventional menu on desktop and dropdown menu on mobile devices.

## Features

- Responsive design for desktop, tablet, and mobile.
- Internal navigation with smooth scrolling.
- Illustration entirely built with HTML and CSS.
- Parallax effect with the pointer over the shapes in the main section.
- Mobile menu accessible via `aria-expanded` attributes and dynamic labels.
- Semantic markup with `header`, `nav`, `main`, `section`, and `article`.
- Centralized CSS variables to maintain a consistent visual palette.
- No build dependencies or package manager required.

## Technologies

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Google Fonts:** DM Sans and Manrope

## Project Structure

```text
MiWeb/
├── index.html    # Content and structure of the landing page
├── styles.css    # Design, components, visual animations, and responsive
├── main.js       # Mobile menu and shape interaction
└── .github/
    └── README.md # Project documentation
```

## How to Run the Project

No installation or build process is required.

1. Clone or download this repository.
2. Open the `MiWeb` folder.
3. Open `index.html` directly in a browser.

You can also serve the project with any local static server. For example, from the root of the repository:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

> The page fetches Google Fonts online. If there is no connection, the browser will use the fallback fonts declared in CSS.

## Customization

### Content

Edit `index.html` to modify:

- The studio's name and description.
- The navigation links.
- The section texts.
- The projects and their metadata.

### Design

The main colors are defined as variables at the beginning of `styles.css`:

- `--ink`: dark primary color.
- `--paper`: light background color.
- `--coral`: coral accent.
- `--yellow`: yellow accent.
- `--blue`: blue accent.
- `--lime`: first project background.
- `--violet`: second project background.

### Interactions

The logic in `main.js` controls:

- The opening and closing of the mobile menu.
- The automatic closing of the menu when selecting a link.
- The movement of geometric shapes based on the pointer's position.

## Adaptive Design

The main breakpoints are:

- `900px`: switches the menu to mobile version and rearranges sections in a single column.
- `560px`: adjusts typography, spacing, buttons, illustrations, and cards for small screens.

## Status

Static front-end project ready to be used as a template or base for a creative portfolio. It can be expanded with new pages, projects, contact forms, a footer, or CMS integration.

## License

No license has been specified for this project.



