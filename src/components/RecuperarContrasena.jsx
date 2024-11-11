import React, { useEffect, useState } from "react";
import { auth } from '../DataBase/Firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const RecuperarContrasena = ({ cerrarPopup }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Se ha enviado un enlace para restablecer la contraseña a tu correo.");
            setTimeout(() => {
                cerrarPopup(false)
            }, 2000);
        } catch (error) {
            toast.error('ah ocurrido un error ' + error);
        }
    }; 

    useEffect(() => {
        return () => {
            toast.dismiss(); // Cerrar todas las notificaciones al desmontar
        };
    }, []);

    return (
        <div className='fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[0.2rem] bg-[#000000ad]'>
            <form className='w-[85%] flex flex-col gap-4 bg-[#ffffffdc] p-2 rounded-lg' onSubmit={handleSubmit}>
                <h2 className="text-[1.3rem] font-semibold">Recuperar Contraseña</h2>
                <input
                    type="email"
                    className='bg-gray-300 h-11 rounded-md ps-2'
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="flex justify-center gap-2 text-[1.1rem] font-medium">
                    <button className='rounded-md w-full bg-green-600 p-2 text-[#0f0e0e]' type="submit">Recuperar</button>
                    <button onClick={() => { cerrarPopup(false) }} className='rounded-md w-full border-2 border-red-600 p-2'>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default RecuperarContrasena;
