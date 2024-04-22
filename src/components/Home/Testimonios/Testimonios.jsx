import React, { useState } from "react";

function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: "Luisa Perez",
      ciudad: "CDMX",
      testimonio:
        "Me encantó el ramo de flores que compré para mi madre, la calidad es excelente y el servicio fue muy rápido. Definitivamente volveré a comprar en Auroelia Shop.",
      image: "/assets/testimonios/persona1.png",
    },
    {
      id: 2,
      nombre: "María Rodriguez",
      ciudad: "CDMX",
      testimonio:
        "La calidad de los productos es inigualable, los ramos de flores son hermosos y duran mucho tiempo. Estoy muy satisfecha con mi compra.",
      image: "/assets/testimonios/persona2.png",
    },
    {
      id: 3,
      nombre: "Carlos González",
      ciudad: "CDMX",
      testimonio:
        "Los arreglos de flores son perfectos para cualquier ocasión, desde cumpleaños hasta aniversarios. Recomiendo Auroelia Shop a todos mis amigos.",
      image: "/assets/testimonios/persona3.png",
    },
  ];

  const [seleccion, setSeleccion] = useState(1);
  return (
    <div className="w-full h-[850px] overflow-hidden relative">
      <div className="w-full max-w-[1440px] min-w-sm mx-auto flex flex-col items-center justify-center leading-[70px] ">
        <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
          Nuestros Clientes
        </span>
        <h2 className="text-[83px]">Testimonios</h2>
      </div>
      <div className="w-full flex flex-row justify-center">
        <img
          src="/assets/testimonios/testimonio.png"
          alt="testimonio-bg"
          className="w-[577px]  h-[481px] "
        />
        <div className=" flex flex-col items-center justify-center gap-[30px]">
          <div className="w-full flex flex-row justify-end">
            <div className="flex flex-col text-end">
              <span className="text-[31px] font-bold font-inter">
                {testimonios[seleccion].nombre}
              </span>
              <span className="text-[20px] font-light font-inter">
                {testimonios[seleccion].ciudad}
              </span>
            </div>
            <img
              src="/assets/testimonios/usuario.svg"
              alt="estrella"
              className="w-[117px] h-[117px] ml-[10px]"
            />
          </div>
          <div>
            <p className="text-end text-[24px] leading-[35px] w-[556px]">
              Mi ramo de novia fue perfecto. Cada flor era como sacada de un
              cuento de hadas. ¡Gracias por hacer mi día aún más especial!
            </p>
          </div>
          <div className=" w-full flex flex-row items-center justify-end gap-[21px]">
            <div className="rounded-full bg-[#d8d8d8] w-[76px] h-[76px] flex items-center justify-center">
              <img
                src="/assets/icons/izq.svg"
                alt="arrow"
                className="w-[25px] h-[40px]"
              />
            </div>
            <div className="rounded-full bg-black w-[76px] h-[76px] flex items-center justify-center">
              <img
                src="/assets/icons/der.svg"
                alt="arrow"
                className="w-[25px] h-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
