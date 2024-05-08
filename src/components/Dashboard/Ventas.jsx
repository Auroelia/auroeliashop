import { client } from '@/lib/client';
import React, { useEffect, useState } from 'react'
import { useStateLink } from 'sanity/router';
import Venta from './Ventas/Venta';

function Ventas() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const [ventas, setVentas] = useState([])
  const [totalItems, setTotalItems] = useState(0);
  
  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch(`*[_type == "pedido"] | order(_createdAt desc)`)
      .then((data) => {
        setTotalItems(data.length);
        setVentas(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

const openModal = () => setModalOpen(true);
const closeModal = () => setModalOpen(false);

  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <div className='w-full grid grid-cols-3 gap-x-[10px] gap-y-[50px] place-items-center'>
        {
          ventas.map((venta,index) => (
            venta.productos.map((productoVenta, index) => (

          <Venta
          key={index}
          venta={venta}	
          productoVenta = {productoVenta}
          />
          ))
        ))
        }
      </div>

    </div>
  )
}

export default Ventas