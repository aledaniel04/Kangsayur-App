import React from 'react'
import { Icon } from '@iconify/react';

export const Buscador = ({buscar, actualizador}) => {
  return (
    <div className='flex justify-center'>
          <Icon className=' w-[10%]  h-11 rounded-l-md bg-[#F2F2F2] text-[#BDBDBD]' icon="ic:outline-search" />
          <input
            className=' w-[90%] h-11 rounded-r-md bg-[#F2F2F2] ps-2  text-[#BDBDBD]'
            type="text"
            placeholder='buscar producto...'
            value={buscar}
            onChange={(e) => actualizador(e.target.value)}
          />
        </div>
  )
}
