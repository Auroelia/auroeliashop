import React from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";

function Producto({ product }) {
  return (
    <div className="w-[322px] h-[315px] flex flex-col relative shadow-popular rounded-[30px] cursor-pointer "
    onClick={() => router.push(`${product.slug.current}`)}
    >
      <div className="w-[322px] rounded-t-[30px] ">
        <Image
          width={322}
          height={175}
          src={urlForImage(product.imagenes[0].asset._ref)}
          alt="ramo1"
          className="  object-cover w-full h-[175px] rounded-t-[30px] cursor-pointer"
        />
      </div>
      <div className="w-full absolute bottom-0 h-[140px] z-10 bg-white  flex flex-row justify-center items-center rounded-b-[30px] ">
        <div className="w-full flex flex-col px-[24px]">
          <span className="w-[180px] font-inter font-bold text-[24px]">
            {product.nombre}
          </span>
          <div className="w-full flex flex-row justify-between">
          <span className="text-[24px] font-inter font-light">
          ${product?.tamanos?.[product.tamanos.length - 1]?.precio}.00  
          </span>
          {/* <img
                      src="/assets/icons/carrito.svg"
                      alt="carrito de compras"
                      className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:scale-125 transition-all duration-300"
                      onClick={() => {
                        addToCart(product, 1)
                        router.push("/Carrito")}
                      }
                    />  */}
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Producto;
