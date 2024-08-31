import { AppContext } from "@/context/AppContext";
import React, { use, useContext, useEffect, useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";

function Productos({ item }) {
  const { cart, updateCartItem, removeFromCart } = useContext(AppContext);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    if (item) {
      console.log(item)
      setCounter(item.qty? item.qty : 1);
    }
  }, []);

  useEffect(() => {
    updateCartItem(item.product._id, item.size, counter);
  }, [counter]);

  console.log(item);
  console.log(item.size);

  return (
    <div className="w-full h-full flex flex-row justify-between  gap-[31px]">

      <div className="w-[84px] h-[107px] md:w-[150px] md:h-[170px] flex flex-col items-center justify-center">
        <Image
        width={84}
        height={107}
          src={urlForImage(item?.product.imagenes[0]?.asset._ref)}
          className="w-[84px] h-[107px] md:w-[150px] md:h-[170px] object-cover rounded-[10px]"
          alt="imagen producto"
        />
      </div>

      <div className=" w-[110px]  flex flex-col  justify-center">
        <span className="font-inter font-bold text-[11px] md:text-[14px] lg:text-[16px] ">
          {item.product.nombre}
        </span>
        <p className=" text-[10px]  md:text-[14px] font-medium  leading-[14px] ">
          {item.product.descripcion.slice(0, 40)}...
        </p>
        <div>
        <div
                  
                  className={` w-1/2 bg-[#E39C9D] flex justify-center rounded-lg my-2 `}
                  
                  >
                    <p className="text-[14px]">

                   {item?.size?.tamano} 
                    </p>
                  </div>
        </div>

        <div className="flex flex-row lg:hidden items-center md:justify-center gap-[23px]">
          <button
            className="w-[25px] h-[25px] rounded-[7px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[15px] flex flex-col items-center justify-center "
            onClick={() => {
              if (counter - 1 > 0) {
                setCounter(counter - 1);
              }
            }}
          >
            -
          </button>
          <span className="font-inter text-[20px] ">{counter}</span>
          <button
            className="w-[25px] h-[25px] rounded-[7px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[15px] flex flex-col items-center justify-center"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-center gap-[23px]">
        <button
          className="w-[25px] h-[25px] rounded-[7px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[15px] flex flex-col items-center justify-center "
          onClick={() => {
            if (counter - 1 > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>
        <span className="font-inter text-[20px] ">{counter}</span>
        <button
          className="w-[25px] h-[25px] rounded-[7px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[15px] flex flex-col items-center justify-center"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <Image 
        width={16}	
        height={19}
          src="/assets/icons/trash.svg"
          alt="eliminar"
          className="cursor-pointer w-[16px] h-[19px]"
          onClick={() => removeFromCart(item.product._id)}
        />
      </div>
      <div className=" flex flex-col items-center justify-center">
        <span className="font-inter font-bold text-[12px] md:text-[16px] ">
          
          {item?.product?.tipo === "complemento" ?
          <span>$ {item?.product?.precio}.00</span>
          :
         <span> $ {item?.size?.precio}.00</span>
          }
        </span>
      </div>
    </div>
  );
}

export default Productos;
