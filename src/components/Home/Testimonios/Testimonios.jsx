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
    <div className="w-full h-full lg:h-[650px] overflow-hidden relative my-[27px] lg:my-[0px]">
      <div className="w-full max-w-[1440px] min-w-sm mx-auto flex flex-col items-center justify-center lg:leading-[70px] ">
        <span className="text-[#E39C9D] font-inter font-bold text-[18px] lg:text-[32px]">
          Nuestros Clientes
        </span>
        <h2 className="text-[42px]  lg:text-[83px]">Testimonios</h2>
      </div>
      <div className="w-full flex flex-row justify-center lg:justify-between xl:justify-center lg:px-[50px] xl:px-[0px]">
        <img
          src="/assets/Home/testimonios/testimonio.png"
          alt="testimonio-bg"
          className=" w-[202px] h-[156px] lg:w-[450px]  lg:h-[350px] xl:w-[577px]  xl:h-[481px] "
        />
        <div className=" flex flex-col items-center justify-center gap-[30px]">
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col justify-end">
              <img src="/assets/Home/testimonios/comillas.png" alt="persona" className="w-[40px] h-[40px] lg:w-[100px] lg:h-[80px] xl:w-[120px] xl:h-[100px]" />
              </div>
              <div className="flex flex-row justify-end">

            <div className="flex flex-col  text-end">
              <span className="text-[12px] lg:text-[25px] xl:text-[31px] font-bold font-inter">
                {testimonios[seleccion].nombre}
              </span>
              <span className="text-[12px] lg:text-[18px] xl:text-[20px] font-light font-inter">
                {testimonios[seleccion].ciudad}
              </span>
            </div>
            <div>
            <img
              src="/assets/Home/testimonios/usuario.svg"
              alt="estrella"
              className="w-[35px] h-[35px] lg:w-[80px] lg:h-[80px] xl:w-[117px] xl:h-[117px] ml-[10px]"
              />
              </div>
              </div>
          </div>
          <div>
            <p className="text-end text-[12px] lg:text-[20px] xl:text-[24px] leading-[17px] lg:leading-[25px] xl:leading-[35px] w-[209px] lg:w-[400px] xl:w-[556px]">
            {testimonios[seleccion].testimonio}
            </p>
          </div>
          <div className=" w-full flex flex-row items-center justify-end gap-[8px] lg:gap-[18px] xl:gap-[21px]">
            <div className="rounded-full bg-[#d8d8d8] w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] xl:w-[76px] xl:h-[76px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (seleccion === 0) {
                setSeleccion(2);
              } else {
                setSeleccion(seleccion - 1);
              }
            }
            }
            >
              <img
                src="/assets/icons/izq.svg"
                alt="arrow"
                className="w-[9px] h-[15px] lg:w-[20px] lg:h-[35px] xl:w-[25px] xl:h-[40px]"
              />
            </div>
            <div className="rounded-full bg-black w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] xl:w-[76px] xl:h-[76px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (seleccion === 2) {
                setSeleccion(0);
              } else {
                setSeleccion(seleccion + 1);
              }

            }
            }
            >
              <img
                src="/assets/icons/der.svg"
                alt="arrow"
                className="w-[9px]  h-[15px] lg:w-[20px] lg:h-[35px] xl:w-[25px] xl:h-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
