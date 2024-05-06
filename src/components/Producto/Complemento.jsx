import React, { useState } from 'react'
import { urlForImage } from '../../../sanity/lib/image';



function Complemento(
  {complemento, complementosActivos, setComplementosActivos}
) {

  const [active, setActive] = useState(false)

  return (
    <div
      key={complemento._id}
      className="w-full h-full flex flex-col items-center cursor-pointer"
    >
      <img
        className="w-[112px] h-[95px] lg:w-[142px] lg:h-[120px] rounded-[6px] object-cover"
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
        className={`w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D] ${
          complementosActivos.find((item) => item._id === complemento._id) && "bg-[#E39C9D]"}
           mt-[29px]`}
        onClick={() => {
          if(!complementosActivos.find((item) => item._id === complemento._id)){

            setComplementosActivos((prev) => [...prev, complemento]);
          }
          else{
            setComplementosActivos((prev) => prev.filter((item) => item._id !== complemento._id));
          }
        }}
      />
    </div>
  );
}

export default Complemento