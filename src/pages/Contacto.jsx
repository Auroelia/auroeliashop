import React from 'react'

function Contacto() {

    const info = [
        {
            icon : '/assets/icons/contactPhone.svg',
            info : '+5255402356'
        },
        {
            icon : '/assets/icons/contactMail.svg',
            info : 'contacto@auroelia.com'
        },
        {
            icon : '/assets/icons/contactFB.svg',
            info : 'Auroelia'
        },
        {
            icon : '/assets/icons/contactIG.svg',
            info : 'auroelia.na'
        },


    ]

  return (
    <div className='w-full h-full relative'>
        <div className='w-full h-[60vh] flex flex-col items-center justify-center'>
        <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
        Dudas y comentarios
                </span>
                <h2 className="text-[83px]">Contáctanos</h2>
                <span className="text-[#E39C9D] font-inter  text-[24px]">
                Horario de Atención de 10 AM a 7 PM
                </span>
                <div className='grid grid-cols-2 gap-x-[37px] gap-y-[50px]'>
                <div className='w-[333px] h-[285px] rounded-[58px]'>
                        <img src="/assets/icons/contactPhone.svg" alt='contacto1' className='w-[64px] h-[62px] object-cover' />
                        <p>+5255402356</p>
                    </div>
                <div className='w-[333px] h-[285px] rounded-[58px]'>
                        <img src="/assets/icons/contactMail.svg" alt='contacto1' className='w-[82px] h-[61px] object-cover' />
                        <p>contacto@auroelia.com</p>
                    </div>
                <div className='w-[333px] h-[285px] rounded-[58px]'>
                        <img src="/assets/icons/conctactFB.svg" alt='contacto1' className='w-[44px] h-[70px] object-cover' />
                        <p>contacto@auroelia.com</p>
                    </div>
                <div className='w-[333px] h-[285px] rounded-[58px]'>
                        <img src="/assets/icons/contactIG.svg" alt='contacto1' className='w-[64px] h-[73px] object-cover' />
                        <p>contacto@auroelia.com</p>
                    </div>
                    
                </div>
        </div>

    </div>
  )
}

export default Contacto