import React, { useEffect, useState } from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Flor from "../../../components/Flores/Tienda/Flor";
import { client } from "@/lib/client";
import Arreglo from "./Arreglo";

function Filtros({
  checklist,
  setChecklist,
  checklistArreglos,
  setChecklistArreglos,
  handleChecklistChange,
}) {
  const [flores, setFlores] = useState([]);
  const [arreglos, setArreglos] = useState([]);

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch('*[_type == "flor"]')
      .then((data) => setFlores(data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch('*[_type == "arreglo"]')
      .then((data) => setArreglos(data))
      .catch((error) => console.error(error));
  }, []);


  const [arreglosOpen, setArreglosOpen] = useState(true);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="hidden  w-[220px] lg:flex flex-col ">
      <span>Filtrar</span>
      <div className="bg-[#E39C9D] h-[1px] w-full mt-[10px]" />

      <div
        className="w-[190px] h-[27px] border-[1px]  border-[#E39C9D] rounded-[6px] flex flex-row justify-between items-center px-[5px] mt-[27px] cursor-pointer "
        onClick={() => setArreglosOpen(!arreglosOpen)}
      >
        <span>Tipo de arreglo</span>
        <img
          src="/assets/icons/up.svg"
          alt="arrow-up"
          className={`w-[13px] h-[21px] m-[8px] ${
            arreglosOpen ? "rotate-0" : "rotate-180"
          }
           transition-all duration-300
           `}
        />
      </div>
      <div className="w-full  mt-[32px] ">
        {arreglosOpen && (
          <div className=" w-full flex flex-col gap-[15px]">
            {arreglos.map((arreglo, index) => (
              <Arreglo
                key={index}
                arreglo={arreglo}
                checklistArreglos={checklistArreglos}
                setChecklistArreglos={setChecklistArreglos}
              />
            ))}
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
}

export default Filtros;
