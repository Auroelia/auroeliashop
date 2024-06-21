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
        <div className='w-full h-screen md:h-[800px] lg:h-[1050px] 2xl:h-[80vh] flex flex-col items-center max-w-[1440px] min-w-sm mx-auto relative '>
        <img src='/assets/petaloizq.png' alt='flores' className='w-[100px] md:w-[150px] lg:w-[221px] h-[100px] md:h-[150px] lg:h-[200px] object-cover absolute bottom-0 -left-[50px] lg:bottom-[100px] lg:-left-[0px]'/>
          <img src='/assets/Home/populares/petalo.png' alt='flores' className='w-[103px] h-[111px] lg:w-[230px] lg:h-[247px] object-cover absolute lg:top-[0px] lg:-right-[0px] right-0 top-[150px]
          
          '/>
        <span className="text-[#E39C9D] font-inter font-bold text-[18px] lg:text-[32px] mt-8 lg:mt-0">
        Dudas y comentarios
                </span>
                <h2 className="text-[45px] lg:text-[83px]">Contáctanos</h2>
                <span className="text-[#E39C9D] font-inter text-[18px] lg:text-[24px] w-[179px] text-center lg:w-full  ">
                Horario de Atención de 10 AM a 7 PM
                </span>
                <div className='w-full flex flex-col justify-center items-center mt-[36px]'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-[37px] gap-y-[50px]'>

                <a href='tel:+525626306790 ' className='flex flex-row lg:flex-col items-center justify-center gap-[25px] lg:gap-[8px] w-[326px] h-[90px] lg:w-[333px] lg:h-[285px] rounded-[26px] lg:rounded-[58px] cursor-pointer'
                style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}
                >
                    <div className='w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]  flex justify-center items-center'>
                    <img src="/assets/icons/contactPhone.svg" alt='contacto1' className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[64px] lg:h-[62px] object-cover' />
                    </div>
                    <div className='w-[100px] flex items-center'>
                    <p className='text-[12px] md:text-[15px] lg:text-[24px] font-medium'>5626306790</p>
                    </div>
                </a>
                <a href='mailto:contacto@auroelia.com' className='flex flex-row lg:flex-col items-center justify-center gap-[25px] lg:gap-[8px] w-[326px] h-[90px] lg:w-[333px] lg:h-[285px] rounded-[26px] lg:rounded-[58px] cursor-pointer' style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                <div className='w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]  flex justify-center items-center'>
                        <img src="/assets/icons/contactMail.svg" alt='contacto1' className='w-[48px] h-[31px] md:w-[52px] md:h-[40px]  lg:w-[82px] lg:h-[61px] object-cover' />
                        </div>
                        <div className='w-[100px] lg:w-[200px] flex items-center'>
                        <p className='text-[12px] md:text-[15px] lg:text-[24px] font-medium'>contacto@auroelia.com</p>
                        </div>
                    </a>
                <a href='https://www.facebook.com/auroelia' className='flex flex-row lg:flex-col items-center justify-center gap-[25px] lg:gap-[8px] w-[326px] h-[90px] lg:w-[333px] lg:h-[285px] rounded-[26px] lg:rounded-[58px] cursor-pointer' style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                <div className='w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]  flex justify-center items-center'>
                        <img src="/assets/icons/conctactFB.svg" alt='contacto1' className='w-[20] h-[32px] md:w-[30px] md:h-[50px] lg:w-[44px] lg:h-[70px] object-cover' />
                        </div>
                        <div className='w-[100px] flex items-center'>
                        <p className='text-[12px] md:text-[15px] lg:text-[24px] font-medium'>Auroelia</p>
                        </div>
                    </a>
                <a href='https://www.instagram.com/auroelia.na' className='flex flex-row lg:flex-col items-center justify-center gap-[25px] lg:gap-[8px] w-[326px] h-[90px] lg:w-[333px] lg:h-[285px] rounded-[26px] lg:rounded-[58px] cursor-pointer' style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                <div className='w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]  flex justify-center items-center'>
                        <img src="/assets/icons/contactIG.svg" alt='contacto1' className='w-[32px] h-[37px] md:w-[40px] md:h-[50px] lg:w-[64px] lg:h-[73px] object-cover' />
                        </div>
                        <div className='w-[100px] flex items-center'>
                        <p className='text-[12px] md:text-[15px] lg:text-[24px] font-medium'>auroelia.na</p>
                        </div>
                    </a>
                    
                </div>
                </div>
        </div>

    </div>
  )
}

export default Contacto