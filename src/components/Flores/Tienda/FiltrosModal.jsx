import { client } from '@/lib/client';
import React, { useEffect, useState } from 'react';
import Arreglo from './Arreglo';
import Image from 'next/image';

function FiltrosModal({ isOpen, close, checklist, setChecklist, checklistArreglos, setChecklistArreglos }) {
  const [arreglos, setArreglos] = useState([]);
  const [tempChecklistArreglos, setTempChecklistArreglos] = useState([]);

  // Sincronizar tempChecklistArreglos cuando se abre el modal
  useEffect(() => {
    if (isOpen) {
      setTempChecklistArreglos([...checklistArreglos]);
    }
  }, [isOpen, checklistArreglos]);

  useEffect(() => {
    client
      .fetch('*[_type == "arreglo"]')
      .then((data) => setArreglos(data))
      .catch((error) => console.error(error));
  }, []);

  const handleApplyFilters = () => {
    setChecklistArreglos(tempChecklistArreglos);
    close();
  };

  const handleClearFilters = () => {
    setTempChecklistArreglos([]);
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
          src='/assets/Carrito/cerrar.svg' 
          alt='close' 
          className='absolute top-4 right-4 m-[20px] cursor-pointer' 
          onClick={close} 
        />
        <span className='text-[24px] font-inter font-bold text-[#E39C9D]'>Filtrar</span>
        <div className='h-[1px] w-full bg-[#E39C9D] my-[26px]' />
        <span className='text-[16px] font-inter font-semibold'>Tipo de arreglo</span>
        <div className="w-full mt-[12px] max-h-[300px] overflow-y-auto">
          <div className="w-full flex flex-col gap-[15px]">
            {arreglos.map((arreglo) => (
              <Arreglo
                key={arreglo._id}
                arreglo={arreglo}
                checklistArreglos={tempChecklistArreglos}
                setChecklistArreglos={setTempChecklistArreglos}
              />
            ))}
          </div>
        </div>
        <div className='h-[1px] w-full bg-[#E39C9D] my-[26px]' />
        
        {/* Filtros seleccionados */}
        {tempChecklistArreglos.length > 0 && (
          <div className='mb-4'>
            <span className='text-sm text-gray-500'>
              {tempChecklistArreglos.length} filtro(s) seleccionado(s)
            </span>
          </div>
        )}
        
        <div className='w-full flex flex-col sm:flex-row justify-center gap-4'>
          <button
            className="border-2 border-[#E39C9D] text-[#E39C9D] w-full sm:w-[150px] h-[50px] rounded-[6px] text-[18px] font-bold font-inter transition-all hover:bg-gray-50"
            onClick={handleClearFilters}
          >
            Limpiar
          </button>
          <button
            className="bg-[#E39C9D] text-white w-full sm:w-[150px] h-[50px] rounded-[6px] text-[18px] font-bold font-inter transition-all hover:bg-[#d08687]"
            onClick={handleApplyFilters}
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltrosModal;
