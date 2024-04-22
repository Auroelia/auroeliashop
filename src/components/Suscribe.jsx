import React from 'react'

function Suscribe() {
  return (
    <div className='w-full h-full relative'>
      <div className='w-full h-full bg-black/50 absolute -z-10'/>
      <img src='/assets/suscribe/suscribebg.jpg' alt='suscribe-bg' className='w-full h-full object-cover absolute -z-20' />
    <div className='w-full h-[249px] flex flex-row justify-center items-center'>
      <div className='flex flex-col text-center gap-[6px]'>
      <span className='text-white font-inter text-[35px] font-bold leading-[42px]'>
      Suscríbete para grandes ofertas
      </span>
      <p className='text-white text-[16px] font-semibold leading-[24px]'>
      ¡No dejes de enterarte de nuestras mejores promociones y descuentos!
      </p>
      <div className='flex flex-row gap-[20px] mt-[18px]'>
        <input type='email' placeholder='Correo Electrónico' className='w-[481px] h-[58px]  border-0 outline-none rounded-[6px] placeholder:text-[#989898] placeholder:font-inter placeholder:text-[16px] placeholder:pl-[55px]' />
        <button className='bg-[#E39C9D] w-[152px] h-[52px] text-[24px] font-semibold rounded-[6px]'>Enviar</button>
      </div>

      </div>
    </div>

    </div>
  )
}

export default Suscribe