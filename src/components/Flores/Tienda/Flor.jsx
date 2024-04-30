import React from 'react'

function Flor({flower, checklist, setChecklist}) {
  const handleClick = () => {
    if (checklist.includes(flower._id)) {
      // Si la flor ya está en el checklist, la eliminamos
      setChecklist(checklist.filter(item => item !== flower._id));
    } else {
      // Si la flor no está en el checklist, la agregamos
      setChecklist(checklist.concat(flower._id));
    }
  };

  return (
    <div  className='w-[190px] h-[27px] flex flex-row  items-center px-[5px] cursor-pointer gap-[9px]'>
      <div id={flower.id} className={`w-[21px] h-[21px] rounded-[6px] border-[1px] border-[#E39C9D] ${checklist.includes(flower._id) ? "bg-[#E39C9D]" : "bg-transparent"}`}
onClick={handleClick}      />
      <label htmlFor={flower._id}>{flower.nombre}</label>
     
    </div>
  )
}

export default Flor