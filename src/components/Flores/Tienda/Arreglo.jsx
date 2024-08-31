import Image from 'next/image';
import React from 'react'

function Arreglo({arreglo, checklistArreglos, setChecklistArreglos}) {
  
  const handleClick = () => {
    if (checklistArreglos.includes(arreglo._id)) {
      // Si el arreglo ya está en el checklist, lo eliminamos
      setChecklistArreglos(checklistArreglos.filter(item => item !== arreglo._id));
    } else {
      // Si el arreglo no está en el checklist, lo agregamos
      setChecklistArreglos(checklistArreglos.concat(arreglo._id));
    }
  };


  return (
    <div
      key={arreglo.id}
      className="w-[190px] h-[27px] flex flex-row  items-center px-[5px] cursor-pointer gap-[9px]"
    >
      <div
        id={arreglo.id}
        className={`w-[21px] h-[21px]  rounded-[6px] border-[1px] border-[#E39C9D] `}
        onClick={handleClick}
      >
        {
          checklistArreglos.includes(arreglo._id) &&
          <div className='w-full h-full flex justify-center items-center'>

          <Image
          width={15}
          height={15}
          
          src='/assets/icons/check.svg' alt='check' className='w-[70%] h-[70%]' />
        </div>
        }
        </div>
      <label htmlFor={arreglo._id}>{arreglo.nombre}</label>
    </div>
  )
}

export default Arreglo