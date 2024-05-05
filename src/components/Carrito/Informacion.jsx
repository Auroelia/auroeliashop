import React, { useState } from 'react'

function Informacion() {

    const [cliente, setCliente] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    correo: "",
    });
    const [destinatario, setDestinatario] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    colonia: "",
    estado: "",
    delegacion: "",
    cp: "",
    dedicatoria: "",
    firma: "",
    notas: "",
    });

    const handleChangeCliente = (e) => {
    setCliente({
        ...cliente,
        [e.target.name]: e.target.value,
    });
    };
    const handleChangeDestinatario = (e) => {
    setDestinatario({
        ...destinatario,
        [e.target.name]: e.target.value,
    });
    };



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
        name="nombre"
        value={cliente.nombre}
        onChange={handleChangeCliente}

    />
    <input
      type="text"
      placeholder="Apellidos"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
        name="apellidos"
        value={cliente.apellidos}
        onChange={handleChangeCliente}

    />
    <input
      type="text"
      placeholder="Teléfono"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
        name="telefono"
        value={cliente.telefono}
        onChange={handleChangeCliente}
    />
    <input
      type="email"
      placeholder="Correo"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
        name="correo"
        value={cliente.correo}
        onChange={handleChangeCliente}
    />
    <span className=" text-[16px] font-inter font-bold col-span-2">
      Información del Destinatario
    </span>
    <input
      type="text"
      placeholder="Nombre"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
      name="nombre"
      value={destinatario.nombre}
      onChange={handleChangeDestinatario}

    />
    <input
      type="text"
      placeholder="Teléfono"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
        name="telefono"
        value={destinatario.telefono}
        onChange={handleChangeDestinatario}
    />
    <input
      type="text"
      placeholder="Dirección"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 col-span-2"
        name="direccion"
        value={destinatario.direccion}
        onChange={handleChangeDestinatario}
    />
    <input
      type="text"
      placeholder="Colonia"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
        name="colonia"
        value={destinatario.colonia}
        onChange={handleChangeDestinatario}
    />
    <input
      type="text"
      placeholder="Estado"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
        name="estado"
        value={destinatario.estado}
        onChange={handleChangeDestinatario}
    />
    <input
      type="text"
      placeholder="Delegación"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
        name="delegacion"
        value={destinatario.delegacion}
        onChange={handleChangeDestinatario}
    />
    <input
      type="text"
      placeholder="Código Postal"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
        name="cp"
        value={destinatario.cp}
        onChange={handleChangeDestinatario}
    />
    <span className=" text-[16px] font-inter font-bold col-span-2">
      Escribe tu Dedicatoría
    </span>
    <textarea
      placeholder="Dedicatoria"
      className="h-[164px] w-full border-[1px] border-[#E39C9D] col-span-2 pl-4 pt-4 mt-[10px]"
        name="dedicatoria"
        value={destinatario.dedicatoria}
        onChange={handleChangeDestinatario}
    />
    <input
      type="text"
      placeholder="Firma"
      className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 col-span-2"
        name="firma"
        value={destinatario.firma}
        onChange={handleChangeDestinatario}
    />
    <span className=" text-[16px] font-inter font-bold col-span-2 ">
      Notas de Envío
    </span>
    <textarea
      placeholder="Notas de envío"
      className="h-[164px] w-full border-[1px] border-[#E39C9D] col-span-2 pl-4 pt-4 mt-[10px]"
        name="notas"
        value={destinatario.notas}
        onChange={handleChangeDestinatario}
    />
    
  </div>
</div>
  )
}

export default Informacion