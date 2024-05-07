import { client } from '@/lib/client';
import React, { useEffect, useState } from 'react'
import { useStateLink } from 'sanity/router';
import Venta from './Ventas/Venta';

function Ventas() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const [ventas, setVentas] = useState([])
  console.log(ventas)
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
    <div className='w-full h-full'>
      <div className='w-full grid grid-cols-3 place-items-center'>
        {
          ventas.map((venta,index) => (
          <Venta
          key={index}
          venta={venta}	
          />
          ))
        }
      </div>

    </div>
  )
}

export default Ventas