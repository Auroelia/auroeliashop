import React from 'react'

function Flor({flower, checklist, setChecklist}) {
  return (
    <div  className='w-[190px] h-[27px] flex flex-row  items-center px-[5px] cursor-pointer gap-[9px]'>
      <div id={flower.id} className={`w-[21px] h-[21px]  rounded-[6px] border-[1px] border-[#E39C9D] ${!checklist[flower.nombre]? "bg-transparent": "bg-[#E39C9D]"}`}
      onClick={() => setChecklist({...checklist, [flower.nombre]: !checklist[flower.nombre]})}
      />
      <label htmlFor={flower.id}>{flower.nombre}</label>
    </div>
  )
}

export default Flor