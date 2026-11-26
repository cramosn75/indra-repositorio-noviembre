# Instrucciones de GitHub Copilot para MiWeb

## Contexto del proyecto

- Este proyecto es la landing page de una sola página del estudio creativo **Neón**.
- Es un sitio estático sin framework, compilación ni gestor de paquetes.
- Usa `HTML5`, `CSS3` y JavaScript vanilla.
- El contenido visible está en español y el documento HTML declara `lang="es"`.
- Las fuentes DM Sans y Manrope se cargan desde Google Fonts; CSS incluye alternativas del sistema.

## Estructura

- `index.html`: contenido, estructura semántica y navegación interna.
- `styles.css`: variables visuales, componentes, animaciones, ilustraciones y diseño responsive.
- `main.js`: menú móvil y efecto de paralaje de las formas.
- `README.md`: documentación de uso y personalización.

Mantén esta organización. No introduzcas frameworks, bundlers, dependencias ni archivos de configuración salvo que una petición lo requiera explícitamente.

## Convenciones de implementación

### HTML

- Conserva marcado semántico con `header`, `nav`, `main`, `section` y `article`.
- Usa nombres de clases descriptivos y consistentes con los existentes: `hero-*`, `project-*`, `card-*`, `shape-*` y `nav-*`.
- Mantén los identificadores de las secciones para que funcionen los enlaces internos: `#inicio`, `#proyectos` y `#nosotros`.
- Añade `aria-label`, `aria-expanded` y `aria-hidden` cuando mejoren la accesibilidad.
- Mantén el contenido en español, con una voz breve, creativa y editorial.
- No dependas de imágenes locales o externas para las ilustraciones si pueden construirse con HTML y CSS.

### CSS

- Reutiliza las variables definidas en `:root` antes de añadir colores literales:
  `--ink`, `--paper`, `--coral`, `--yellow`, `--blue`, `--lime` y `--violet`.
- Conserva la estética editorial: tipografía expresiva, contraste fuerte, formas geométricas, espaciado amplio y composición limpia.
- Usa tamaños fluidos con `clamp()` cuando sea apropiado.
- Mantén el enfoque mobile-first cuando añadas estilos nuevos, respetando los breakpoints existentes de `900px` y `560px`.
- Evita duplicar reglas y agrupa los nuevos estilos junto al componente correspondiente.
- Respeta `prefers-reduced-motion`: anima solo lo necesario y reduce o desactiva movimiento si se incorpora dicha consulta.
- Asegura contraste, estados visibles de foco y tamaños táctiles adecuados para enlaces y controles.

### JavaScript

- Usa JavaScript vanilla moderno y APIs estándar del navegador.
- Mantén los selectores alineados con las clases de `index.html`.
- Encapsula cada interacción de forma clara y evita variables globales innecesarias.
- Al modificar elementos del menú móvil, sincroniza el estado visual, `aria-expanded` y `aria-label`.
- Si se añaden listeners a elementos opcionales, comprueba que existan antes de registrar eventos.
- El efecto de paralaje solo debe alterar las formas decorativas y nunca afectar a la legibilidad ni al flujo del documento.

## Criterios para cambios

- Prioriza cambios pequeños, directos y compatibles con navegadores modernos.
- Conserva la navegación con desplazamiento suave y el cierre automático del menú al seleccionar un enlace.
- Revisa el resultado a anchos de escritorio, tablet y móvil, especialmente alrededor de `900px` y `560px`.
- No reestructures ni renombres componentes sin una razón funcional concreta.
- No elimines metadatos ni atributos de accesibilidad al simplificar el marcado.
- Actualiza `README.md` cuando cambien la estructura, la ejecución o las funcionalidades del proyecto.

## Validación

Al completar cambios:

1. Comprueba que `index.html` se carga directamente y que no hay recursos locales rotos.
2. Verifica navegación interna, menú móvil y efecto de puntero.
3. Confirma que no aparecen errores en la consola del navegador.
4. Revisa teclado, foco, etiquetas accesibles y comportamiento responsive.
5. No uses instrucciones de instalación o compilación: no son necesarias salvo que el alcance del proyecto cambie.