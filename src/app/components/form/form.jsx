'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function FormulaUpload() {
    const [file, setFile] = useState(null);
    /*
     * Descripción: Declara una variable de estado file y una función setFile para actualizar su valor. Inicialmente, file es null.
     * Función: useState es un hook de React que permite añadir estado a un componente funcional.
     * */

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        try {
            const data = new FormData();
            data.set('file', file);

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data,
            });
            console.log(res);

            if (res.ok) {
                console.log('File uploaded successfully');
            }
        } catch (error) {
            console.error(error);
        }
    };

    /* Descripción: Función asíncrona que maneja el evento de envío del formulario.
     - Función:
     * e.preventDefault(): Previene el comportamiento por defecto del formulario (recargar la página).
     * if (!file) return;: Si no hay un archivo seleccionado, la función termina.
     * FormData(): Crea un objeto FormData para enviar datos de formulario.
     * data.set('file', file);: Añade el archivo seleccionado al objeto FormData.
     * fetch('/api/upload', { method: 'POST', body: data }): Envía una solicitud POST al endpoint /api/upload con el archivo.
     * console.log(res);: Imprime la respuesta de la solicitud en la consola.
     * if (res.ok) { console.log('File uploaded successfully'); }: Si la respuesta es exitosa, imprime un mensaje de éxito.
     * catch (error) { console.error(error); }: Captura y muestra cualquier error que ocurra durante la solicitud.
     */

    const handleFileChange = (e) => {
        if (!e.target.files?.[0]) return;
        setFile(e.target.files?.[0]);
    };

    /* Descripción: Función que maneja el evento de cambio de archivo en el input.
     - Función:
     * if (!e.target.files?.[0]) return;: Si no hay un archivo seleccionado, la función termina.
     * setFile(e.target.files?.[0]);: Actualiza el estado file con el archivo seleccionado.
     */

    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col my-[30px]">
                    <label htmlFor="">Upload File:</label>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div>
                    <button
                        className="px-5 py-2 text-white bg-indigo-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2"
                        disabled={!file}
                    >
                        Upload
                    </button>
                </div>
                <div className="flex flex-col my-[30px]">
                    {file && (
                        <Image
                            src={URL.createObjectURL(file)}
                            alt="Uploaded file"
                            className="w-[200px] h-[200px] object-contain"
                            width={256}
                            height={256}
                        />
                    )}
                </div>
            </form>
        </>
    );
}
