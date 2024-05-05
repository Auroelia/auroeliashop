import React from 'react'

function Informacion() {
  return (
    <div className="w-full flex flex-col items-center">
  <div className="w-full grid grid-cols-2 gap-[10px]">
    <span className=" text-[16px] font-inter font-bold col-span-2">
      Información del Comprador
    </span>
    <input
      type="text"
      placeholder="Nombre"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 "
    />
    <input
      type="text"
      placeholder="Apellidos"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <input
      type="text"
      placeholder="Teléfono"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <input
      type="email"
      placeholder="Correo"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <span className=" text-[16px] font-inter font-bold col-span-2">
      Información del Destinatario
    </span>
    <input
      type="text"
      placeholder="Nombre"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <input
      type="text"
      placeholder="Teléfono"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <input
      type="text"
      placeholder="Dirección"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 col-span-2"
    />
    <input
      type="text"
      placeholder="Colonia"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <input
      type="text"
      placeholder="Estado"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <input
      type="text"
      placeholder="Delegación"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <input
      type="text"
      placeholder="Código Postal"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
    />
    <span className=" text-[16px] font-inter font-bold col-span-2">
      Escribe tu Dedicatoría
    </span>
    <textarea
      placeholder="Dedicatoria"
      className="h-[164px] w-full border-[1px] border-[#E39C9D] col-span-2 pl-4 pt-4 mt-[10px]"
    />
    <input
      type="text"
      placeholder="Firma"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 col-span-2"
    />
    <span className=" text-[16px] font-inter font-bold col-span-2 ">
      Notas de Envío
    </span>
    <textarea
      placeholder="Notas de envío"
      className="h-[164px] w-full border-[1px] border-[#E39C9D] col-span-2 pl-4 pt-4 mt-[10px]"
    />
    
  </div>
</div>
  )
}

export default Informacion