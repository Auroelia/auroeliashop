import React, { useContext, useEffect, useState } from "react";
import Producto from "./Producto";
import { AppContext } from "@/context/AppContext";
import { client } from "@/lib/client";

function Populares() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch(`*[_type == "producto"]`)
      .then((data) => {
        // Mezcla los datos para obtener un resultado aleatorio
        const shuffledData = data.sort(() => 0.5 - Math.random());
        // Obtiene los primeros 4 elementos de los datos mezclados
        const selectedData = shuffledData.slice(0, 4);
        setProductos(selectedData);
      })
      .catch((error) => console.error(error));
  }, []);

 

  return (
    <div className="hidden xl:block w-full h-full overflow-hidden relative">
      <div className="w-full h-[650px] flex flex-col justify-center max-w-[1440px] min-w-sm mx-auto">
        <div className="w-full   flex flex-row justify-between xl:px-[120px] 2xl:px-[198px]">
          <div className="w-full flex flex-col">
            <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
              Otros Productos
            </span>
            <h2 className="text-[65px] ">Complementa tu pedido</h2>
          </div>
         {/*  <div className=" w-1/4 flex flex-row items-center justify-end gap-[21px]">
            <div className="rounded-full bg-[#d8d8d8] w-[76px] h-[76px] flex items-center justify-center">
              <img
                src="/assets/icons/izq.svg"
                alt="arrow"
                className="w-[25px] h-[40px]"
              />
            </div>
            <div className="rounded-full bg-black w-[76px] h-[76px] flex items-center justify-center">
              <img
                src="/assets/icons/der.svg"
                alt="arrow"
                className="w-[25px] h-[40px]"
              />
            </div>
          </div> */}
        </div>
        <div className="w-full flex flex-row justify-between xl:px-[120px] 2xl:px-[198px] ">

        {
           productos.slice(0,3).map((product, index) => (
            <Producto
            key={index}
            product = {product}
            />
           ))
            }
            </div>
      </div>
    </div>
  );
}

export default Populares;
