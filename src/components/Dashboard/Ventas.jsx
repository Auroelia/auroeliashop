import { client } from '@/lib/client';
import React, { useContext, useEffect, useState } from 'react'
import { useStateLink } from 'sanity/router';
import Venta from './Ventas/Venta';
import { AppContext } from '@/context/AppContext';

function Ventas() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const [ventas, setVentas] = useState([])
  const [totalItems, setTotalItems] = useState(0);

  const {deleteVenta} = useContext(AppContext);
  
  
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

  const handleDeleteVenta = async (ref) => {
    try {
      await deleteVenta(ref);
      setVentas(ventas.filter(venta => venta._id !== ref)); // Actualiza el estado para reflejar la venta eliminada

    } catch (error) {
      console.error("Error al eliminar la venta:", error);
    }
  };


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
    <div className='w-full h-full flex flex-col justify-center overflow-y-auto pb-[100px]'>
       <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[10px] gap-y-[20px] place-items-center lg:mt-[300px]'>
        {
          ventas.map((venta,index) => (
            venta.productos.map((productoVenta, index) => (

          <Venta
          key={index}
          venta={venta}	
          productoVenta = {productoVenta}
          handleDeleteVenta={handleDeleteVenta}
          />
          ))
        ))
        }
      </div> 
        <div className=" w-[90%] flex flex-row items-center justify-end gap-[21px] mt-[56px] ">
          <button onClick={prevPage}  
          className={
            currentPage > 1?
            `rounded-full bg-[#d8d8d8] w-[76px] h-[76px] flex items-center justify-center` :"hidden"}>
            <img
              src="/assets/icons/izq.svg"
              alt="arrow"
              className={"w-[25px] h-[40px]"}
            />
          </button>
          <button onClick={nextPage}  className={currentPage < Math.ceil(totalItems / itemsPerPage) ? "rounded-full bg-black w-[76px] h-[76px] flex items-center justify-center":"hidden"}>
            <img
              src="/assets/icons/der.svg"
              alt="arrow"
              className={ "w-[25px] h-[40px] "}
            />
          </button>
        </div>

    </div>
  )
}

export default Ventas