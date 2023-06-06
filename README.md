![logo](https://github.com/ludelossantos/ria-rev/assets/78172947/fa56208f-5651-4cde-a0ef-d0a0b8bcd074)  
# Book Finder
## _Encuentra tu libro_

![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

Prototipo de aplicación para el Taller de Aplicaciones de Internet Ricas. El sistema consume un servicio rest para obtener la información que se muestra al usuario. 
## Índice

• [Código fuente de la aplicación](#Codigo-fuente)

• [Diseño del sistema y descripción de tecnologías](#Diseño-del-sistema-y-descripción-de-tecnologías)

• [Configuración e instalación](#Configuración-e-instalación)

• [Mock ups y Mapa de navegación del proyecto](#Mock-ups-y-Mapa-de-navegación-del-proyecto)

• [Descripción de servicios rest utilizados](#Descripción-de-servicios-rest-utilizados)

## Codigo fuente
El codigo se encuentra en este link: https://github.com/ludelossantos/ria-rev.git 

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

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

## Descripción de servicios rest utilizados
Install the dependencies and devDependencies and start the server.
