# Portfolio Personal de Ignacio Breñas Muñoz 🚀

Este es el repositorio de mi portfolio personal, diseñado para mostrar mi experiencia, habilidades, proyectos y formación. Está construido con un enfoque en el rendimiento, un diseño premium moderno ("Glassmorphism") y soporte multilingüe.

## ✨ Características

- **Diseño Premium**: Interfaz moderna en modo oscuro, utilizando un diseño "Glassmorphism" con sombras de neón, tarjetas translúcidas y animaciones de scroll interactivas.
- **Totalmente Responsivo**: Adaptado perfectamente para dispositivos móviles, tablets y monitores grandes mediante un sistema de cuadrícula (Grid) CSS puro.
- **Multilingüe (i18n)**: Soporte nativo para múltiples idiomas (Español, Inglés, Catalán, Francés) a través del sistema de enrutamiento y diccionarios de Next.js.
- **Animaciones Inteligentes**: Los elementos aparecen fluidamente (fade-in-up) a medida que el usuario hace scroll gracias a la API de IntersectionObserver.

## 🛠️ Tecnologías Utilizadas

- **[Next.js](https://nextjs.org/) (v14)**: Framework de React para el renderizado y enrutamiento (Server Components & App Router).
- **[React](https://reactjs.org/) (v18)**: Biblioteca principal para construir la interfaz de usuario.
- **CSS Vanilla**: Estilos personalizados avanzados sin depender de frameworks pesados, garantizando un rendimiento óptimo y un diseño a medida.
- **[Lucide React](https://lucide.dev/)**: Para la iconografía del sitio.

## 🚀 Cómo Empezar (Desarrollo Local)

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### Opción 1: Entorno Configurado (Windows)
Si tienes el script de inicio en el directorio raíz, simplemente ejecuta:
```bash
start-dev.bat
```
Esto configurará automáticamente las variables de entorno de Node.js locales (ubicadas en la carpeta `node-bin`) y lanzará el servidor.

### Opción 2: Usando Node/npm global
Si tienes Node.js (v18 o superior) instalado globalmente en tu sistema, abre tu terminal y ejecuta:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📁 Estructura del Proyecto

- `app/` - Contiene la lógica de enrutamiento principal (App Router), diseño (layout) y estilos globales (`globals.css`).
- `components/` - Componentes reutilizables de React (ej. `LanguageSwitcher`, `RevealOnScroll`).
- `dictionaries/` - Archivos JSON con las traducciones para el soporte multilingüe.
- `public/` - Activos estáticos como imágenes y el currículum en PDF.

## 🤝 Contacto

- **LinkedIn**: [Perfil de LinkedIn](https://www.linkedin.com/in/ignaciobrenas)
- **GitHub**: [Perfil de GitHub](https://github.com/Ignaciobrenas)
- **Email**: ignaciobrenas@gmail.com

---
*Construido con dedicación y aprendizaje continuo.*
