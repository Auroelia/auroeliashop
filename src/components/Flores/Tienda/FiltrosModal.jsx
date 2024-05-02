import { client } from '@/lib/client';
import React, { useEffect, useState } from 'react'
import Arreglo from './Arreglo';
import Flor from './Flor';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function FiltrosModal({isOpen,close, checklist, setChecklist, checklistArreglos, setChecklistArreglos}) {

  console.log(isOpen)

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


  

  const [floresOpen, setFloresOpen] = useState(true);

  const [arreglosOpen, setArreglosOpen] = useState(true);


  const [precioOpen, setPrecioOpen] = useState(true);

  const [checklistPrecio, setChecklistPrecio] = useState([]);

  const [value, setValue] = useState([0, 100]); 

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  if (!isOpen) return null; 

  

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    }}>
      <div
      className='bg-white w-full h-full rounded-[54px] flex flex-col  justify-center relative px-8'
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <img src='/assets/Carrito/cerrar.svg' alt='close' className='absolute top-4 right-4 m-[20px] cursor-pointer' onClick={close}/>
        <span className='text-[24px] font-inter font-bold text-[#E39C9D]'>Filtrar</span>
        <span className='text-[16px] font-inter font-semibold mt-[26px]'>Flores</span>
      <div className="w-full  mt-[12px] ">
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
      </div>

      <div className='h-[1px] w-full bg-[#E39C9D] my-[26px]'/>

     
      <span className='text-[16px] font-inter font-semibold'>Tipo de arreglo</span>
        
      <div className="w-full  mt-[12px] ">
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

      <div className='h-[1px] w-full bg-[#E39C9D] my-[26px]'/>

     
      <span className='text-[16px] font-inter font-semibold'>Precio</span>
       
      {precioOpen && (
        <div className="mt-[29px]">
      <RangeSlider id="range-slider" minValue={0} maxValue={100}  onChange={value => setValue(value)} />
            <div className="flex justify-between">

           <span>${value[0]}</span>
           <span>${value[1]}</span>
        </div>
        </div>
      )}
      <div className='w-full flex justify-center'>
        <button className="bg-[#E39C9D] w-[188px] h-[60px] rounded-[6px] text-[24px] font-bold font-inter mt-[43px] ">
          Filtrar
        </button>
      </div>

      </div>
    </div>
  );
}

export default FiltrosModal