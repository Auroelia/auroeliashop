import React, { useState } from 'react'
import { urlFor } from '@/lib/client';
import Image from 'next/image';

function Complemento({ complemento, complementosActivos, setComplementosActivos }) {
  const [active, setActive] = useState(false);

  // Función segura para obtener URL de imagen
  const getImageUrl = () => {
    try {
      if (complemento?.imagenes && complemento.imagenes.length > 0) {
        return urlFor(complemento.imagenes[0]).width(142).height(120).url();
      }
      return null;
    } catch (error) {
      console.error('Error al obtener URL de imagen:', error);
      return null;
    }
  };

  const imageUrl = getImageUrl();

  return (
    <div
      key={complemento._id}
      className="w-full h-full flex flex-col items-center cursor-pointer"
    >
      {imageUrl ? (
        <Image
          width={142}
          height={120}
          className="w-[112px] h-[95px] md:w-[142px] md:h-[120px] rounded-[6px] object-cover"
          src={imageUrl}
          alt={complemento?.nombre || 'Complemento'}
        />
      ) : (
        <div className="w-[112px] h-[95px] md:w-[142px] md:h-[120px] rounded-[6px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-xs">Sin imagen</span>
        </div>
      )}
      <span className="font-inter text-[16px]">
        {complemento?.nombre || 'Sin nombre'}
      </span>
      <span className="font-inter text-[16px]">
        ${complemento?.precio?.toLocaleString('es-MX', { minimumFractionDigits: 2 }) || '0.00'}
      </span>

      <div
        className={`w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D] mt-[29px] cursor-pointer relative`}
        onClick={() => {
          if (!complementosActivos.find((item) => item._id === complemento._id)) {
            setComplementosActivos((prev) => [...prev, complemento]);
          } else {
            setComplementosActivos((prev) => prev.filter((item) => item._id !== complemento._id));
          }
        }}
      >
        {complementosActivos.find((item) => item._id === complemento._id) && (
          <div className='w-full h-full flex justify-center items-center'>
            <Image
              width={30}
              height={30}
              alt='check'
              className='absolute w-[70%] h-[70%]'
              src='/assets/icons/check.svg'
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Complemento
