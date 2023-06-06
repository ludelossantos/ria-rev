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
Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).
En el directorio del proyecto puedes ejecutar:
#### `npm start`

Se puede visualizar en [http://localhost:3000](http://localhost:3000). La página se recargará automáticamente cuando se realicen cambios.

## Mock ups y Mapa de navegación del proyecto

mockups y mapa

## Descripción de servicios rest utilizados
Install the dependencies and devDependencies and start the server.
