import { useRouter } from 'next/router';
import React from 'react'

function Promo() {

  const router = useRouter();

  return (
    <>
    {
      router.pathname.startsWith("/Login") || router.pathname.startsWith("/Dashboard") ? (
        <div></div>
      ) : (
        <>
    <div className=' w-full h-[35px] bg-[#E39C9D] flex flex-row justify-center items-center mt-[20px] lg:mt-[0px] '>
      <p className='text-[10px] md:text-[12px] font-bold  text-center '>
      FLASH PROMO 10% SOLO HOY USANDO EL CUPÓN 10DeMayo
      </p>
      </div>
      </>
      )}
  </>
  )
}

export default Promo