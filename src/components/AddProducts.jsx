import React, { useState } from 'react'
import { database, storage } from '../DataBase/Firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import toast, { Toaster } from 'react-hot-toast';
import { set, ref as dbRef } from 'firebase/database';


export const AddProducts = ({ cerrarPopup }) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState()
  const [precio, setPrecio] = useState()
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')
  const [image, setImage] = useState(null)
  const addImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSummit = async (e) => {
    e.preventDefault()
    const storageRef = ref(storage, `Products/${image.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, image)
      setTimeout(() => {
        cerrarPopup(false)
      }, 1000);
      const url = await getDownloadURL(snapshot.ref)
      const newProduct = dbRef(database, `Products/ ${nombre}`)
      set(newProduct, {
        productName: nombre,
        productCantidad: cantidad,
        productPrice: precio,
        productDescription: descripcion,
        productImage: url,
        category: categoria
      })
      setNombre('')
      setCantidad('')
      setPrecio('')
      setDescripcion('')
      setImage(null)
      setCategoria('')
      toast.success('El producto se agrego con exito');
    } catch (error) {
      toast.error('ha ocurrido un error');
      console.error('no se ha podido agregar ' + error)
    }
  }
  return (
    <>
      <div className='fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[0.2rem] bg-[#000000ad]'>
        <form className='w-[85%] flex flex-col gap-4 bg-[#ffffffdc] p-2 rounded-lg text-[1.2rem] font-medium' onSubmit={handleSummit}>
          <div className='flex flex-col'>
            <label htmlFor="name">Nombre</label>
            <input
              className='bg-gray-300 rounded-md h-10 p-2'
              placeholder='ingrese el nombre'
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Categorias</label>
            <select className='bg-gray-300 rounded-md h-11 p-2 w-full' onChange={(e) => setCategoria(e.target.value)}>
              <option  disabled value="">agregar una categoria</option>
              <option  value="vegetales">Vegetales</option>
              <option  value="frutas">Frutas</option>
              <option  value="carne">carne</option>
              <option  value="bebidas">bebidas</option>
              <option  value="panaderia">panaderia</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cantidad">Cantidad</label>
            <input
              className='bg-gray-300 rounded-md h-10 p-2'
              placeholder='ingrese la cantidad'
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="precio">Precio</label>
            <input
              className='bg-gray-300 rounded-md h-10 p-2'
              placeholder='ingrese el precio'
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="descripcion">Descripcion</label>
            <textarea
              className='bg-gray-300 rounded-md p-2'
              placeholder='descripcion'
              name="" id="" rows='3'
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <div>
            <input
              className='w-64'
              type="file"
              onChange={addImage}
              required />
          </div>
          <div className='flex justify-center gap-2 text-[1rem] font-medium'>
            <button className='rounded-md w-full bg-green-500 p-1' type='submit'>Agregar producto</button>
            <button onClick={() => { cerrarPopup(false) }} className='rounded-md w-full border-2 border-red-600 p-2'>Cancelar</button>
          </div>
        </form>
      </div>
    </>
  )
}
