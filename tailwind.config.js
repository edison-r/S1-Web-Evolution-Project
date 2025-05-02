module.exports = {
    prefix: 'tw-', // Prefijo para evitar conflictos con tus mis estilos de css o sass
    content: [
      './src/**/*.{html,js}', // Ruta a los archivos que contienen las clases de Tailwind
      './index.html',          // Si tienes un archivo HTML en la raíz
    ],
    theme: {
      extend: {}, // Aquí se pueden extender las configuración de tema, como colores, fuentes...
    },
    plugins: [], // Aquí se agregan plugins
};
  