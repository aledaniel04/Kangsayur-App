import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import imagenLogin from '../assets/imagen_Login.png'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../DataBase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';



export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navegador = useNavigate()
  const handleRegister =  (e) => {
    e.preventDefault()
   createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Ususario registrado con exito');
        setTimeout(() => {
          navegador("/")
        }, 2000);
        // Signed up 
        const user = userCredential.user;
        setEmail('')
        setPassword('')
        // {user && (
        //   <Navigate to="/Login" replace={true} />
        // )}
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error('ha ocurrido un error ' + errorMessage);
        // ..
      });
  }

  useEffect(() => {
    return () => {
        toast.dismiss(); // Cerrar todas las notificaciones al desmontar
    };
}, []);

  return (
    <>
    <h1 className='text-[4rem] hidden sm:block'>esto solo puede ver para movil</h1>
    <div className='w-screen h-screen sm:hidden'>
      <div className='w-full h-[50%]'>
        <div className='bg-[#4CAD73] w-screen h-[80%] rounded-br-[50%] flex justify-center items-baseline flex-col'>
          <Link to="/" className='text-white font-semibold text-[2rem] mt-28 ps-6'>
            <Icon icon="weui:back-filled" />
          </Link>
          <div className='flex justify-between items-center w-full'>
            <div className='h-full flex items-end pb-28 pl-5'>
              <h1 className='text-white  text-[2.125rem] font-bold'>Register</h1>
            </div>
            <div className='pr-6 pt-9'>
              <img src={imagenLogin} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[50%] flex justify-center items-start'>
        <form onSubmit={handleRegister} className='flex justify-center flex-col gap-4 w-[85%]'>
          <div className='flex flex-col gap-1'>
            <label className='text-[1.19rem] font-medium text-[#333333] ps-1' htmlFor="email">email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-gray-200 h-11 rounded-md ps-2' placeholder='yourmail@mail.com' type="text" />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[1.19rem] font-medium text-[#333333] ps-1' htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-gray-200 h-11 rounded-md ps-2' placeholder='your password' type="password" name="" id="" />
          </div>
          <button type='submit' className=' bg-[#4CAD73] text-center py-3 text-white text-[1.361rem] cursor-pointer rounded-[0.5rem] font-semibold mt-4'>
            Register
          </button>
          <div className='text-center text-[#0EB177] text-[0.85rem] font-normal'>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
