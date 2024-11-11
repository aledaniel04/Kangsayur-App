import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import imagenHome from '../assets/imagen_home.png'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../DataBase/Firebase';
import toast, { Toaster } from 'react-hot-toast';


export const Home = () => {
  const provider = new GoogleAuthProvider();
  const navegador = useNavigate()
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        toast.success('Haz iniciado sesion con exitos');
        setTimeout(() => {
          navegador("/Start")
        }, 3000);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error('This is an error! ' + errorMessage);
        // ...
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
        <div className='w-full h-[55%]'>
          <div className='bg-[#4CAD73] w-[100%] h-[80%] rounded-br-[50%] flex justify-center items-center flex-col gap-12'>
            <div className='text-white font-semibold text-[2rem] flex mt-20 ms-7'>
              <h1>Kangsayur</h1><Icon className='text-[2.5rem]' icon="fa6-solid:carrot" />
            </div>
            <img className='w-64 mt-8' src={imagenHome} alt="" />
          </div>
        </div>
        <div className='w-full h-[45%] flex justify-center items-center flex-col gap-4'>
          <Link to='/login' className='w-[85%] bg-[#4CAD73] text-center py-3 text-white text-[1.361rem] cursor-pointer rounded-[0.5rem] font-semibold'>
            Login
          </Link>
          <Link to='/register' className='w-[85%] border border-green-700 text-center py-3 text-[#4CAD73] text-[1.361rem] cursor-pointer rounded-[0.5rem] font-semibold'>
            Register
          </Link>
          <div className='w-[85%] flex justify-center items-center gap-1'>
            <hr className='border-[#828282] border w-[37%]' /><p className='text-[0.75rem] text-[#333333] font-normal text-center'>Or login with</p> <hr className='border w-[37%] border-[#828282]' />
          </div>
          <button onClick={handleGoogle} className='w-[85%] text-gray-400  text-center py-1 text-[1.361rem] border border-[#BDBDBD] cursor-pointer rounded-[0.5rem] font-semibold flex items-center ps-4'>
            <Icon icon="flat-color-icons:google" /> <p className='ms-20'>Google</p>
          </button>
          <button className='w-[85%] bg-indigo-500 border text-center py-1 text-white text-[1.361rem] cursor-pointer rounded-[0.5rem] font-semibold flex items-center ps-4'>
            <Icon icon="ic:baseline-facebook" />
            <p className='ms-[4.5rem]'>Facebook</p>
          </button>
        </div>
      </div>
    </>
  )
}
