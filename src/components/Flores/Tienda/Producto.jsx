import React, { useState } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';

function Producto({ producto, addToCart }) {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    console.log('Image loaded');
    setImageLoaded(true);
  };

  const imageUrl = producto?.imagenes?.[0]?.asset?._ref ? urlForImage(producto.imagenes[0].asset._ref) : null;

  return (
    <div className="w-full md:w-[70%] lg:w-[229px] shadow-popular rounded-[30px] cursor-pointer">
      {producto ? (
        <>
              {!imageLoaded && <Skeleton height={200} />}
      {imageUrl ? (
        <Image
        height={173}
        width={263} 
          src={imageUrl}
          alt={producto.nombre}
          onLoadingComplete={handleImageLoad} // Usar onLoadingComplete en lugar de onLoad
          className={ `w-full h-[173px] lg:h-[263px] object-cover rounded-t-[30px]`}
          onClick={() => router.push(`/${producto.slug.current}`)}
        />
      ) : (
            <div className="w-full h-[175px] rounded-t-[30px] bg-gray-200 flex items-center justify-center">
              <span>Imagen no disponible</span>
            </div>
          )}
          <div className="h-[100px] flex flex-col justify-center px-[22px]">
            <span className="font-inter font-bold text-[12px] lg:text-[16px]">
              {producto.nombre}
            </span>
            <div className="flex justify-between items-center">
              <span className="font-inter font-bold text-[12px] lg:text-[16px]">
                ${producto?.tamanos?.[producto.tamanos.length - 1]?.precio}.00
              </span>
              {/* 
              <img
                src="/assets/icons/carrito.svg"
                alt="carrito de compras"
                className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:scale-125 transition-all duration-300"
                onClick={() => {
                  addToCart(producto, 1);
                  router.push("/Carrito");
                }}
              /> 
              */}
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-[173px] lg:h-[263px] rounded-t-[30px] bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}

export default Producto;
