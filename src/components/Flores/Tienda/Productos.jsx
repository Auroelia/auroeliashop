import React, { useContext, useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { AppContext } from "@/context/AppContext";
import Producto from "./Producto";

function Productos({ checklist, checklistArreglos }) {
  const [productos, setProductos] = useState([]);
  const [flores, setFlores] = useState([]);
  const [arreglos, setArreglos] = useState([]);
  const { addToCart } = useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Cambia esto al número de elementos que quieres por página
  const [totalItems, setTotalItems] = useState(0);

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

  return (
    <div className="w-full h-full flex flex-col mb-[80px]">
      <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-x-[22px] gap-y-[22px] lg:gap-y-[61px] px-[30px] lg:px-[0px] place-items-center mt-4 lg:mt-0">
        {productos.map((producto) => (
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