import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function DatosModal({ isOpen, close, venta }) {

  if (!isOpen) return null;

  const handleChangeCliente = (e) => {
    venta.cliente[e.target.name] = e.target.value;
  };
  const handleChangeDestinatario = (e) => {
    venta.destinatario[e.target.name] = e.target.value;
  };

  const handleGuardar = async () => {
    try {
      // Actualizar la venta en la base de datos
      await updateVenta(venta._id, venta);
      // Cerrar el modal después de guardar los cambios
      close();
    } catch (error) {
      console.error("Error al guardar la venta:", error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <div
        className="bg-white w-[1053px] h-[576px] rounded-[54px] flex flex-col items-center justify-center relative mx-8 overflow-y-auto no-scrollbar "
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="/assets/Carrito/cerrar.svg"
          alt="close"
          className="absolute top-2 right-4 m-[20px] cursor-pointer w-[24px] md:w-[35px] "
          onClick={close}
        />

        <div className="w-full h-full py-8  flex flex-col items-center ">
          <div className="w-[90%]   grid grid-cols-2 gap-[10px]">
            <span className=" text-[16px] font-inter font-bold col-span-2">
              Información del Comprador
            </span>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 "
              name="nombre"
              value={venta.cliente.nombre}
              onChange={handleChangeCliente}
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="apellidos"
              value={venta.cliente.apellidos}
              onChange={handleChangeCliente}
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="telefono"
              value={venta.cliente.telefono}
              onChange={handleChangeCliente}
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="correo"
              value={venta.cliente.correo}
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
              value={venta.destinatario.nombre}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="telefono"
              value={venta.destinatario.telefono}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Dirección"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 col-span-2"
              name="direccion"
              value={venta.destinatario.direccion}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Colonia"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="colonia"
              value={venta.destinatario.colonia}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Estado"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="estado"
              value={venta.destinatario.estado}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Delegación"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="delegacion"
              value={venta.destinatario.delegacion}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Código Postal"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="cp"
              value={venta.destinatario.cp}
              onChange={handleChangeDestinatario}
            />

            <span className=" text-[16px] font-inter font-bold col-span-2 ">
              Notas de Envío
            </span>
            <textarea
              placeholder="Notas de envío"
              className="h-[164px] w-full border-[1px] border-[#E39C9D] col-span-2 pl-4 pt-4 mt-[10px]"
              name="notas"
              value={venta.destinatario.notas}
              onChange={handleChangeDestinatario}
            />
            <div className="w-full flex justify-end col-span-2 gap-[10px] mb-8">
                <button className="bg-[#E39C9D] px-4 py-2 rounded-[10px]"
                onClick={handleGuardar}
                >
                    Guardar 
                </button>
                <button className="border-[2px] border-[#E39C9D] px-4 py-2 rounded-[10px]"
                onClick={close}
                >
                    Cancelar
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatosModal;
