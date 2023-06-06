![logo](https://github.com/ludelossantos/ria-rev/assets/78172947/fa56208f-5651-4cde-a0ef-d0a0b8bcd074)  
# Book Finder
## _Encuentra tu libro_

![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

Prototipo de aplicación para el Taller de Aplicaciones de Internet Ricas. El sistema consume un servicio rest para obtener la información que se muestra al usuario. 
## Índice

• [Código fuente de la aplicación](#Codigo-fuente)

• [Historias de usuario](#Historias-de-usuario)

• [Diseño del sistema y descripción de tecnologías](#Diseno-y-tecnologias)

• [Configuración e instalación](#configuracion)

• [Mock ups y mapa de navegación del proyecto](#mock-ups-y-mapa-de-navegación-del-proyecto)

• [Descripción de servicios rest utilizados](#descripcion-servicios-rest)

## Codigo fuente
El codigo se encuentra en este link: https://github.com/ludelossantos/ria-rev.git 

## Historias de Usuario

### Búsqueda de Libros por Título

**Como** Usuario de la aplicación
**Quiero** poder buscar libros por su título
**Para** encontrar rápidamente libros específicos que me interesen

### Criterios de Aceptación

- La aplicación debe tener un campo de búsqueda donde se pueda ingresar el título del libro.
- Al realizar la búsqueda, la aplicación debe mostrar los resultados coincidentes con el título ingresado.
- Los resultados de la búsqueda deben incluir la imagen, el título y el autor de cada libro.
- La aplicación debe permitir hacer clic en un libro para ver más detalles en la página de "Detalle del libro".

### Escenarios

**Escenario 1:** Búsqueda exitosa de un libro por título
1. El usuario ingresa "Harry Potter" en el campo de búsqueda.
2. La aplicación realiza la búsqueda y muestra los resultados coincidentes.
3. Se muestran varios libros relacionados con "Harry Potter", incluyendo la imagen, el título y el autor de cada libro.
4. El usuario hace clic en uno de los libros para ver más detalles en la página de "Detalle del libro".

**Escenario 2:** Búsqueda sin resultados 
1. El usuario ingresa "xyz" en el campo de búsqueda.
2. La aplicación realiza la búsqueda y no se muestra ningún libro en los resultados de la búsqueda.
3. El usuario puede realizar una nueva búsqueda con otro término.

## Diseño del sistema y descripción de tecnologías

##### Frontend: 
   - Página web construida con React. 
   - El componente fundamental es una barra de búsqueda. Se utilizan además tarjetas para estructurar la información. 
   - Al realizar la búsqueda se envía una solicitud a la API REST para la búsqueda de libros y se muestran los resultados en la misma página principal. Al seleccionar uno de los resultados se amplía la información en una nueva página.
   -  El frontend utiliza el método Fetch para realizar las solicitudes HTTP a la API REST. 

##### Backend: 
   - API REST de Google Books, que da respuesta a las solicitudes enviadas desde el frontend. 
   - Al realizar la primera consulta la API devuelve los resultados en formato JSON.

## Configuración e instalación
Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).
En el directorio del proyecto puedes ejecutar:
#### `npm start`

Se puede visualizar en [http://localhost:3000](http://localhost:3000). La página se recargará automáticamente cuando se realicen cambios.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Mock ups y Mapa de navegación del proyecto

### Mock ups

![Mockup de la página de inicio](https://github.com/ludelossantos/ria-rev/blob/sofiNuevo/mockups/1.png)
_El mockup representa la página de inicio del sitio web. El diseño general se compone de un navbar y un buscador._

_El navbar es de color amarillo claro y en la esquina izquierda se encuentra el logo y el nombre de la app, proporcionando una identificación clara._

_El buscador se encuentra arriba y en el centro de la página. Se presenta en un área en blanco, creando un contraste con el fondo amarillo del navbar. El buscador incluye un campo de entrada de texto y un botón de búsqueda, permitiendo a los usuarios ingresar palabras clave y obtener resultados rápidos._

![Mockup de la página de inicio con resultados de busqueda de un libro](https://github.com/ludelossantos/ria-rev/blob/sofiNuevo/mockups/2.png)
_El mockup es una extensión de la página de inicio y presenta una vista ampliada de los resultados de búsqueda. Después del campo de búsqueda, se muestran los libros que coinciden con los términos ingresados._

_Cada libro se presenta en una tarjeta blanca que contiene la imagen del libro, su título y el nombre del autor. Las tarjetas están diseñadas para mostrar la información de manera clara, permitiendo a los usuarios tener una vista rápida de los resultados. La imagen del libro ayuda a visualizar el contenido y capturar el interés del usuario, mientras que el título y el autor proporcionan detalles clave sobre el libro._

_La disposición de las tarjetas puede variar dependiendo de la cantidad de resultados de búsqueda, con un límite de 10 tarjetas. Esto permite que los usuarios puedan desplazarse y explorar los diferentes libros encontrados en su búsqueda._

![Mockup de la página de informacion del libro](https://github.com/ludelossantos/ria-rev/blob/sofiNuevo/mockups/3.png)
_El último mockup muestra cuando un usuario hace clic en una de las tarjetas de libro en la página de resultados de búsqueda. La página mantiene el mismo navbar que se encuentra en la página de inicio, pero esta vez sin el buscador._

_En el centro de la página se encuentra una tarjeta destacada en blanco que presenta detalles ampliados sobre el libro seleccionado. La tarjeta contiene la imagen del libro, el título, el autor y la sinopsis del mismo._

### Mapa de navegación

- Home
  - Búsqueda de libros
  - Resultados de búsqueda
    - Detalle del libro

_Esta estructura muestra que la página de inicio tiene dos opciones de navegación: realizar una búsqueda de libros y ver los resultados de la búsqueda. Los usuarios pueden hacer clic en un libro específico para ver los detalles en la página de Detalle del libro._

## Descripción de servicios rest utilizados
Install the dependencies and devDependencies and start the server.
