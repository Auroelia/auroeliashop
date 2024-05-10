import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

function Producto({ product }) {
  const {addToCart} = useContext(AppContext);

  return (
    <div className="w-[322px] h-[315px] flex flex-col relative shadow-popular  ">
      <div className="w-[322px] ">
        <img
          src="/assets/Home/populares/arreglo.jpg"
          alt="ramo1"
          className="  object-fit "
        />
      </div>
      <div className="w-full absolute bottom-0 h-[140px] z-10 bg-white  flex flex-row justify-center items-center ">
        <div className="w-full flex flex-col px-[24px]">
          <span className="w-[180px] font-inter font-bold text-[24px]">
            {product.nombre}
          </span>
          <div className="w-full flex flex-row justify-between">
          <span className="text-[24px] font-inter font-light">
            ${product.precio}
          </span>
          <img
                      src="/assets/icons/carrito.svg"
                      alt="carrito de compras"
                      className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:scale-125 transition-all duration-300"
                      onClick={() => {
                        addToCart(product, 1)
                        router.push("/Carrito")}
                      }
                    /> 
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Producto;
