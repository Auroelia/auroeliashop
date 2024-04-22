import React from 'react'

function Acerca() {
  return (
    <div className='w-full h-full overflow-hidden relative'>
      <img src='/assets/acerca/acercaFondo.png' alt='acerca-bg' className='w-full h-full absolute top-0 left-0 -z-10'/>
      <div className='w-full h-[549px] flex flex-row justify-center items-center max-w-[1440px] min-w-sm mx-auto'>
        <div className='w-full flex flex-row items-center justify-center '>
          <img src='/assets/acerca/foto1.png' alt='acercaRamo' className='w-[416px] h-[327px] -translate-y-[50px] -translate-x-[50px] absolute '/>
          <img src='/assets/acerca/foto2.png' alt='acercaRamo' className='w-[416px] h-[327px] absolute translate-y-[25px] translate-x-[75px]'/>
        </div>
        <div className='w-full justify-center flex flex-col gap-[21px]' >

        <div className='w-full justify-center flex flex-col text-white leading-[60px] '>
          <h2 className='text-[56px] '>Ideas que nacen </h2>
          <h2 className='text-[56px] '>del <span className='text-[#E39C9D]'>corazón</span></h2>

        </div>
        <div className='w-[430px]'>
          <p className='text-white text-[16px] leading-[23px]'>
          Cada uno de nuestros productos está impregnado con amor, dedicación y pasión por las flores. Desde los arreglos más delicados hasta los regalos más lujosos, nuestra colección refleja el compromiso de transmitir emociones genuinas y hacer que cada ocasión sea especial.
          </p>
        </div>
        <div >
          <button className='bg-[#E39C9D] w-[188px] h-[60px] rounded-[6px] text-[24px] font-bold font-inter '>Conócenos</button>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Acerca