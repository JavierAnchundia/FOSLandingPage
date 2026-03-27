# FOS Corporate Website

Sitio web corporativo estatico para FOS, construido con Astro + Tailwind CSS. El proyecto esta organizado para crecer con orden, mantener el contenido desacoplado y facilitar futuras iteraciones sin romper el diseno.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Instalacion

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

El sitio queda disponible normalmente en `http://localhost:4321`.

## Estructura del proyecto

```text
src/
  components/
    layout/
      Header.astro
      Footer.astro
      Navigation.astro
    sections/
      HeroSection.astro
      CompanyIntro.astro
      ServicesPreview.astro
      CapabilitiesStrip.astro
      CTASection.astro
      ContactForm.astro
      PageHero.astro
    ui/
      Button.astro
      Container.astro
      FeatureIcon.astro
      SectionTitle.astro
      ServiceCard.astro
      ProjectCard.astro
  data/
    navigation.ts
    site.ts
    services.ts
    projects.ts
  layouts/
    MainLayout.astro
  pages/
    index.astro
    empresa.astro
    servicios.astro
    proyectos.astro
    contacto.astro
  styles/
    global.css
  utils/
    helpers.ts
    seo.ts
public/
  images/
```

## Como editar contenido

### Textos globales y configuracion del sitio

Edita `src/data/site.ts` para actualizar:

- nombre de la empresa
- slogan
- descripcion general
- datos de contacto
- redes sociales
- contenido institucional
- textos del home
- copy de las paginas
- metadatos SEO base

### Navegacion

Edita `src/data/navigation.ts` para cambiar el menu principal y los enlaces del footer.

### Servicios

Edita `src/data/services.ts` para cambiar:

- nombres de servicios
- descripciones
- bullets
- orden de aparicion

### Proyectos

Edita `src/data/projects.ts` para cambiar:

- tarjetas de experiencia
- categorias
- resumenes
- resultados destacados

## Como agregar un servicio

1. Abre `src/data/services.ts`.
2. Agrega un nuevo objeto dentro del arreglo `services`.
3. Define `title`, `summary`, `description` y `bullets`.
4. Guarda el archivo. La pagina de servicios y los previews se actualizan automaticamente.

## Como agregar un proyecto

1. Abre `src/data/projects.ts`.
2. Agrega un nuevo objeto dentro del arreglo `projects`.
3. Define `title`, `category`, `summary` y `outcomes`.
4. Guarda el archivo. La pagina de proyectos y el preview del home se actualizan automaticamente.

## Comandos utiles

```bash
npm run dev
npm run build
npm run preview
```

## Como desplegar

### Build local

```bash
npm run build
```

La salida estatica queda en `dist/`.

### Cloudflare Pages

Configura el proyecto con estos valores:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20` o superior

No se requiere backend, base de datos ni autenticacion.

## Notas de mantenibilidad

- Las paginas en `src/pages` quedaron declarativas y con minima logica.
- La capa visual reusable esta separada entre `layout`, `sections` y `ui`.
- Los metadatos SEO se generan desde `src/utils/seo.ts`.
- Las ayudas reutilizables para previews, estados de navegacion e iconografia viven en `src/utils/helpers.ts`.
- El formulario de contacto es visual y puede integrarse despues con Formspree, Resend o un endpoint serverless.
