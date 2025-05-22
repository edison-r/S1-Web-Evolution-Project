# ⚡️ SPRINT 1 - Web Evolution Project

Este proyecto muestra la evolución de una página web a través de diferentes tecnologías y enfoques de estilos CSS.

## Descripción

El proyecto consta de tres partes, cada una utilizando diferentes tecnologías para el diseño y estilo de la página web:

1. **HTML y CSS Vanilla**
   - Creación de una página web utilizando HTML y CSS puro.
   - Enfoque en la estructura básica y estilos simples.

2. **Refactorización con SASS**
   - Conversión de los estilos CSS a SASS para mejorar la mantenibilidad y organización del código.
   - Uso de variables, anidamiento y mixins para optimizar los estilos.

3. **Migración a Tailwind CSS o Bootstrap**
   - Implementación de Tailwind CSS o Bootstrap para utilizar un enfoque basado en utilidades.
   - Demostración de cómo las clases utilitarias pueden simplificar el diseño web.

## Estructura del Proyecto

- **Parte 1: HTML y CSS Vanilla**
  
  - Carpeta: `img`
  - Archivos: `index.html`, `styles.css`, `main.js`, `README.md`
    
- **Parte 2: Refactorizando con SASS
  
  - Carpetas: `img`: recursos / `css`: css puro hecho en vanilla / `sass`: componentes de SASS / `sass/atoms`: Componentes modularizados
  - Archivos:  `index.html`, `styles.css`, `main.js`, `README.md`, `main.scss`, `main.css`
    
- **Parte 3: Usando librerías, aprendiendo TailwindCSS
  
  - Carpetas `img`: recursos / `css`: css puro hecho en vanilla / `sass`: componentes de SASS / `src`: input.css donde se importa TailwindCSS / `dist`: output de TailwindCSS
  - Archivos `README.md`, `index.html`, `main.js`, `styles.css`: css puro hecho en vanilla, `main.scss`: input de SASS, `main.css`: output de SASS, `output.css`: output de TailwindCSS

## Instrucciones de Uso

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/edison-r/S1-Web-Evolution-Project.git
   cd web-evolution-project

## Diario personal del proyecto

Este proyecto me ha enseñado MUCHO sobre las tecnologías aplicadas.

Inicialmente lo planteé de una manera para hacerlo todo tanto con vanilla como con SASS Y TailwindCSS es decir, tres veces el proyecto por separado. Pero con los tiempos ajustados de entrega finalmente decidí refactorizar partes del proyecto haciendo que las tres tecnologías de CSS usadas convivan. Lo cual, ha sido un GRAN acierto porque esto me ha permitido aprender cómo se puede mezclar diferentes tecnologías en un mismo código. 

En el código hay incoherencias, por ejemplo: hay secciones que en el HTML se usa la metodología BEM pero en otras no. Esto es debido a que he ido implementando mejoras propuestas en los Issues por mi compañera Angeles (¡muchas gracias! 🙏) a ciertas partes del código para poder aprender cómo usarlo pero no lo he implementado todo ya que supone mucho tiempo de refactorización. (Hay más incoherencias pero todo sigue la misma linea, mi objetivo ha sido aprender y no hacer la página "pixel-perfect").

PD: git y github ha sido un rompecabezaaaaas 🧩 PERO lo voy pillando. 
