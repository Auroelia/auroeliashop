import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full h-full bg-black relative'>
      <div className='w-full h-[400px] flex flex-col lg:flex-row justify-between items-center max-w-[1440px] min-w-sm mx-auto px-[150px]'>
        <div className='flex flex-col gap-[23px]'>
          <img src='/assets/logoFooter.png' alt='logo' className='w-[258px] h-[55px]' />
          <div className='flex items-center gap-[3px]'>
            <img src='/assets/icons/telefono.svg' alt='telefono' className='w-[32px] h-[31px]' />
            <a href='tel:+5255402356' className='text-white text-[24px] font-inter '>+52 5540 2356</a>
          </div>
          <div className='flex items-center gap-[2px]'>
            <img src='/assets/icons/correo.svg' alt='telefono' className='w-[32px] h-[31px]' />
            <a href='tel:+5255402356' className='text-white text-[24px] font-inter '>contacto@auroelia.com</a>
          </div>
        </div>
        <div className='flex flex-col text-white text-end gap-[17px]'>
          <h3 className='text-[#E39C9D] text-[30px] w-[215px]'>Ideas que nacen
del corazón</h3>
<ul className='text-[15px] font-inter'>
  <li>
    <Link href={"/Acerca"}>Acerca</Link>
    </li>
    <li>
    <Link href={"/Flores"}>Flores</Link>
    </li>
    <li>
    <Link href={"/Luxury"}>Luxury</Link>
    </li>
    <li>
    <Link href={"/Contacto"}>Contacto</Link>
    </li>
</ul>
<div className='flex justify-end gap-[19px]'>
    <img src='/assets/icons/carritob.svg' alt='carrito' className='w-[20px] h-[22px] text' />
    <img src='/assets/icons/fb.svg' alt='facebook' className='w-[13px] h-[21px]' />
    <img src='/assets/icons/ig.svg' alt='instagram' className='w-[21px] h-[24px]' />
</div>
        </div>

      </div>
    </div>
  )
}

export default Footer