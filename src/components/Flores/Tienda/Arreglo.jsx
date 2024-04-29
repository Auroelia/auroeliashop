import React from 'react'

function Arreglo({arreglo, checklistArreglos, setChecklistArreglos}) {
  return (
    <div
    key={arreglo.id}
    className="w-[190px] h-[27px] flex flex-row  items-center px-[5px] cursor-pointer gap-[9px]"
  >
    <div
      id={arreglo.id}
      className={`w-[21px] h-[21px]  rounded-[6px] border-[1px] border-[#E39C9D] ${
        !checklistArreglos[arreglo.id]
          ? "bg-transparent"
          : "bg-[#E39C9D]"
      }`}
      onClick={() =>
        setChecklistArreglos({
          ...checklistArreglos,
          [arreglo.id]: !checklistArreglos[arreglo.id],
        })
      }
    />
    <label htmlFor={arreglo.id}>{arreglo.nombre}</label>
  </div>
  )
}

export default Arreglo