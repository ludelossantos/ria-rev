![logo](https://github.com/ludelossantos/ria-rev/assets/78172947/fa56208f-5651-4cde-a0ef-d0a0b8bcd074)  
# Book Finder
## _Encuentra tu libro_

![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

Prototipo de aplicación para el Taller de Aplicaciones de Internet Ricas. El sistema consume un servicio rest para obtener la información que se muestra al usuario. 
## Índice

• [Código fuente de la aplicación](#Codigo-fuente)

• [Diseño del sistema y descripción de tecnologías](#Diseno-y-tecnologias)

• [Configuración e instalación](#configuracion)

• [Mock ups y Mapa de navegación del proyecto](#mockup-y-mapa-navegacion)

• [Descripción de servicios rest utilizados](#descripcion-servicios-rest)

## Codigo fuente
Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Diseño del sistema y descripción de tecnologías

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

## Configuración e instalación
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Mock ups y Mapa de navegación del proyecto

• [Mock ups](#mockup)

![Mockup de la página de inicio](../mockups/1.png)
_El mockup representa la página de inicio del sitio web. El diseño general se compone de un navbar y un buscador._

_El navbar es de color amarillo claro y en la esquina izquierda se encuentra el logo y el nombre de la app, proporcionando una identificación clara._

_El buscador se encuentra arriba y en el centro de la página. Se presenta en un área en blanco, creando un contraste con el fondo amarillo del navbar. El buscador incluye un campo de entrada de texto y un botón de búsqueda, permitiendo a los usuarios ingresar palabras clave y obtener resultados rápidos._

![Mockup de la página de inicio con resultados de busqueda de un libro](../mockups/2.png)
_El mockup es una extensión de la página de inicio y presenta una vista ampliada de los resultados de búsqueda. Después del campo de búsqueda, se muestran los libros que coinciden con los términos ingresados._

_Cada libro se presenta en una tarjeta blanca que contiene la imagen del libro, su título y el nombre del autor. Las tarjetas están diseñadas para mostrar la información de manera clara, permitiendo a los usuarios tener una vista rápida de los resultados. La imagen del libro ayuda a visualizar el contenido y capturar el interés del usuario, mientras que el título y el autor proporcionan detalles clave sobre el libro._

_La disposición de las tarjetas puede variar dependiendo de la cantidad de resultados de búsqueda, con un límite de 10 tarjetas. Esto permite que los usuarios puedan desplazarse y explorar los diferentes libros encontrados en su búsqueda._

![Mockup de la página de informacion del libro](../mockups/3.png)
_El último mockup muestra cuando un usuario hace clic en una de las tarjetas de libro en la página de resultados de búsqueda. La página mantiene el mismo navbar que se encuentra en la página de inicio, pero esta vez sin el buscador.

_En el centro de la página se encuentra una tarjeta destacada en blanco que presenta detalles ampliados sobre el libro seleccionado. La tarjeta contiene la imagen del libro, el título, el autor y la sinopsis del mismo._

• [Mapa de navegación](#mapa-navegacion)

## Descripción de servicios rest utilizados
Install the dependencies and devDependencies and start the server.
