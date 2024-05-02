import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AppContext } from '@/context/AppContext'

function Navbar() {

  const {cart} = useContext(AppContext)

  const [open, setOpen] = useState(false)

  return (
    <>
    <div className='hidden h-[120px] w-full lg:flex flex-row justify-center items-center gap-x-[52px]'>
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
        {
          cart.length>0&&
          <div className='absolute top-0 -right-[7px] rounded-full w-[10px] h-[10px] bg-[#E39C9D]'/>

        }
        </Link>
        <Image src="/assets/icons/fb.svg" width={30} height={30}
        className='cursor-pointer w-[13px] h-[21px]'
        alt="carrito de compras"  />
        <Image
         className='cursor-pointer w-[21px] h-[24px]'
        src="/assets/icons/ig.svg" width={30} height={30} alt="carrito de compras" />
      </div>

    </div>
    <div className='w-full h-full lg:hidden flex flex-col justify-center relative'>
        <div className='flex flex-row justify-around mt-[150px]'>
        <Link href={"/"}>
        <Image src='/assets/logonav.png' width={100} height={100} alt='logo' className='w-[112px] h-[24px] ' />
      </Link>

      <div className='flex gap-[19px] items-center'>
        <Link href={"/Carrito"} className='relative'  >
        <Image src="/assets/icons/carrito.svg" width={30} height={30} className='cursor-pointer w-[22px] h-[26px] lg:w-[20px] lg:h-[22px]' alt="carrito de compras" />
        {
          cart.length>0&&
          <div className='absolute top-0 -right-[7px] rounded-full w-[10px] h-[10px] bg-[#E39C9D]'/>

        }
        </Link>
        {
          !open? 

          <Image src="/assets/icons/menuMob.svg" width={30} height={30}
          className={'cursor-pointer w-[35px] h-[21px] lg:w-[13px] lg:h-[21px]'}
          alt="carrito de compras" 
          onClick={()=>setOpen(!open)	}
          />
          :
          <Image src="/assets/icons/navbar/close.svg" width={30} height={30}
          className={'cursor-pointer w-[35px] h-[21px] lg:w-[13px] lg:h-[21px]'}
          alt="cerrar menu" 
          onClick={()=>setOpen(!open)	}
          />
        }
          
      </div>

       

        </div>
        <div className={!open&&"hidden"}>
        <div className='font-inter text-[26px] text-center my-[59px] gap-[29px] flex flex-col '>
          <Link href={"/Acerca"}>
            Acerca De
          </Link>
          <Link href={"/Flores"}>
            Flores
          </Link>
          <Link href={"/Luxury"}>
            Luxury
          </Link>
          <Link href={"/Contacto"}>
            Contacto
          </Link>
        </div>
        <div className='w-full flex flex-row justify-center'>

        <div className='h-[1px] bg-[#E39C9D] w-[80%]'>

        </div>
        </div>
        <div className='w-full flex flex-row justify-center items-center gap-[55px] my-[26px]'>

        <Image src="/assets/icons/navbar/fbnav.svg" width={100} height={100} className='w-[26px] h-[25px] object-fit'/>
        <Image src="/assets/icons/navbar/ignav.svg" width={100} height={100} className='w-[26px] h-[25px] object-fit'/>
        <Image src="/assets/icons/navbar/telnav.svg" width={100} height={100} className='w-[26px] h-[25px] object-fit'/>
        <Image src="/assets/icons/navbar/mailnav.svg" width={100} height={100} className='w-[26px] h-[25px] object-fit'/>

        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar