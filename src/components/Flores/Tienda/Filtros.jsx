import React, { useEffect, useState } from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Flor from "../../../components/Flores/Tienda/Flor";
import { client } from "@/lib/client";
import Arreglo from "./Arreglo";

function Filtros({checklist, setChecklist, checklistArreglos, setChecklistArreglos, handleChecklistChange}) {
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


  

  const [floresOpen, setFloresOpen] = useState(false);

  const [arreglosOpen, setArreglosOpen] = useState(true);


  const [precioOpen, setPrecioOpen] = useState(false);

  const [checklistPrecio, setChecklistPrecio] = useState([]);

  const [value, setValue] = useState([0, 100]); 

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  return (
    <div className="hidden lg:block w-[220px] flex flex-col ">
      <span>Filtrar</span>
      <div className="bg-[#E39C9D] h-[1px] w-full mt-[10px]" />
      {/* <div
        className="w-[190px] h-[27px] border-[1px]  border-[#E39C9D] rounded-[6px] flex flex-row justify-between items-center px-[5px] mt-[27px] cursor-pointer "
        onClick={() => setFloresOpen(!floresOpen)}
      >
        <span>Flores</span>
        <img
          src="/assets/icons/up.svg"
          alt="arrow-up"
          className={`w-[13px] h-[21px] m-[8px] ${
            floresOpen ? "rotate-0" : "rotate-180"
          } transition-all duration-300`}
        />
      </div>
      <div className="w-full  mt-[32px] ">
        {floresOpen && (
          <div className=" w-full flex flex-col gap-[15px]">
            {flores.map((flower) => (
              <Flor
                key={flower.id}
                flower={flower}
                checklist={checklist}
                setChecklist={setChecklist}
              />
            ))}
          </div>
        )}
      </div> */}

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
      {/* <div
        className="w-[190px] h-[27px] border-[1px]  border-[#E39C9D] rounded-[6px] flex flex-row justify-between items-center px-[5px] mt-[27px] cursor-pointer "
        onClick={() => setPrecioOpen(!precioOpen)}
      >
        <span>Precio</span>
        <img
          src="/assets/icons/up.svg"
          alt="arrow-up"
          className={`w-[13px] h-[21px] m-[8px] ${
            precioOpen ? "rotate-0" : "rotate-180"
          }
           transition-all duration-300
           `}
        />
      </div>
      {precioOpen && (
        <div className="mt-[29px]">
      <RangeSlider id="range-slider" minValue={0} maxValue={100}  onChange={value => setValue(value)} />
            <div className="flex justify-between">

           <span>${value[0]}</span>
           <span>${value[1]}</span>
        </div>
        </div>
      )} */}
      <div>
        {/* <button className="bg-[#E39C9D] w-[188px] h-[60px] rounded-[6px] text-[24px] font-bold font-inter mt-[43px] "
        onClick={()=>
          handleChecklistChange()
        
      }
        >
          Filtrar
        </button> */}
      </div> 
    </div>
  );
}

export default Filtros;
