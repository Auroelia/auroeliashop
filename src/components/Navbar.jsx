import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='h-[120px] w-full flex flex-row justify-center items-center gap-x-[52px]'>
      <Link href={"/"}>
        <Image src='/assets/logonav.png' width={100} height={100} alt='logo' />
      </Link>
      <div>
        <ul className='flex flex-row gap-x-[49px]'>
          <li className='text-[15px] font-medium hover:text-[#E39C9D] hover:scale-125 transition-all duration-300'>
            <Link href={"/Acerca"}>Acerca</Link>
          </li>
          
          <li className='text-[15px] font-medium hover:text-[#E39C9D] hover:scale-125 transition-all duration-300'>
            <Link href={"/Flores"}>Flores</Link>
          </li>
          <li className='text-[15px] font-medium hover:text-[#E39C9D] hover:scale-125 transition-all duration-300'>
            <Link href={"/Luxury"}>Luxury</Link>
          </li>
          <li className='text-[15px] font-medium hover:text-[#E39C9D] hover:scale-125 transition-all duration-300'>
            <Link href={"/Contacto"}>Contacto</Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-[19px]'>
        <Link href={"/Carrito"} className='relative'  >
        <Image src="/assets/icons/carrito.svg" width={30} height={30} className='cursor-pointer w-[20px] h-[22px]' alt="carrito de compras" />
        <div className='absolute top-0 -right-[7px] rounded-full w-[10px] h-[10px] bg-[#E39C9D]'>

        </div>
        </Link>
        <Image src="/assets/icons/fb.svg" width={30} height={30}
        className='cursor-pointer w-[13px] h-[21px]'
        alt="carrito de compras"  />
        <Image
         className='cursor-pointer w-[21px] h-[24px]'
        src="/assets/icons/ig.svg" width={30} height={30} alt="carrito de compras" />
      </div>

    </div>
  )
}

export default Navbar