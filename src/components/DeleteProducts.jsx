import { database, storage } from '../DataBase/Firebase';
import { ref as storageRef, deleteObject } from 'firebase/storage';
import { ref as dbRef, remove, get } from 'firebase/database';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export const DeleteProducts = ({ cerrarPopup, Producto }) => {
    const deleteProduct = async () => {
        const productRef = dbRef(database, `Products/${Producto.id}`); // Referencia al producto
    
        try {
            // Obtener los datos del producto para acceder a la URL de la imagen
            const snapshot = await get(productRef);
            const productData = snapshot.val();
    
            // Referencia a la imagen en el storage
            const imageRef = storageRef(storage, productData.productImage);
    
            // Intenta eliminar el archivo
            await deleteObject(imageRef);
    
            // Eliminar el producto de la base de datos
            await remove(productRef);
            setTimeout(() => {
                cerrarPopup(false);
            }, 1000); // Cierra el popup
            toast.success('El producto se eliminó con éxito');
        } catch (error) {
            toast.error('No se ha podido eliminar el producto');
        }
    };
    

    useEffect(() => {
        return () => {
            toast.dismiss(); // Cerrar todas las notificaciones al desmontar
        };
    }, []);

    return (
        <div className='fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[0.2rem] bg-[#000000ad]'>
            <div className='w-[85%] flex flex-col gap-4 bg-[#ffffffdc] p-2 rounded-lg'>
                <h2 className='text-[1.5rem] text-center font-medium'>¿Estás seguro que quieres eliminar este producto?</h2>
                <div className="flex justify-center gap-2 text-[1.1rem] font-medium">
                    <button onClick={deleteProduct} className='rounded-md w-full bg-green-600 p-2'>Eliminar</button>
                    <button onClick={() => { cerrarPopup(false) }} className='rounded-md w-full border-2 border-red-600 p-2'>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
