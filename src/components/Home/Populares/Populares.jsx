import React, { useEffect, useState } from "react";
import Producto from "./Producto";
import { client } from "@/lib/client";

function Populares() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch(`*[_type == "producto"] | order(inventario asc)[0...3]`)
      .then((data) => {
        console.log(data)
        setProductos(data);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="w-full h-full  relative">
      
      <img src='/assets/petaloizq.png' alt='flores' className='hidden xl:block w-[377px] h-[300px] object-cover absolute -bottom-[80px] -left-[0px]'/>
      <div className="w-full h-[650px] hidden xl:flex flex-col justify-center max-w-[1440px] min-w-sm mx-auto relative">
      <img src='/assets/Home/populares/petalo.png' alt='flores' className='w-[271px] h-[292px] object-cover absolute -top-[150px] -right-[100px]'/>
        <div className="w-full   flex flex-row justify-between  lg: px-[100px] 2xl:px-[198px]">
          <div className="w-full flex flex-col">
            <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
              Productos Populares
            </span>
            <h2 className="text-[83px] ">Lo + Vendido</h2>
          </div>
      {/*     <div className=" w-full flex flex-row items-center justify-end gap-[21px]">
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
        <div className="w-full flex flex-row justify-center lg:justify-between lg:px-[100px] 2xl:px-[198px] ">

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
