import React, { useState } from 'react'
import { AddProducts } from '../components/AddProducts'
import { Icon } from '@iconify/react';
import { LogOut } from '../components/LogOut';
import { ShowProducts } from '../components/ShowProducts';
import { useLocation } from 'react-router-dom';


export const Product = () => {
  const [popup, setPopup] = useState(false)
  const location = useLocation();
  const Admin = location.state?.Admin;
  return (
    <div>
      <div className=' fixed top-0 left-0 w-screen flex justify-between items-center bg-[#51BC7D] p-2 shadow-[#808080c4] shadow-[3px_3px_3px_3px] rounded-b-lg'>
      <div className='text-white font-semibold text-[1.5rem] flex'>
              <h1>Kangsayur</h1><Icon className='text-[2rem]' icon="fa6-solid:carrot" />
        </div>
        <LogOut/>
      </div>
      <div className='mt-16'>
      < ShowProducts VistaAdmin={Admin} />
      </div>
      {
        popup && (<AddProducts cerrarPopup={setPopup} />)
      }
      {
        Admin === 'nEJJfgfXPrPYSX3ift1deyMsjgQ2' && (
          <button onClick={() => { setPopup(true) }} className='fixed bottom-16 right-2 text-[4rem] text-green-500'><Icon icon="line-md:plus-circle-filled" /></button>
        )
      }
    </div>
  )
}
