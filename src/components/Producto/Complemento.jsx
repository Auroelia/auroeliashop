import React, { useState } from 'react'
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';



function Complemento(
  {complemento, complementosActivos, setComplementosActivos}
) {

  const [active, setActive] = useState(false)

  return (
    <div
      key={complemento._id}
      className="w-full h-full flex flex-col items-center cursor-pointer"
    >
      <Image
      width={142}
      height={120}
        className="w-[112px] h-[95px] md:w-[142px] md:h-[120px] rounded-[6px] object-cover"
        src={urlForImage(complemento?.imagenes[0]?.asset._ref)}
        alt={complemento.nombre}
      />
      <span className="font-inter text-[16px]">
        {complemento.nombre}
      </span>
      <span className="font-inter text-[16px]">
        ${complemento.precio}.00
      </span>

      <div
        className={`w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D] mt-[29px] cursor-pointer relative`}
        onClick={() => {
          if(!complementosActivos.find((item) => item._id === complemento._id)){

            setComplementosActivos((prev) => [...prev, complemento]);
          }
          else{
            setComplementosActivos((prev) => prev.filter((item) => item._id !== complemento._id));
          }
        }}
      >
        {
          complementosActivos.find((item) => item._id === complemento._id) &&
          <div className='w-full h-full flex justify-center items-center'>
          <Image
          width={30}
          height={30}
          alt='check'
          className='absolute w-[70%] h-[70%] ' src='/assets/icons/check.svg' >

            </Image>
            </div>
        }
        </div>
      
    </div>
  );
}

export default Complemento