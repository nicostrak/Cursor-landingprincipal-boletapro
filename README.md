# BoletaPro - Página Principal

Landing page principal para BoletaPro, una plataforma que permite emitir boletas de honorarios del Servicio de Impuestos Internos (SII) de Chile de forma masiva y automática.

## Características

- **Diseño moderno y responsive**: Adaptado para todos los dispositivos
- **Selección de perfil**: Los usuarios pueden elegir entre perfil Profesional o Empresa
- **Redirección a subdominios**: Redirige automáticamente a `profesionales.boletapro.cl` o `empresa.boletapro.cl`
- **Secciones informativas**: Explica las características y beneficios del servicio
- **Formulario de contacto**: Permite a los usuarios contactar con el equipo

## Estructura del Proyecto

```
.
├── index.html      # Página principal HTML
├── styles.css      # Estilos CSS
├── script.js       # Funcionalidad JavaScript
└── README.md       # Documentación
```

## Funcionalidades

### Selección de Perfil

La página principal incluye una sección donde los usuarios pueden seleccionar su perfil:

- **Profesionales**: Para profesionales independientes
- **Empresas**: Para empresas con grandes volúmenes

Al hacer clic en cualquiera de las opciones, el usuario es redirigido al subdominio correspondiente.

### Secciones Principales

1. **Hero Section**: Presentación principal del servicio
2. **Selección de Perfil**: Tarjetas para elegir entre Profesional y Empresa
3. **Características**: Explicación de los beneficios del servicio
4. **CTA Section**: Llamado a la acción
5. **Contacto**: Formulario de contacto
6. **Footer**: Información adicional y enlaces

## Instalación y Uso

1. Clona o descarga este repositorio
2. Abre `index.html` en tu navegador o despliega en un servidor web
3. Configura los subdominios `profesionales.boletapro.cl` y `empresa.boletapro.cl` según corresponda

## Personalización

### Cambiar Colores

Los colores principales están definidos en las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --secondary-color: #64748b;
    /* ... más variables */
}
```

### Modificar Redirecciones

Las redirecciones se manejan en `script.js` en la función `redirectToSubdomain()`. Puedes modificar las URLs de destino según tus necesidades.

### Agregar Funcionalidades

- **Formulario de contacto**: Actualmente muestra una alerta. Puedes integrarlo con tu backend.
- **Login**: Los botones de "Iniciar Sesión" pueden redirigir a tu página de login.
- **Analytics**: Agrega tu código de Google Analytics o similar.

## Compatibilidad

- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Diseño responsive para móviles, tablets y desktop
- Optimizado para SEO

## Licencia

© 2025 BoletaPro. Todos los derechos reservados.

