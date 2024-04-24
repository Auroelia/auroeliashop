import React, { useState } from 'react'

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


function Filtros() {

  const flores = [
    {id: 1, nombre: 'Rosas'},
    {id: 2, nombre: 'Girasoles'},
    {id: 3, nombre: 'Peonias'},
    {id: 4, nombre: 'Lirios'},
    {id: 5, nombre: 'Tulipanes'},
    {id: 6, nombre: 'Orquideas'},
  ]

  const tipes = [
    {id: 1, nombre: 'Ramo'},
    {id: 2, nombre: 'Centros de mesa'},
    {id: 3, nombre: 'Plantas'},
  ]

  const [floresOpen, setFloresOpen] = useState(false)

  const [checklist, setChecklist] = useState({});

  const [arreglosOpen, setArreglosOpen] = useState(false)

  const [checklistArreglos, setChecklistArreglos] = useState({});

  const [precioOpen, setPrecioOpen] = useState(false)

  const [checklistPrecio, setChecklistPrecio] = useState({});

  const [value, setValue] = useState([2, 10]);



  return (
    <div className='w-[220px] flex flex-col '>
        <span>Filtrar</span>
        <div className='bg-[#E39C9D] h-[1px] w-full mt-[10px]'/>
        <div className='w-[190px] h-[27px] border-[1px]  border-[#E39C9D] rounded-[6px] flex flex-row justify-between items-center px-[5px] mt-[27px] cursor-pointer '
        onClick={() => setFloresOpen(!floresOpen)}
        >
           <span>Flores</span>
           <img src='/assets/icons/up.svg' alt='arrow-up' className={`w-[13px] h-[21px] m-[8px] ${floresOpen? "rotate-0":"rotate-180"} transition-all duration-300`}/>
           
        </div>
        <div className='w-full  mt-[32px] '>
        {
  floresOpen && 
  <div className=' w-full flex flex-col gap-[15px]'>
    {
  flores.map((flower) => (
    <div key={flower.id} className='w-[190px] h-[27px] flex flex-row  items-center px-[5px] cursor-pointer gap-[9px]'>
      <div id={flower.id} className={`w-[21px] h-[21px]  rounded-[6px] border-[1px] border-[#E39C9D] ${!checklist[flower.id]? "bg-transparent": "bg-[#E39C9D]"}`}
      onClick={() => setChecklist({...checklist, [flower.id]: !checklist[flower.id]})}
      />
      <label htmlFor={flower.id}>{flower.nombre}</label>
    </div>
  ))
}
  </div>
}

        </div>
        
        
        <div className='w-[190px] h-[27px] border-[1px]  border-[#E39C9D] rounded-[6px] flex flex-row justify-between items-center px-[5px] mt-[27px] cursor-pointer '
        onClick={() => setArreglosOpen(!arreglosOpen)}
        >
           <span>Tipo de arreglo</span>
           <img src='/assets/icons/up.svg' alt='arrow-up' className={`w-[13px] h-[21px] m-[8px] ${arreglosOpen? "rotate-0":"rotate-180"}
           transition-all duration-300
           `}/>
           
        </div>
        <div className='w-full  mt-[32px] '>
        {
  arreglosOpen && 
  <div className=' w-full flex flex-col gap-[15px]'>
    {
  tipes.map((arreglo) => (
    <div key={arreglo.id} className='w-[190px] h-[27px] flex flex-row  items-center px-[5px] cursor-pointer gap-[9px]'>
      <div id={arreglo.id} className={`w-[21px] h-[21px]  rounded-[6px] border-[1px] border-[#E39C9D] ${!checklistArreglos[arreglo.id]? "bg-transparent": "bg-[#E39C9D]"}`}
      onClick={() => setChecklistArreglos({...checklistArreglos, [arreglo.id]: !checklistArreglos[arreglo.id]})}
      />
      <label htmlFor={arreglo.id}>{arreglo.nombre}</label>
    </div>
  ))
}
  </div>
}

        </div>
        <div className='w-[190px] h-[27px] border-[1px]  border-[#E39C9D] rounded-[6px] flex flex-row justify-between items-center px-[5px] mt-[27px] cursor-pointer '
        onClick={() => setPrecioOpen(!precioOpen)}
        >
           <span>Precio</span>
           <img src='/assets/icons/up.svg' alt='arrow-up' className={`w-[13px] h-[21px] m-[8px] ${precioOpen? "rotate-0":"rotate-180"}
           transition-all duration-300
           `}/>
           
        </div>
        {
          precioOpen &&
        <div className='mt-[29px]'>

        <RangeSlider
        id="range-slider"
        min={0}
        max={100}

        />
    </div>
        }
    <div >
          <button className='bg-[#E39C9D] w-[188px] h-[60px] rounded-[6px] text-[24px] font-bold font-inter mt-[43px] '>Filtrar</button>
        </div>
  </div>
  )
}

export default Filtros