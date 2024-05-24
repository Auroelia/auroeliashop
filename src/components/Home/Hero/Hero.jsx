import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const heroProducts = [
    {
      id: 1,
      name: "Ositos Fancy",
      price: 100,
      description:
        "¡Haz que tus emociones florezcan con nuestros Ositos Fancy! Cada uno de estos adorables ositos está hecho a mano con aproximadamente 500 hermosas rosas de goma EVA. Son el regalo perfecto para cualquier ocasión especial, infundiendo encanto y elegancia con su diseño artesanal.",
      image: "/assets/Home/hero/osito.png",
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
      name: "Velas aromatizantes",
      price: 100,
      description:
        "¡Descubre la elegancia perdurable de nuestras velas aromatizantes artesanales! Cada vela es una fusión de belleza y aroma, elaborada a mano con cuidado y detalle. Sorprende con un regalo que crea una atmósfera acogedora y deleita los sentidos.",
      image: "/assets/Home/hero/vela.png",
      elipse: "/assets/Home/hero/velaelipse.svg",
    },
  ];

  const [seleccion, setSeleccion] = useState(1);

  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variantsProducto1 = isLarge?{

    hidden: { opacity: 0, x: 50, y: -100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }
  :{
    hidden: { opacity: 0, x: 50, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }
  const variantsProducto2 = isLarge?{
    hidden: { opacity: 0, x: 50, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }:{
    hidden: { opacity: 0, x: 50, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }
  const variantsProducto3 = isLarge?{
    hidden: { opacity: 0, x: -50, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }:{
    hidden: { opacity: 0, x: -50, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => setSeleccion((prev) => (prev + 1) % 3),
    onSwipedRight: () => setSeleccion((prev) => (prev - 1 + 3) % 3),
  });



  const [orientacion, setOrientacion] = useState(true);
  const prevSeleccion = useRef(seleccion);

  useEffect(() => {
    if (seleccion > 0 && seleccion > prevSeleccion.current) {
      setOrientacion(true);
    } else {
      setOrientacion(false);
    }
    prevSeleccion.current = seleccion;
  }, [seleccion]);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <img
        src="/assets/Home/hero/lirio.png"
        alt="hero"
        className="
        hidden xl:block
        w-[728px] h-[722px] absolute lg:-left-[150px] lg:-bottom-[100px] opacity-30 -z-10"
      />
      <AnimatePresence mode="wait">
        <motion.img
          id="hola3"
          key={heroProducts[seleccion == 0 ? 1 : seleccion == 1 ? 2 : 0]?.image}
          initial="hidden"
          animate="visible"
          variants={variantsProducto2}
          transition={{ duration: 3 }}
          src={heroProducts[seleccion == 0 ? 1 : seleccion == 1 ? 2 : 0]?.image}
          alt="hero"
          className="w-[264px] h-[264px] lg:w-[326px] lg:h-[326px] absolute -right-[150px] top-[15%] lg:-top-[30px] blur-sm -z-10"
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.img
          id="hola2"
          key={heroProducts[seleccion == 0 ? 2 : seleccion == 1 ? 0 : 1]?.image}
          initial="hidden"
          animate="visible"
          variants={variantsProducto3}
          transition={{ duration: 3 }}
          src={heroProducts[seleccion == 0 ? 2 : seleccion == 1 ? 0 : 1]?.image}
          alt="hero"
          className="hidden lg:block lg:w-[326px] lg:h-[326px] absolute   lg:-right-[150px] lg:bottom-[40px] blur-sm -z-10"
        />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.img
          key={heroProducts[(seleccion + 2) % 3]?.image}
          id="hola"
          initial="hidden"
          animate="visible"
          variants={variantsProducto3}
          transition={{ duration: 3 }}
          src={heroProducts[(seleccion + 2) % 3]?.image}
          alt="hero"
          className="w-[264px] h-[264px] lg:w-[326px] lg:h-[326px] absolute -left-[150px] top-[15%]  lg:hidden blur-sm -z-10"
        />
      </AnimatePresence>

      <div className="w-full h-[920px] lg:h-[750px] flex flex-col max-w-[1440px] min-w-sm mx-auto items-center">
        <div className="w-full lg:w-[90%] xl:w-full  flex flex-col-reverse lg:flex-row justify-center items-center ">
          <div className=" flex flex-col items-center lg:items-start">
            <motion.h1
              key={heroProducts[seleccion].name}
              className="text-[50px] lg:text-[70px] font-bloverly text-center lg:text-start"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1 }}
            >
              {heroProducts[seleccion].name}
            </motion.h1>
            <motion.p
              key={heroProducts[seleccion].description}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1 }}
              className="mt-[12px] w-[293px] lg:w-[583px] text-[12px] lg:text-[16px] lg:font-semibold text-center lg:text-left font-shipporiMincho "
            >
              {heroProducts[seleccion].description}
            </motion.p>
            <div className="w-[200px] hidden lg:flex flex-row items-center justify-start  gap-[33px] mt-[40px]">
              {heroProducts.map((product, index) => (
                <div
                  key={index}
                  className="w-full h-full flex flex-col  gap-[12px]"
                >
                  <div className="rounded-full w-[60px] h-[60px] cursor-pointer ">
                    <img
                      src={product.elipse}
                      key={product.id}
                      onClick={() => setSeleccion(index)}
                      className="object-cover "
                    ></img>
                    <motion.div
                      key={heroProducts[seleccion].elipse}
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      transition={{ duration: 1 }}
                      className={
                        seleccion == index &&
                        `w-[60px] h-[3px] bg-black rounded-[4px] mt-[12px]`
                      }
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[7px]  lg:mt-[59px] flex flex-row justify-center lg:justify-start">
              <Link href="/Tienda">
                <button className="w-[188px] h-[60px] bg-[#e39c9d] text-[24px] font-bold rounded-[6px] ">
                  Ver Tienda
                </button>
              </Link>
            </div>
          </div>
          <div
            className="w-[526px]  h-[526px] flex justify-center "
            {...handlers}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={heroProducts[seleccion].image}
                initial="hidden"
                animate="visible"
                variants={variantsProducto1}
                transition={{ duration: 3 }}
                src={heroProducts[seleccion]?.image}
                alt="osofancy"
                className="w-[80%] lg:w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className=" w-[90%] md:w-[70%] lg:w-[853px] h-[73px] md:h-[90px] lg:h-[113px] bg-black rounded-[13px] lg:rounded-[30px] mx-auto flex flex-row justify-center items-center gap-[19px] lg:gap-[32px]  my-[20px] lg:my-[0px]">
          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <div>
              <img
                src="/assets/Home/hero/info/envio.svg"
                alt="entrega"
                className="w-[25px] h-[19px] md:w-[40px] lg:w-[61px] md:h-[30px] lg:h-[41px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left">
              <h4 className="text-white font-bold text-[7px] md:text-[10px] lg:text-[12px]  font-inter ">
                Envíos a todo México
              </h4>
              <p className="text-white text-[7px] md:text-[10px] lg:text-[12px] font-inter leading-[14px]">
                Belleza floral a tu puerta
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/Home/hero/info/divider.png"
              alt="entrega"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <div>
              <img
                src="/assets/Home/hero/info/tarjetas.svg"
                alt="entrega"
                className="w-[25px] h-[17px] md:w-[40px] lg:w-[56px] md:h-[30px] lg:h-[38px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left">
              <h4 className="text-white font-bold text-[7px] md:text-[10px] lg:text-[12px]  font-inter">
                Aceptamos todas las tarjetas
              </h4>
              <p className="text-white text-[7px] md:text-[10px] lg:text-[12px] font-inter leading-[14px]">
                Seguridad y confianza al pagar
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/Home/hero/info/divider.png"
              alt="entrega"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <div>
              <img
                src="/assets/Home/hero/info/premium.svg"
                alt="entrega"
                className="w-[22px] h[19px] md:w-[40px] lg:w-[49px] md:h-[30px] lg:h-[44px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left">
              <h4 className="text-white font-bold text-[7px] md:text-[10px] lg:text-[12px]  font-inter">
                Arreglos Premium
              </h4>
              <p className="text-white text-[7px] md:text-[10px] lg:text-[12px] font-inter leading-[14px]">
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
