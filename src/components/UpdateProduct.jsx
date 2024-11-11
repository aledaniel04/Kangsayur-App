import React, { useEffect, useState } from 'react';
import { database, storage } from '../DataBase/Firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import toast, { Toaster } from 'react-hot-toast';
import { set, ref as dbRef } from 'firebase/database';

export const UpdateProduct = ({ ProductEdit, cerrarPopup }) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (ProductEdit) {
            setNombre(ProductEdit.productName);
            setCantidad(ProductEdit.productCantidad);
            setPrecio(ProductEdit.productPrice);
            setDescripcion(ProductEdit.productDescription);
            setCategoria(ProductEdit.category);
            setImage(null); // Inicializa a null para permitir nueva carga
        }
    }, [ProductEdit]);

    const addImage = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSummit = async (e) => {
        e.preventDefault();
        let url;

        // Si hay una nueva imagen, la subimos
        if (image) {
            const storageRef = ref(storage, `Products/${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            url = await getDownloadURL(snapshot.ref);
        } else {
            // Mantener la URL de la imagen existente si no se sube una nueva
            url = ProductEdit.productImage; 
        }

        // Usar el ID del producto para actualizarlo
        const productRef = dbRef(database, `Products/${ProductEdit.id}`);

        try {
            await set(productRef, {
                productName: nombre,
                productCantidad: cantidad,
                productPrice: precio,
                productDescription: descripcion,
                productImage: url,
                category: categoria
            });
            toast.success('El producto se actualizó con éxito');
            setTimeout(() => {
                cerrarPopup(false);
            }, 2000);
        } catch (error) {
            toast.error('Ha ocurrido un error');
            console.error('No se ha podido actualizar: ' + error);
        }
    };

    useEffect(() => {
        return () => {
            toast.dismiss(); // Cerrar todas las notificaciones al desmontar
        };
    }, []);

    return (
        <>
            <div className='fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[0.2rem] bg-[#000000ad]'>
                <form className='w-[85%] flex flex-col gap-4 bg-[#ffffffdc] p-2 rounded-lg text-[1.2rem] font-medium' onSubmit={handleSummit}>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Nombre</label>
                        <input
                            className='bg-gray-300 rounded-md h-10 p-2'
                            placeholder='Ingrese el nombre'
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Categorías</label>
                        <select className='bg-gray-300 rounded-md h-11 p-2 w-full' value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            <option disabled value="">Agregar una categoría</option>
                            <option value="vegetales">Vegetales</option>
                            <option value="frutas">Frutas</option>
                            <option value="lacteos">Lácteos</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="cantidad">Cantidad</label>
                        <input
                            className='bg-gray-300 rounded-md h-10 p-2'
                            placeholder='Ingrese la cantidad'
                            type="number"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="precio">Precio</label>
                        <input
                            className='bg-gray-300 rounded-md h-10 p-2'
                            placeholder='Ingrese el precio'
                            type="number"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            className='bg-gray-300 text-gray-500 rounded-md p-2'
                            placeholder='Descripción'
                            rows='3'
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <input
                            className='w-64'
                            type="file"
                            onChange={addImage} />
                    </div>
                    <div className='flex justify-center gap-2 text-[1rem] font-medium'>
                        <button className='rounded-md w-full bg-green-600 p-2' type='submit'>Enviar</button>
                        <button onClick={() => { cerrarPopup(false) }} className='rounded-md w-full border-2 border-red-600 p-2'>Cancelar</button>
                    </div>
                </form>
            </div>
        </>
    );
};
