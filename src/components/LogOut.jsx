import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { auth } from '../DataBase/Firebase';
import { signOut } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export const LogOut = () => {
    const [popup, setPopup] = useState(false)
    const navegador = useNavigate()

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success('Haz cerrado sesion');
                setTimeout(() => {
                    navegador("/")
                }, 2000);
                setPopup(false)
            })
            .catch((error) => {
                toast.error('This is an error! ' + error);
            })
    }
    useEffect(() => {
        return () => {
            toast.dismiss(); // Cerrar todas las notificaciones al desmontar
        };
    }, []);

    return (
        <div>
            {
                popup && (
                    <div className='fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[0.2rem] bg-[#000000ad]'>
                        <div className='w-[85%] flex flex-col gap-4 bg-[#ffffffdc] p-2 rounded-lg'>
                            <h2 className="text-[1.3rem] text-center font-semibold">¿Estas seguro que quieres cerrar sesión?</h2>
                            <div className="flex justify-center gap-2 text-[1.1rem] font-medium">
                                <button onClick={handleLogout} className='rounded-md w-full bg-green-600 p-2'>Cerrar Sesion</button>
                                <button onClick={() => { setPopup(false) }} className='rounded-md w-full border-2 border-red-600 p-2'>Cancelar</button>
                            </div>
                        </div>
                    </div>
                )
            }
            <button onClick={() => { setPopup(true) }} className='text-[2rem] text-white'><Icon icon="line-md:logout" /></button>
        </div>
    )
}
