import React from "react";

function Nuestros() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="w-full h-[850px] flex flex-col items-center justify-center">
        <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
          ¿Qué te gustaría regalar(te)?
        </span>
        <h2 className="text-[83px]">Nuestros Productos</h2>
        <div className="w-full flex flex-col items-center justify-center gap-[34px]">
          <div className="w-full flex flex-row gap-[37px] justify-center">
            <div className="w-[559px] h-[282px] relative cursor-pointer">
              <img
                src="/assets/categorias/jabon.png"
                alt="ramo1"
                className=" w-full h-full flex flex-col  "
              />
              <div
                className="absolute 
                    top-1/3 left-[35px] flex flex-col text-white  text-[31px] font-inter font-bold leading-[38px] z-10 uppercase "
              >
                <span>Flores de</span>
                <span>Jabon</span>
              </div>
            </div>
            <div className="w-[456px] h-[282px] relative cursor-pointer">
              <img
                src="/assets/categorias/ositos.png"
                alt="ramo1"
                className=" w-full h-full flex flex-col   "
              />
              <div
                className="absolute 
                    top-1/3 left-[35px] flex flex-col text-white  text-[31px] font-inter font-bold leading-[38px] z-10 uppercase "
              >
                <span>Ositos</span>
                <span>Fancy</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-[37px] justify-center">
            <div className="w-[456px] h-[282px] relative cursor-pointer">
              <img
                src="/assets/categorias/bouquets.png"
                alt="ramo1"
                className="w-[456px] h-[282px] flex flex-col   "
              />
              <div
                className="absolute 
                    top-1/3 left-[35px] flex flex-col text-white  text-[31px] font-inter font-bold leading-[38px] z-10 uppercase "
              >
                <span>Luxury</span>
                <span>Bouquets</span>
              </div>
            </div>

            <div className="w-[559px] h-[282px] relative cursor-pointer">
              <img
                src="/assets/categorias/ramos.png"
                alt="ramo1"
                className="w-full h-full flex flex-col  "
              />
              <div
                className="absolute 
                    top-1/3 right-[50px] flex flex-col text-white  text-[31px] font-inter font-bold leading-[38px] z-10 uppercase "
              >
                <span>Ramos de</span>
                <span>Novia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nuestros;
