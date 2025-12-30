import React from "react";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import { useRouter } from "next/router";

function Producto({ product }) {
  const router = useRouter();

  // Función segura para obtener URL de imagen
  const getImageUrl = () => {
    try {
      if (product?.imagenes && product.imagenes.length > 0) {
        return urlFor(product.imagenes[0]).width(322).height(175).url();
      }
      return null;
    } catch (error) {
      console.error('Error al obtener URL de imagen:', error);
      return null;
    }
  };

  const imageUrl = getImageUrl();
  const precio = product?.tamanos?.[0]?.precio || 0;

  const handleClick = () => {
    if (product?.slug?.current) {
      router.push(`/${product.slug.current}`);
    }
  };

  return (
    <div 
      className="w-[322px] h-[315px] flex flex-col relative shadow-popular rounded-[30px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-[322px] rounded-t-[30px]">
        {imageUrl ? (
          <Image
            width={322}
            height={175}
            src={imageUrl}
            alt={product?.nombre || 'Producto'}
            className="object-cover w-full h-[175px] rounded-t-[30px] cursor-pointer"
          />
        ) : (
          <div className="w-full h-[175px] bg-gray-200 rounded-t-[30px] flex items-center justify-center">
            <span className="text-gray-500 text-sm">Sin imagen</span>
          </div>
        )}
      </div>
      <div className="w-full absolute bottom-0 h-[140px] z-10 bg-white flex flex-row justify-center items-center rounded-b-[30px]">
        <div className="w-full flex flex-col px-[24px]">
          <span className="w-[180px] font-inter font-bold text-[24px] line-clamp-2">
            {product?.nombre || 'Sin nombre'}
          </span>
          <div className="w-full flex flex-row justify-between">
            <span className="text-[24px] font-inter font-light">
              ${precio > 0 ? precio.toLocaleString('es-MX', { minimumFractionDigits: 2 }) : '0.00'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
