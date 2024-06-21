import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

function Footer() {

  const router = useRouter();

  return (
      

    <div className='w-full h-full bg-black relative pt-4 lg:pt-0'>
      <div className='w-full lg:h-[400px] flex flex-col lg:flex-row justify-between items-center max-w-[1440px] min-w-sm mx-auto px-[150px]'>
        <div className='flex flex-col gap-[7px] lg:gap-[23px] items-center lg:items-start'>
          <img src='/assets/logoFooter.png' alt='logo' className='lg:w-[258px] w-[103px] h-[22px] lg:h-[55px]' />
          <h3 className='text-[#E39C9D] text-[15px] w-[215px] text-center lg:hidden'>Ideas que nacen
del corazón</h3>
<div className='flex justify-end gap-[19px] lg:hidden'>
    <img src='/assets/icons/carritob.svg' alt='carrito' className='w-[20px] h-[22px] text' />
    <img src='/assets/icons/fb.svg' alt='facebook' className='w-[13px] h-[21px]' />
    <img src='/assets/icons/ig.svg' alt='instagram' className='w-[21px] h-[24px]' />
    <img src='/assets/icons/telblanco.svg' alt='facebook' className='w-[21px] h-[21px]' />
    <img src='/assets/icons/mailblanco.svg' alt='instagram' className='w-[21px] h-[24px]' />
</div>
          <div className='items-center gap-[3px] hidden lg:flex'>
            <img src='/assets/icons/telefono.svg' alt='telefono' className='w-[32px] h-[31px]' />
            <a href='tel:+525626306790' className='text-white text-[24px] font-inter '>+52 56 2630 6790</a>
          </div>
          <div className='items-center gap-[2px] hidden lg:flex'>
            <img src='/assets/icons/correo.svg' alt='telefono' className='w-[32px] h-[31px]' />
            <a href='mailto:auroeliashop@gmail.com' className='text-white text-[24px] font-inter '>auroeliashop@gmail.com</a>
          </div>
        </div>
        <div className='flex flex-col text-white text-end gap-[17px]'>
          <h3 className='text-[#E39C9D] text-[30px] w-[215px] hidden lg:block'>Ideas que nacen
del corazón</h3>
<div className='flex flex-col text-[12px] lg:text-[15px] font-inter text-center lg:text-right gap-[10px] py-[15px] lg:py-[0px] '>
 
    <Link href={"/"}>Home</Link>
    <Link href={"/Acerca"}>Acerca</Link>
  
    <Link href={"/Tienda"}>Tienda</Link>
    
    <Link href={"/Contacto"}>Contacto</Link>
   
</div>
<div className='lg:flex justify-end gap-[19px] hidden'>
    <Link href={"/Carrito"}>
    <img src='/assets/icons/carritob.svg' alt='carrito' className='w-[20px] h-[22px] text' />
    </Link>
    <Link href={'https://www.facebook.com/auroelia'}>
    <img src='/assets/icons/fb.svg' alt='facebook' className='w-[13px] h-[21px]' />
    </Link>
    <Link href={'https://www.instagram.com/auroelia.na/'}>
    <img src='/assets/icons/ig.svg' alt='instagram' className='w-[21px] h-[24px]' />
    </Link>
</div>
        </div>

        

      </div>
      <div className='w-full flex flex-row justify-center'>

<div className='h-[1px] bg-[#E39C9D] w-[60%] lg:hidden'/>

</div>
<div className='w-full  flex flex-col lg:flex-row font-inter justify-center items-center text-white text-[12px] py-[15px] gap-[10px]'>
  <span>2024 Auroelia® </span>
  <Link href={"/Terminos"} className='text-[#E39C9D]'>Términos y Condiciones</Link>
  <Link href={"/Politicas"} className='text-[#E39C9D]'>Política de Privacidad</Link>
  <Link href={"/PoliticasEnvio"} className='text-[#E39C9D]'>Política de Envío</Link>
  <a href='https://www.instagram.com/jaizmora_agency/'>Website made by <span className='text-[#E39C9D]'>Jaizmora Digital Media </span> </a>

  

</div>
    </div>
  
  )
}

export default Footer