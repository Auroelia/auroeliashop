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
        <div className='w-full h-screen 2xl:h-[80vh] flex flex-col items-center max-w-[1440px] min-w-sm mx-auto relative '>
        <img src='/assets/petaloizq.png' alt='flores' className='w-[221px] h-[200px] object-cover absolute bottom-[100px] -left-[0px]'/>
          <img src='/assets/Home/populares/petalo.png' alt='flores' className='w-[230px] h-[247px] object-cover absolute top-[0px] -right-[0px]'/>
        <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
        Dudas y comentarios
                </span>
                <h2 className="text-[83px]">Contáctanos</h2>
                <span className="text-[#E39C9D] font-inter  text-[24px]">
                Horario de Atención de 10 AM a 7 PM
                </span>
                <div className='w-full flex flex-col justify-center items-center mt-[36px]'>

                <div className='grid grid-cols-2 gap-x-[37px] gap-y-[50px]'>
                <a href='tel:+5255402356 ' className='flex flex-col items-center justify-center gap-[8px] w-[333px] h-[285px] rounded-[58px] cursor-pointer'
                style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}
                >
                    <img src="/assets/icons/contactPhone.svg" alt='contacto1' className='w-[64px] h-[62px] object-cover' />
                    <p className='text-[24px] font-medium'>+5255402356</p>
                </a>
                <a href='mailto:contacto@auroelia.com' className='flex flex-col items-center justify-center gap-[8px] w-[333px] h-[285px] rounded-[58px] cursor-pointer' style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                        <img src="/assets/icons/contactMail.svg" alt='contacto1' className='w-[82px] h-[61px] object-cover' />
                        <p className='text-[24px] font-medium'>contacto@auroelia.com</p>
                    </a>
                <a href='https://www.facebook.com/auroelia' className='flex flex-col items-center justify-center gap-[8px] w-[333px] h-[285px] rounded-[58px] cursor-pointer' style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                        <img src="/assets/icons/conctactFB.svg" alt='contacto1' className='w-[44px] h-[70px] object-cover' />
                        <p className='text-[24px] font-medium'>Auroelia</p>
                    </a>
                <a href='https://www.instagram.com/auroelia.na' className='flex flex-col items-center justify-center gap-[8px] w-[333px] h-[285px] rounded-[58px] cursor-pointer' style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                        <img src="/assets/icons/contactIG.svg" alt='contacto1' className='w-[64px] h-[73px] object-cover' />
                        <p className='text-[24px] font-medium'>auroelia.na</p>
                    </a>
                    
                </div>
                </div>
        </div>

    </div>
  )
}

export default Contacto