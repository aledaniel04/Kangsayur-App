import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useCart } from '../context/CartContext';// Ajusta la ruta según tu estructura de carpetas

export const PopupProduct = ({ infoProduct, cerrarPopup }) => {
    const [counter, setCounter] = useState(1);
    const { addToCart } = useCart(); // Obtener la función para agregar al carrito

    const disminuir = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(infoProduct, counter); // Agregar producto al carrito
        cerrarPopup(false); // Cerrar el popup
    };

    return (
        <div className='fixed z-10 top-0 left-0 w-screen h-screen flex justify-center bg-[white]'>
            <div className='flex flex-col bg-[#ffffffdc] overflow-y-auto'>
                <div className='w-full relative h-[18rem]'>
                    <div className='absolute z-10 top-4 left-4 text-white text-[1.5rem]' onClick={() => cerrarPopup(false)}>
                        <Icon icon="ic:outline-arrow-back-ios" />
                    </div>
                    <img className='w-full h-full' src={infoProduct.productImage} alt="" />
                </div>
                <div className='p-4 flex flex-col gap-1 rounded-t-[2rem] mt-[-1.5rem] bg-white z-20'>
                    <div className='bg-[#4CAD7333] text-center text-[#4CAD73] w-16 rounded-xl'>
                        {infoProduct.category}
                    </div>
                    <div className='w-72 text-[0.8rem]'>
                        <h2 className='font-bold text-[2rem] text-[#333333]'> {infoProduct.productName}</h2>
                        <h2 className='font-bold text-[1.5rem] text-[#4CAD73]'> Rp {infoProduct.productPrice} <span className='text-[#828282] text-[1rem] font-normal'> / {infoProduct.productCantidad} kg</span></h2>
                    </div>
                    <div>
                    <div>
                        <p className='text-[#4CAD73] text-[18px] font-semibold border-b-2 border-green-700 w-24'>Descripcion</p>
                    </div>
                    <div className='h-[12.5rem] overflow-y-auto border-t border-gray-400'>
                        <p className='text-[15px] font-normal text-[#828282]'>{infoProduct.productDescription}</p>
                    </div>   
                    </div>
                    
                </div>
            </div>
            <div className='fixed bottom-0 left-0 w-screen z-30 flex rounded-t-3xl bg-gray-200 p-4'>
                <div className='flex justify-center items-center w-full'>
                    <button className='border border-gray-500 p-1 text-[3.5rem] h-8 flex items-center rounded-md pb-4' onClick={disminuir}>-</button>
                    <div className='bg-[#0EB17726] w-8 h-8 flex items-center justify-center text-[2rem] font-semibold px-5 font-mono'>{counter}</div>
                    <button className='border border-gray-500 p-1 text-[2.5rem] h-8 flex items-center rounded-md pb-3' onClick={() => setCounter(counter + 1)}>+</button>
                </div>
                <button onClick={handleAddToCart} className='bg-green-700 text-white p-3 rounded-xl w-full text-[18px] font-semibold'>
                    Add to cart
                </button>
            </div>
        </div>
    );
};
