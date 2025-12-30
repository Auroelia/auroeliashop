import React, { useState } from 'react';
import { urlFor } from '@/lib/client';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Producto({ producto, addToCart }) {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Verificar que el producto existe y tiene datos válidos
  if (!producto) {
    return (
      <div className="w-full md:w-[70%] lg:w-[229px] shadow-popular rounded-[30px]">
        <div className="w-full h-[173px] lg:h-[263px] rounded-t-[30px] bg-gray-200 animate-pulse" />
        <div className="h-[100px] flex flex-col justify-center px-[22px]">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
        </div>
      </div>
    );
  }

  // Obtener la URL de la imagen de manera segura
  const getImageUrl = () => {
    try {
      if (producto.imagenes && producto.imagenes.length > 0) {
        const imagen = producto.imagenes[0];
        // urlFor puede recibir el objeto de imagen completo o la referencia
        return urlFor(imagen).width(500).height(500).url();
      }
      return null;
    } catch (error) {
      console.error('Error al obtener URL de imagen:', error);
      return null;
    }
  };

  // Obtener el precio de manera segura
  const getPrecio = () => {
    if (producto.tamanos && producto.tamanos.length > 0) {
      const primerPrecioValido = producto.tamanos.find(t => t?.precio && t.precio > 0);
      return primerPrecioValido?.precio || 0;
    }
    return 0;
  };

  const imageUrl = getImageUrl();
  const precio = getPrecio();

  const handleClick = () => {
    if (producto.slug?.current) {
      router.push(`/${producto.slug.current}`);
    }
  };

  return (
    <div 
      className="w-full md:w-[70%] lg:w-[229px] shadow-popular rounded-[30px] cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="relative w-full h-[173px] lg:h-[263px] rounded-t-[30px] overflow-hidden bg-gray-100">
        {imageUrl && !imageError ? (
          <>
            {/* Skeleton mientras carga */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-[30px]" />
            )}
            <Image
              src={imageUrl}
              alt={producto.nombre || 'Producto'}
              fill
              sizes="(max-width: 768px) 50vw, 229px"
              className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 text-sm">Imagen no disponible</span>
          </div>
        )}
      </div>
      <div className="h-[100px] flex flex-col justify-center px-[22px]">
        <span className="font-inter font-bold text-[12px] lg:text-[16px] line-clamp-2">
          {producto.nombre || 'Sin nombre'}
        </span>
        <div className="flex justify-between items-center mt-1">
          <span className="font-inter font-bold text-[12px] lg:text-[16px]">
            ${precio > 0 ? precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Producto;
