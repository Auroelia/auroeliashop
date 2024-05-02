import React, { useState } from "react";

function Hero() {
  const heroProducts = [ 
    {
      id: 1,
      name: "Ositos Fancy",
      price: 100,
      description:
        "¡Haz que tus emociones florezcan con nuestros Ositos Fancy! Cada uno de estos adorables ositos está hecho a mano con aproximadamente 500 hermosas rosas de goma EVA. Son el regalo perfecto para cualquier ocasión especial, infundiendo encanto y elegancia con su diseño artesanal.",
      image: "/assets/Home/hero/osofancy.png",
      elipse: "/assets/Home/hero/osoelipse.svg",
    },
    {
      id: 2,
      name: "Flores de jabón",
      price: 100,
      description:
        "¡Descubre la elegancia perdurable de nuestros arreglos florales artesanales con jabón! Cada composición es una fusión de belleza natural y funcionalidad, elaborada a mano con cuidado y detalle. Sorprende con un regalo que perdura en el tiempo y deleita los sentidos.",
      image: "/assets/Home/hero/arreglo.png",
      elipse: "/assets/Home/hero/arregloelipse.svg",
    },
    {
      id: 3,
      name: "Ramos de novia",
      price: 100,
      description:
        "Deja que tu amor florezca con un toque de elegancia en tu día especial. Cada ramo es una obra maestra única, que fusiona la belleza natural de las flores con la practicidad del jabón, ofreciendo una alternativa encantadora y duradera a los ramos tradicionales.",
      image: "/assets/Home/hero/ramo.png",
      elipse: "/assets/Home/hero/ramoelipse.svg",
    },
  ];

  const [seleccion, setSeleccion] = useState(0);

  return (
    <div className="w-full h-full overflow-hidden relative">
      
        <img src="/assets/Home/hero/lirio.png" alt="hero" className="
        hidden lg:block
        w-[728px] h-[722px] absolute lg:-left-[150px] lg:-bottom-[100px] opacity-30 -z-10" />

        <img src={heroProducts[seleccion+1].image} alt="hero" className="w-[264px] h-[264px] lg:w-[326px] lg:h-[326px] absolute -right-[150px] top-[15%] lg:-top-[30px] blur-sm -z-10" />
        <img src={heroProducts[seleccion+2].image} alt="hero" className="w-[264px] h-[264px] lg:w-[326px] lg:h-[326px] absolute -left-[150px] top-[15%] lg:-right-[150px] lg:bottom-[40px] blur-sm -z-10" />
      
      <div className="w-full h-scren lg:h-[750px] flex flex-col max-w-[1440px] min-w-sm mx-auto">
        <div className="w-full  flex flex-col-reverse lg:flex-row justify-center items-center ">
          <div className=" flex flex-col">
            <h1 className="text-[50px] lg:text-[70px] font-bloverly">
              {heroProducts[seleccion].name}
            </h1>
            <p className="mt-[12px] w-[293px] lg:w-[583px] text-[12px] lg:text-[16px] lg:font-semibold text-center lg:text-left font-shipporiMincho ">
              {heroProducts[seleccion].description}
            </p>
            <div className="w-[200px] hidden lg:flex flex-row items-center justify-start  gap-[33px] mt-[40px]">
              {heroProducts.map((product, index) => (
                <div key={index} className="w-full h-full flex flex-col  gap-[12px]">
                  <div className="rounded-full w-[60px] h-[60px] cursor-pointer ">
                    <img
                      src={product.elipse}
                      key={product.id}
                      onClick={() => setSeleccion(index)}
                      className="object-cover "
                    ></img>
                    <div className={seleccion == index && `w-[60px] h-[3px] bg-black rounded-[4px] mt-[12px]`}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[7px]  lg:mt-[59px] flex flex-row justify-center lg:justify-start">
              <button className="w-[188px] h-[60px] bg-[#e39c9d] text-[24px] font-bold rounded-[6px] ">
                Ver Tienda
              </button>
            </div>
          </div>
          <div className="w-[526px] h-[526px] ">
            <img
              src="/assets/Home/hero/osofancy.png"
              alt="osofancy"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className=" w-[90%] lg:w-[853px] h-[73px] lg:h-[113px] bg-black rounded-[13px] lg:rounded-[30px] mx-auto flex flex-row justify-center items-center gap-[19px] lg:gap-[32px] my-[20px] lg:my-[0px]">
          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <div>
              <img
                src="/assets/Home/hero/info/envio.svg"
                alt="entrega"
                className="w-[25px] h-[19px] lg:w-[61px] lg:h-[41px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left">
              <h4 className="text-white font-bold text-[7px] lg:text-[12px]  font-inter ">
                Envíos a todo México
              </h4>
              <p className="text-white text-[7px] lg:text-[12px] font-inter leading-[14px]">
                Belleza floral a tu puerta
              </p>
            </div>
            
          </div>
          <div>
              <img src="/assets/Home/hero/info/divider.png" alt="entrega" className="w-full h-full" />
            </div>
          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <div>
              <img
                src="/assets/Home/hero/info/tarjetas.svg"
                alt="entrega"
                className="w-[25px] h-[17px] lg:w-[56px] lg:h-[38px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left">
              <h4 className="text-white font-bold text-[7px] lg:text-[12px]  font-inter">
                Aceptamos todas las tarjetas
              </h4>
              <p className="text-white text-[7px] lg:text-[12px] font-inter leading-[14px]">
                Seguridad y confianza al pagar
              </p>
            </div>
          </div>
          <div>
              <img src="/assets/Home/hero/info/divider.png" alt="entrega" className="w-full h-full" />
            </div>
          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <div>
              <img
                src="/assets/Home/hero/info/premium.svg"
                alt="entrega"
                className="w-[22px] h[19px] lg:w-[49px] lg:h-[44px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left">
              <h4 className="text-white font-bold text-[7px] lg:text-[12px]  font-inter">
                Arreglos Premium
              </h4>
              <p className="text-white text-[7px] lg:text-[12px] font-inter leading-[14px]">
                Calidad en todos los pedidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
