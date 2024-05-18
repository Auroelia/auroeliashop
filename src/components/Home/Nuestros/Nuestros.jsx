import Link from "next/link";
import React from "react";

function Nuestros() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="w-full lg:h-[850px] flex flex-col items-center justify-center mt-4">
        <span className="text-[#E39C9D] font-inter font-bold text-[18px] lg:text-[32px]">
          ¿Qué te gustaría regalar(te)?
        </span>
        <h2 className="text-[42px] lg:text-[83px]">Nuestros Productos</h2>
        <div className="w-[90%] xl:w-full flex flex-col items-center justify-center gap-[17px] lg:gap-[34px]">
          <div className="w-full flex flex-row gap-[14px] lg:gap-[37px] justify-center">
            <Link href="/Tienda" className="w-[60%] h-[103px] md:h-[223px] md:w-[443px] lg:w-[559px]  lg:h-[282px]">
            <div className="w-full h-full relative cursor-pointer">
              <img
                src="/assets/Home/categorias/jabon.png"
                alt="ramo1"
                className=" w-full h-full flex flex-col  "
              />
              <div
                className="absolute cursor-pointer
                    top-1/3 left-[10px] lg:left-[35px] flex flex-col text-white  text-[11px] md:text-[25px] lg:text-[31px] font-inter font-bold 
                    leading-[14px]
                    md:leading-[30px] lg:leading-[38px] z-10 uppercase "
              >
                <span>Flores de</span>
                <span>Jabon</span>
              </div>
            </div>
            </Link>
            <Link href="/Tienda" className="w-[40%] h-[103px] md:h-[223px] md:w-[361px] lg:w-[456px] lg:h-[282px]">
            <div className="w-full h-full relative cursor-pointer">
              <img
                src="/assets/Home/categorias/ositos.png"
                alt="ramo1"
                className=" w-full h-full flex flex-col   "
              />
              <div
                className="absolute cursor-pointer
                top-1/3 left-[10px] lg:left-[35px] flex flex-col text-white  text-[11px] md:text-[25px] lg:text-[31px] font-inter font-bold 
                leading-[14px]
                md:leading-[30px] lg:leading-[38px] z-10 uppercase "
              >
                <span>Ositos</span>
                <span>Fancy</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="w-full flex flex-row gap-[14px] lg:gap-[37px] justify-center">
            <Link href="/Tienda" className="w-[40%] h-[103px] md:h-[223px] md:w-[361px] lg:w-[456px] lg:h-[282px]">
            <div className="w-full h-full relative cursor-pointer">
              <img
                src="/assets/Home/categorias/bouquets.png"
                alt="ramo1"
                className="w-full h-full flex flex-col   "
              />
              <div
                className="absolute cursor-pointer
                top-1/3 left-[10px] lg:left-[35px] flex flex-col text-white  text-[11px] md:text-[25px] lg:text-[31px] font-inter font-bold 
                leading-[14px]
                md:leading-[30px] lg:leading-[38px] z-10 uppercase "
              >
                <span>Luxury</span>
                <span>Bouquets</span>
              </div>
            </div>
            </Link>
            <Link href="/Tienda" className="w-[60%] h-[103px] md:h-[223px] md:w-[443px] lg:w-[559px] lg:h-[282px]">
            <div className="w-full h-full relative cursor-pointer">
              <img
                src="/assets/Home/categorias/ramos.png"
                alt="ramo1"
                className="w-full h-full flex flex-col  "
              />
              <div
                className="absolute cursor-pointer
                    top-1/3 right-[20px] lg:right-[50px] flex flex-col text-white  text-[11px] md:text-[25px] lg:text-[31px] font-inter font-bold leading-[14px]
                    md:leading-[30px] lg:leading-[38px] z-10 uppercase "

                    
              >
                <span>Ramos de</span>
                <span>Novia</span>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nuestros;
