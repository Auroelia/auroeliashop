import React, { useEffect, useState } from 'react';
import {client} from '../../../../sanity/lib/client'
import { urlForImage } from '../../../../sanity/lib/image';



function Productos() {
  const [productos, setProductos] = useState([]);
  console.log(productos)

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch('*[_type == "producto"]')
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='w-full h-full grid grid-cols-3 gap-x-[22px] gap-y-[61px] place-items-center'>
      {productos.map((producto) => (
        <div key={producto._id} className='w-[229px] shadow-popular rounded-[30px]'>
          <img src={urlForImage(producto?.imagenes[0]?.asset._ref)} alt={producto.nombre}
          className='w-full h-[263px] object-cover rounded-t-[30px]'
          />
          <div className='h-[100px]  flex flex-col  justify-center px-[22px]'>
            <span className='font-inter font-bold text-[16px]'>
          {producto.nombre}
            </span>
            <div className='flex justify-between items-center '>
              <span className='font-inter font-bold text-[16px]'>
                ${producto.precio}.00
                </span>
               

                <img src="/assets/icons/carrito.svg" alt="carrito de compras" className='w-[30px] h-[30px]' />
             

              </div>
          </div>
          </div>
      ))}
    </div>
  );
}

export default Productos;