import React, { useContext, useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { AppContext } from "@/context/AppContext";
import Producto from "./Producto";
import FiltrosModal from "./FiltrosModal";

function Productos({ checklist, checklistArreglos, setChecklist, setChecklistArreglos}) {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Cambia esto al número de elementos que quieres por página
  const [totalItems, setTotalItems] = useState(0);

  const [filteredProductos, setFilteredProductos] = useState([]);

  useEffect(() => {
    if(checklist.length > 0 || checklistArreglos.length > 0) {
      const newFilteredProductos = productos.filter((producto) => {
        return (
          checklist.includes(producto.flor._ref) ||
          checklistArreglos.includes(producto.arreglo._ref)
        );
      });
      setFilteredProductos(newFilteredProductos);
    }
    else{
      setFilteredProductos(productos);
    }
  }, [checklist, checklistArreglos, productos]);

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch(`*[_type == "producto"] | order(_createdAt desc)`)
      .then((data) => {
        setTotalItems(data.length);
        setProductos(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
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
    <div className="w-full h-full flex flex-col mb-[80px]">

        <div className="w-full h-full flex flex-col mt-4 lg:mt-0 ">
          
          <div className="w-full flex justify-around">
            <div className="flex flex-col gap-[10px] ">
              <span className="text-[#E39C9D] font-inter font-bold text-[12px] lg:text-[16px]">Ordenar por:</span>
            <div className="flex items-center gap-[6px]">
              <select className="rounded-[3px] border-[1px] border-[#E39C9D] w-[121px] h-[23px] flex items-center justify-center">
                <option value="mas-vendidos">Más vendidos</option>
                <option value="precio-ascendente">Precio ascendente</option>
                <option value="precio-descendente">Precio descendente</option>
              </select>
                <span className="text-[12px] font-inter ">{productos.length} productos</span>
            </div>
            </div>
            <div className="flex flex-col justify-end">

            <div className="w-[79px] h-[23px] border-[1px] border-[#E39C9D] flex items-center justify-center gap-[15px]"
             onClick={openModal}
            >
              <span>Filtrar</span>
              <img src="/assets/icons/filtro.svg" alt="filtro" className="w-[15px] h-[12px] cursor-pointer" />	
            </div>
            {isModalOpen && (
     <FiltrosModal
     isOpen={isModalOpen} close={closeModal}
     checklist={checklist}
     setChecklist={setChecklist}
     checklistArreglos={checklistArreglos}
     setChecklistArreglos={setChecklistArreglos}

   />
    )}

            </div>
          </div>
          </div>

      <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-x-[22px] gap-y-[22px] lg:gap-y-[61px] px-[30px] lg:px-[0px] place-items-center mt-4 lg:mt-0">
        {filteredProductos.map((producto) => (
          <Producto
            key={producto._id}
            producto={producto}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div>
        <div className=" w-full flex flex-row items-center justify-end gap-[21px] mt-[56px]">
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
    </div>
  );
}

export default Productos;