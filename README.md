# Proyecto de Subida de Archivos con Next.js y React

Este proyecto es una aplicación web que permite a los usuarios subir archivos a un servidor utilizando Next.js y React. La aplicación incluye un formulario de subida de archivos y un endpoint API para manejar la subida y almacenamiento de los archivos en el servidor.

## Características

- **Subida de Archivos**: Los usuarios pueden seleccionar y subir archivos desde su dispositivo.
- **Vista Previa de Imágenes**: Muestra una vista previa de la imagen seleccionada antes de subirla.
- **Almacenamiento en el Servidor**: Los archivos subidos se almacenan en el servidor en una ubicación específica.

## Estructura del Proyecto

- `src/app/layout.js`: Configuración del layout principal de la aplicación.
- `src/app/api/upload/route.jsx`: Endpoint API para manejar la subida de archivos.
- `src/app/components/form/form.jsx`: Componente de React que contiene el formulario de subida de archivos.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd <NOMBRE_DEL_PROYECTO>
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.



