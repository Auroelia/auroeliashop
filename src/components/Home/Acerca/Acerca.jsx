import Link from 'next/link'
import React from 'react'

function Acerca() {
  return (
    <div className='w-full h-full overflow-hidden relative'>
      <img src='/assets/Home/acerca/acercaFondo.png' alt='acerca-bg' className='w-full h-full absolute top-0 left-0 -z-10 object-cover'/>
      
      <div className='w-full h-[549px] flex flex-col lg:flex-row justify-center items-center max-w-[1440px] min-w-sm mx-auto lg:gap-[20px] xl:gap-[0px]'>
        <div className='w-full flex flex-row items-center justify-center '>
          <img src='/assets/Home/acerca/foto1.png' alt='acercaRamo' className='w-[203px] h-[160px] lg:w-[416px] lg:h-[327px] lg:-translate-y-[50px] -translate-x-[50px] lg:absolute  '/>
          <img src='/assets/Home/acerca/foto2.png' alt='acercaRamo' className='w-[203px] h-[160px] lg:w-[416px] lg:h-[327px]  absolute lg:translate-y-[25px] translate-x-[75px] '/>
        </div>
        <div className='w-full lg:w-[70%] flex flex-col items-center lg:items-start justify-center gap-[21px] ' >

        <div className=' justify-center flex flex-col text-white leading-[60px] text-[42px] lg:text-[56px] text-center lg:text-left'>
          <h2 className=' '>Ideas que nacen </h2>
          <h2 className=' '>del <span className='text-[#E39C9D]'>corazón</span></h2>

        </div>
        <div className='w-[430px]  flex flex-row  justify-center lg:justify-start '>
          <p className='w-[430px] text-white text-[12px] text-center lg:text-left lg:text-[16px] leading-[17px] lg:leading-[23px] px-[60px] lg:px-0'>
          Cada uno de nuestros productos está impregnado con amor, dedicación y pasión por las flores. Desde los arreglos más delicados hasta los regalos más lujosos, nuestra colección refleja el compromiso de transmitir emociones genuinas y hacer que cada ocasión sea especial.
          </p>
        </div>
        <div className=' flex flex-row justify-center lg:justify-start'>
          <Link href='/Acerca'>
          <button className='bg-[#E39C9D] w-[188px] h-[60px] rounded-[6px] text-[24px] font-bold  '>Conócenos</button> 
          </Link>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Acerca