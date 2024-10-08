import React from "react";

function Mision() {
  return (
    <div className="w-full h-full flex flex-col gap-[30px] lg:gap-[81px] relative">
      <div className="w-full h-full flex flex-row flex-wrap justify-center items-center gap-[10px] lg:gap-[35px]">
        <div
          className="w-[180px] h-[190px] lg:w-[325px] lg:h-[341px] rounded-[3px] bg-[#E39C9D] flex flex-col items-center justify-center text-center"
          style={{ boxShadow: "0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)" }}
        >
          <span className="font-bold font-inter text-[36px]">Misión</span>
          <p className="text-white  text-[10px] lg:text-[16px] leading-[12px] lg:leading-[23px] w-[133px] lg:w-[241px] rounded-[6px] h-[200px]">
            Nos comprometemos a transformar momentos ordinarios en experiencias
            extraordinarias a través de la belleza y la creatividad de nuestros
            arreglos florales artesanales, ofreciendo productos exclusivos y de
            alta calidad que reflejen autenticidad.
          </p>
        </div>
        <div
          className="w-[180px] h-[190px] lg:w-[325px] lg:h-[341px] rounded-[3px] bg-black flex flex-col items-center justify-center text-center"
          style={{ boxShadow: "0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)" }}
        >
          <span className="font-bold text-[#E39C9D] font-inter text-[36px]">
            Visión
          </span>
          <p className="text-white text-[10px] lg:text-[16px] leading-[12px] lg:leading-[23px] w-[133px] lg:w-[241px] rounded-[6px] h-[200px]">
            Buscamos ser líderes en el mercado de arreglos florales de lujo,
            reconocidos por nuestra elegancia, originalidad y compromiso con la
            excelencia. Aspiramos a ser la elección preferida de aquellos que
            buscan regalos únicos y memorables, creando un impacto emocional
            duradero.
          </p>
        </div>
        <div
          className="w-[180px] h-[190px] lg:w-[325px] lg:h-[341px] rounded-[3px]  flex flex-col items-center justify-center text-center"
          style={{ boxShadow: "0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)" }}
        >
          <span className=" text-[#E39C9D] font-bold font-inter text-[36px]">
            Valores
          </span>

          <ul className=" text-[10px] lg:text-[16px] leading-[12px] lg:leading-[23px] w-[132px] lg:w-[241px] lg:h-[200px] h-[1100px] rounded-[6px]">
            <li>Creatividad</li>
            <li>Originalidad</li>
            <li>innovación</li>
            <li>Servicio al Cliente</li>
            <li>Autenticidad</li>
            <li>Trabajo en Equipo</li>
            <li>Respeto</li>
            <li>Conexión emocional</li>
            <li>Inspiración</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center ">
        <span className="text-center text-[19px] lg:text-[25px] xl:text-[36px] font-bold font-inter w-[80%] lg:w-[70%] xl:w-[920px]">
          En nuestra florería, cada ramo es una obra maestra de elegancia y
          pasión floral. Descubre la magia detrás de{" "}
          <span className="text-[#E39C9D]">nuestras creaciones</span>
        </span>
      </div>
    </div>
  );
}

export default Mision;
