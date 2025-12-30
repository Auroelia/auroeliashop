import { AppContext } from "@/context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { urlFor } from "@/lib/client";
import Image from "next/image";

function Productos({ item }) {
  const { cart, updateCartItem, removeFromCart } = useContext(AppContext);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (item) {
      setCounter(item.qty ? item.qty : 1);
    }
  }, []);

  useEffect(() => {
    updateCartItem(item.product._id, item.size, counter);
  }, [counter]);

  // Función segura para obtener URL de imagen
  const getImageUrl = () => {
    try {
      if (item?.product?.imagenes && item.product.imagenes.length > 0) {
        return urlFor(item.product.imagenes[0]).width(150).height(170).url();
      }
      return null;
    } catch (error) {
      console.error('Error al obtener URL de imagen:', error);
      return null;
    }
  };

  const imageUrl = getImageUrl();

  return (
    <div className="w-full h-full flex flex-row justify-between gap-[14px] xl:gap-[31px]">
      <div className="w-[84px] h-[107px] md:w-[150px] md:h-[170px] flex flex-col items-center justify-center">
        {imageUrl ? (
          <Image
            width={150}
            height={170}
            src={imageUrl}
            className="w-[84px] h-[107px] md:w-[150px] md:h-[170px] object-cover rounded-[10px]"
            alt={item?.product?.nombre || "imagen producto"}
          />
        ) : (
          <div className="w-[84px] h-[107px] md:w-[150px] md:h-[170px] bg-gray-200 rounded-[10px] flex items-center justify-center">
            <span className="text-gray-500 text-xs">Sin imagen</span>
          </div>
        )}
      </div>

      <div className="w-[110px] flex flex-col justify-center">
        <span className="font-inter font-bold text-[11px] md:text-[14px] lg:text-[16px]">
          {item?.product?.nombre || 'Sin nombre'}
        </span>
        <p className="text-[10px] md:text-[14px] font-medium leading-[14px]">
          {item?.product?.descripcion?.slice(0, 40)}...
        </p>
        <div>
          <div className="w-1/2 bg-[#E39C9D] flex justify-center rounded-lg my-2">
            <p className="text-[14px]">
              {item?.size?.tamano}
            </p>
          </div>
        </div>

        <div className="flex flex-row lg:hidden items-center md:justify-center gap-[23px]">
          <button
            className="w-[25px] h-[25px] rounded-[7px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[15px] flex flex-col items-center justify-center"
            onClick={() => {
              if (counter - 1 > 0) {
                setCounter(counter - 1);
              }
            }}
          >
            -
          </button>
          <span className="font-inter text-[20px]">{counter}</span>
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
          className="w-[25px] h-[25px] rounded-[7px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[15px] flex flex-col items-center justify-center"
          onClick={() => {
            if (counter - 1 > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>
        <span className="font-inter text-[20px]">{counter}</span>
        <button
          className="w-[25px] h-[25px] rounded-[7px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[15px] flex flex-col items-center justify-center"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          width={16}
          height={19}
          src="/assets/icons/trash.svg"
          alt="eliminar"
          className="cursor-pointer w-[16px] h-[19px]"
          onClick={() => removeFromCart(item.product._id)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-inter font-bold text-[12px] md:text-[16px]">
          {item?.product?.tipo === "complemento" ? (
            <span>${item?.product?.precio?.toLocaleString('es-MX', { minimumFractionDigits: 2 }) || '0.00'}</span>
          ) : (
            <span>${item?.size?.precio?.toLocaleString('es-MX', { minimumFractionDigits: 2 }) || '0.00'}</span>
          )}
        </span>
      </div>
    </div>
  );
}

export default Productos;
