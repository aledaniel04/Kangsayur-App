import React from 'react';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importamos el hook

export const ShoppingCart = () => {
    const { cartItems, removeFromCart } = useCart(); // Obtenemos los productos del carrito y la función para eliminarlos

    // Calcular el total
    const total = cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);

    return (
        <div>
            <div className='flex items-center gap-2 bg-[#51BC7D] p-2 rounded-b-lg'>
                <div className='text-white font-semibold text-[1.5rem] flex'>
                    <h1>Carrito de Compras</h1>
                </div>
            </div>
            <div className='px-3 h-[37.5rem] overflow-y-auto mb-4'>
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="mt-4 rounded-lg shadow-[#808080c4] shadow-[3px_3px_3px_3px]  ">
                            <div className='flex gap-2'>
                                <div>
                                    <img className='rounded-2xl w-36 h-24' src={item.productImage} alt={item.productName} />
                                </div>
                                <div className='flex flex-col'>
                                <h2 className='font-bold text-[20px] text-[#333333]'> {item.productName}</h2>
                                <h2 className='font-bold text-[15px] text-[#4CAD73]'> $ {item.productPrice} <span className='text-[#828282] text-[13px] font-normal'> / {item.quantity} kg</span></h2>
                                </div>
                                <div>
                                    <button onClick={() => removeFromCart(item.id)} className=" text-black text-[2rem] ps-6 pt-1"><Icon icon="material-symbols:close" /></button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-[1.5rem]'>No hay productos en el carrito</p>
                )}
            </div>
            <div className="fixed bottom-0 left-0 w-screen z-10 flex rounded-t-3xl bg-gray-200 p-4">
            {cartItems.length > 0 && (
                <div className='flex justify-between w-screen items-center'>
                  <h2 className='text-[2rem] font-bold'>Total:</h2>  <h2 className='text-[1.5rem] font-semibold'> ${total.toFixed(2)}</h2> {/* Mostrar el total */}
                </div>
            )}
            </div>
        </div>
    );
};
