import React, { useEffect, useState } from 'react';
import { database } from '../DataBase/Firebase';
import { onValue, ref as dbRef } from 'firebase/database';
import { Icon } from '@iconify/react';
import { UpdateProduct } from './UpdateProduct';
import { DeleteProducts } from './DeleteProducts';
import { PopupProduct } from './PopupProduct';
import { Link, useNavigate } from 'react-router-dom';
import { Buscador } from './Buscador';
import { Category } from './Category';
import { useCart } from '../context/CartContext';

export const ShowProducts = ({ VistaAdmin }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
  const [seleccionarProducto, setSeleccionarProducto] = useState({});
  const [popup, setPopup] = useState(false);
  const [editForm, setEdiTForm] = useState(false);
  const [datosProduct, setDatosProduct] = useState({});
  const [popupDelete, setDeletePopup] = useState(false);
  const { cartItems} = useCart();

  const handlePopup = (producto) => {
    setSeleccionarProducto(producto);
    setPopup(true);
  };

  const handleUpdate = (infoProducto) => {
    setDatosProduct(infoProducto);
    setEdiTForm(true);
  };

  const handleDelete = (producto) => {
    setSeleccionarProducto(producto);
    setDeletePopup(true);
  };

  useEffect(() => {
    const productsRef = dbRef(database, "Products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setProducts(productsArray);
      }
    });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <>
      <div className='flex items-center justify-center w-screen gap-4 px-2'>
        <div className='w-[80%]'>
          <Buscador buscar={searchTerm} actualizador={setSearchTerm} />
        </div>
        <div className='relative p-1 border-dashed border-[0.133553rem] border-gray-400'>
          {/* te permite navegar a la pantalla de carrito de compras */}
          { cartItems.length > 0 && (
              <div className='absolute top-0 right-0 z-10'>
              <Icon className='text-red-600' icon="material-symbols:circle" />
              </div>
          )
          }
          <Link to='/ShoppingCart'>
            <Icon className='text-[2rem]' icon="bytesize:cart" />
          </Link>
        </div>
      </div>
      {
        popup && (
          <PopupProduct infoProduct={seleccionarProducto} cerrarPopup={setPopup} />
        )
      }
      {
        editForm && (
          <UpdateProduct ProductEdit={datosProduct} cerrarPopup={setEdiTForm} />
        )
      }
      {
        popupDelete && (
          <DeleteProducts cerrarPopup={setDeletePopup} Producto={seleccionarProducto} />
        )
      }

      <div>
        <Category selectCategory={setSelectedCategory} />
      </div>

      <div className='flex flex-wrap gap-4 pl-2 mt-4 mb-5'>
        {
          filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className='flex flex-col bg-[#FFFFFF]  rounded-lg shadow-[#808080c4] shadow-[3px_3px_3px_3px] '>
                <div className='w-40 h-32 '>
                  <img className='w-full h-full rounded-t-lg' src={product.productImage} alt="" />
                </div>
                <div className='w-40 pl-2'>
                  <h2 className='font-bold text-[15px] text-[#333333]'> {product.productName}</h2>
                  <h2 className='font-bold text-[14px] text-[#4CAD73]'> Rp {product.productPrice} <span className='text-[#828282] text-[12px] font-normal'> / {product.productCantidad} kg</span></h2>
                </div>
                {/* abre el popup del producto */}
                <div className=' text-[#4CAD73] font-semibold text-[2rem] flex justify-between p-2'>
                  <div>
                    {VistaAdmin === 'nEJJfgfXPrPYSX3ift1deyMsjgQ2' && (
                      <button onClick={() => { handleUpdate(product) }} className='text-[1.5rem] font-bold p-3'>
                        <Icon icon="lucide:edit" />
                      </button>
                    )
                    }
                  </div>
                  <div>
                    {
                      VistaAdmin === 'nEJJfgfXPrPYSX3ift1deyMsjgQ2' && (
                        <button onClick={() => { handleDelete(product) }} className='text-[1.5rem] font-bold p-3'>
                          <Icon icon="material-symbols:delete" />
                        </button>
                      )
                    }
                  </div>
                  <Icon onClick={() => handlePopup(product)} icon="streamline:add-square" />
                </div>
              </div>
            ))
          ) : (
            <p>no se encontraron productos</p>
          )
        }
      </div>
    </>
  );
};
