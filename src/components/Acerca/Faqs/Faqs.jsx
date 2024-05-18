import Link from "next/link";
import React, { useState } from "react";

function Faqs() {
  const faqs = [
    {
      id:1,
      question: "¿Cuál es el tiempo de entrega de los arreglos florales?",
      answer:
        "El tiempo de entrega de nuestros arreglos florales es de 24 a 48 horas hábiles, dependiendo de la disponibilidad de los productos y la zona de entrega. Para entregas en el mismo día, te recomendamos realizar tu pedido antes de las 12:00 pm.",
    },
    {
      id:2,
      question: "¿Puedo personalizar mi arreglo floral?",
      answer:
        "Sí, ofrecemos la opción de personalizar tu arreglo floral con flores y colores de tu elección. Contáctanos para obtener más información sobre las opciones de personalización disponibles.",
    },
    {
      id:3,
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos pagos con tarjeta de crédito, débito y PayPal. También ofrecemos la opción de pago en efectivo al momento de la entrega. Para obtener más información sobre los métodos de pago disponibles, contáctanos.",
    },
    {
      id:4,
      question: "¿Ofrecen servicio de envío a domicilio?",
      answer:
        "Sí, ofrecemos servicio de envío a domicilio en toda la Ciudad de México y área metropolitana. Para envíos a otras zonas, contáctanos para obtener más información sobre las opciones de envío disponibles.",
    },
  ];

  const [open, setOpen] = useState(false);
  const [eleccion, setEleccion] = useState(null)

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        className="w-[90%] flex flex-col justify-center text-left xl:text-center  max-w-[1440px] min-w-sm mx-auto lg:px-[50px] 
        xl:px-[180px] "
      >
        <span className="text-[#E39C9D] font-inter font-bold text-[19px] md:text-[25px] lg:text-[32px] ">
          FAQs
        </span>
        <h2 className="w-[150px] md:w-[200px] xl:w-full text-[42px] md:text-[50px] lg:text-[50px] xl:text-[65px] ">Dudas y Preguntas</h2>
        <div className="flex flex-col gap-[36px] mt-[69px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`w-full flex  ${
                eleccion == faq.id ? "h-[200px] md:h-[150px] lg:h-[110px]" : "h-[48px]"
              } border-[#E39C9D] border-[1px] rounded-[6px] transition-all duration-300 cursor-pointer`}
              onClick={()=> setEleccion(faq.id)}
            >
              <div className="w-[95%] flex flex-col   justify-center text-start  px-[15px]">
                <span
                  className={`${
                    eleccion == faq.id  ? "text-[#E39C9D]" : "text-black"
                  } font-inter text-[12px] lg:text-[20px] `}
                >
                  {faq.question}
                </span>
                <p
                  className={` ${
                    eleccion != faq.id  && "hidden"
                  } text-[16px] font-medium leading-[23px]`}
                >
                  {faq.answer}
                </p>
              </div>
              <div className="w-[5%] mr-4 lg:mr-0 flex flex-col items-center justify-center">
                <img
                  src="/assets/icons/open.svg"
                  alt="faq"
                  className={`w-[30px] h-[34px] ${
                    eleccion != faq.id  && "rotate-180"
                  } transition-all duration-300`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col lg:flex-row my-[68px]">
          <div className=" w-full xl:w-1/2">
            <h3 className="text-[29px] lg:text-[41px] text-center lg:text-start">¿Tienes más dudas?</h3>
          </div>
          <div className=" w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Link href="/Contacto">
            <button className="w[117px] lg:w-[188px] h-[37px] lg:h-[60px] rounded-[6px] bg-[#E39C9D] text-[15px] lg:text-[24px] font-inter font-bold px-[15px]">
              Contáctanos
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
