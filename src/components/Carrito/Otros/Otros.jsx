import React, { useContext } from "react";
import Producto from "./Producto";
import { AppContext } from "@/context/AppContext";

function Populares() {


    const productos = [
        {
            id: 1,
            name: "Arreglo Fiora",
            price: 40,
            description:
                "¡Haz que tus emociones florezcan con nuestros Ositos Fancy! Cada uno de estos adorables ositos está hecho a mano con aproximadamente 500 hermosas rosas de goma EVA. Son el regalo perfecto para cualquier ocasión especial, infundiendo encanto y elegancia con su diseño artesanal.",
        },
        {
            id: 2,
            name: "Arreglo Moly",
            price: 35,
            description:
                "El clásico arreglo floral de rosas blancas simboliza la pureza, la inocencia y la elegancia. Es perfecto para expresar sentimientos de amor puro, admiración y respeto. Nuestro arreglo de rosas blancas está cuidadosamente diseñado con rosas frescas y de alta calidad para transmitir emociones sinceras.",
        },
        {
            id: 3,
            name: "Arreglo Maya",
            price: 30,
            description:
                "Los tulipanes son flores vibrantes y alegres que representan la belleza y la alegría. Nuestro arreglo de tulipanes coloridos es una explosión de colores vivos que iluminará cualquier espacio. Es el regalo perfecto para transmitir felicidad y celebrar momentos especiales.",
        },
        {
            id: 4,
            name: "Arreglo Jinx",
            price: 25,
            description:
                "Los girasoles son flores que simbolizan la felicidad, la vitalidad y la energía positiva. Nuestro arreglo de girasoles radiantes es una forma maravillosa de transmitir alegría y optimismo. Cada girasol fue seleccionado cuidadosamente para asegurar su frescura y belleza duradera.",
        },
        {
            id: 5,
            name: "Arreglo Miles",
            price: 45,
            description:
                "Las orquídeas son flores exóticas y elegantes que representan la belleza, la sofisticación y el lujo. Nuestro arreglo de orquídeas combina la delicadeza de las orquídeas con un diseño moderno y elegante. Es el regalo perfecto para impresionar y sorprender a alguien especial.",
        },
    ];

  return (
    <div className="hidden xl:block w-full h-full overflow-hidden relative">
      <div className="w-full h-[650px] flex flex-col justify-center max-w-[1440px] min-w-sm mx-auto">
        <div className="w-full   flex flex-row justify-between xl:px-[120px] 2xl:px-[198px]">
          <div className="w-full flex flex-col">
            <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
              Otros Productos
            </span>
            <h2 className="text-[65px] ">Complementa tu pedido</h2>
          </div>
          <div className=" w-1/4 flex flex-row items-center justify-end gap-[21px]">
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
        <div className="w-full flex flex-row justify-between xl:px-[120px] 2xl:px-[198px] ">

        {
           productos.slice(0,3).map((product, index) => (
            <Producto
            key={index}
            product = {product}
            />
           ))
            }
            </div>
      </div>
    </div>
  );
}

export default Populares;
