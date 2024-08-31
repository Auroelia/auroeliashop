import { client } from '@/lib/client';
import React, { useEffect, useState } from 'react';
import Arreglo from './Arreglo';
import Flor from './Flor';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Image from 'next/image';

function FiltrosModal({ isOpen, close, checklist, setChecklist, checklistArreglos, setChecklistArreglos, handleCheckListChange }) {
  const [flores, setFlores] = useState([]);
  const [arreglos, setArreglos] = useState([]);
  const [tempChecklist, setTempChecklist] = useState(checklist);
  const [tempChecklistArreglos, setTempChecklistArreglos] = useState(checklistArreglos);

  useEffect(() => {
    client
      .fetch('*[_type == "flor"]')
      .then((data) => setFlores(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
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
  };

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
        className='bg-white w-full h-full lg:rounded-[54px] flex flex-col justify-center relative px-8'
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
        <Image
        width={24}
        height={24}
        src='/assets/Carrito/cerrar.svg' alt='close' className='absolute top-4 right-4 m-[20px] cursor-pointer' onClick={close} />
        <span className='text-[24px] font-inter font-bold text-[#E39C9D]'>Filtrar</span>
        <div className='h-[1px] w-full bg-[#E39C9D] my-[26px]' />
        <span className='text-[16px] font-inter font-semibold'>Tipo de arreglo</span>
        <div className="w-full mt-[12px]">
          {arreglosOpen && (
            <div className="w-full flex flex-col gap-[15px]">
              {arreglos.map((arreglo, index) => (
                <Arreglo
                  key={index}
                  arreglo={arreglo}
                  checklistArreglos={tempChecklistArreglos}
                  setChecklistArreglos={setTempChecklistArreglos}
                />
              ))}
            </div>
          )}
        </div>
        <div className='h-[1px] w-full bg-[#E39C9D] my-[26px]' />
        <div className='w-full flex justify-center'>
          <button
            className="bg-[#E39C9D] w-[188px] h-[60px] rounded-[6px] text-[24px] font-bold font-inter mt-[43px]"
            onClick={() => {
              setChecklist(tempChecklist);
              setChecklistArreglos(tempChecklistArreglos);
              close();
            }}
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltrosModal;