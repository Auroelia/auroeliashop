import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='h-[120px] w-full flex flex-row justify-center items-center gap-x-[52px]'>
      <div>
        <Image src='/assets/logonav.png' width={100} height={100} alt='logo' />
      </div>
      <div>
        <ul className='flex flex-row gap-x-[49px]'>
          <li>
            <Link href={"/Inicio"}>Inicio</Link>
          </li>
          <li>
            <Link href={"/Tienda"}>Tienda</Link>
          </li>
          <li>
            <Link href={"/Nosotros"}>Nosotros</Link>
          </li>
          <li>
            <Link href={"/Contacto"}>Contacto</Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-[19px]'>
        <Image src="assets/navbar/carrito.svg" width={30} height={30} className='w-[20px] h-[22px]' alt="carrito de compras" />
        <Image src="assets/navbar/fb.svg" width={30} height={30}
        className='w-[13px] h-[21px]'
        alt="carrito de compras"  />
        <Image
         className='w-[21px] h-[24px]'
        src="assets/navbar/ig.svg" width={30} height={30} alt="carrito de compras" />
      </div>

    </div>
  )
}

export default Navbar