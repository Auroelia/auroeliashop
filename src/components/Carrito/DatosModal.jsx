import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'


function DatosModal({isOpen,close}) {

  const router = useRouter();
  
  const handleClick = () => {
    close();
    router.push('/');
  };
  

  if (!isOpen) return null; 




  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    }}>
      <div
      className='bg-white w-[1053px] h-[576px] rounded-[54px] flex flex-col items-center justify-center relative mx-8'
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <img src='/assets/Carrito/cerrar.svg' alt='close' className='absolute top-4 right-4 m-[20px] cursor-pointer w-[24px] lg:w-[50px]' onClick={handleClick}/>

        <img src='/assets/Carrito/girasol.png' alt='girasol' className='absolute -top-24 -left-24 lg:-top-60 lg:-left-60 w-[182px] h-[190px] lg:w-[469px] lg:h-[489px] object-contain'/>
        <img src='/assets/Acerca/elegirnos/rosa.png' alt='girasol' className='absolute -bottom-28 -right-24 lg:-bottom-60 lg:-right-60 w-[182px] h-[190px] lg:w-[469px] lg:h-[489px] object-contain' />
        <span className='text-center text-[12px] lg:text-[32px] text-[#E39C9D] font-bold'>
              ¡Hemos registrado tu pedido!
            </span>
        <h2 className='text-[45px] w-[190px] lg:w-full lg:text-[80px] text-center'>Datos Bancarios</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[18px] lg:gap-[74px]'>
          <div className='w-[336px] flex flex-col items-center'>
            <span className='text-center text-[12px] lg:text-[32px] text-[#E39C9D] font-bold'>
              CUENTA
            </span>
            <p className='text-[12px] lg:text-[22px] font-bold mt-[12px]  lg:mt-[28px] text-center  w-[215px] lg:w-full '>
           Santander u Oxxo
           
            </p>
            <p className='text-[12px] lg:text-[22px] font-bold mt-[12px]  lg:mt-[28px] text-center  w-[215px] lg:w-full '>
           J Armando Zavala
           
            </p>
            <p className='text-[12px] lg:text-[22px] font-bold mt-[12px]  lg:mt-[28px] text-center  w-[215px] lg:w-full '>
           5579 0990 1683 5342

            </p>
            <p className='text-[12px] lg:text-[22px] font-bold mt-[12px]  lg:mt-[28px] text-center  w-[215px] lg:w-full '>
           0141-8020-0108-399426

            </p>

          </div>
        {/*   <div className='w-[336px] flex flex-col items-center '>
            <span className='text-center text-[12px] lg:text-[32px] text-[#E39C9D] font-bold'>
                DEPÓSITOS
            </span>
            <p className='text-[12px] lg:text-[22px] font-bold mt-[12px] lg:mt-[28px] text-center lg:text-left  w-[215px] lg:w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

          </div> */}

        </div>
        <div className='flex flex-row justify-center items-center gap-[46px] mt-[32px]'>
        <button className='w-[117px] h-[37px] lg:w-[152px] lg:h-[58px] rounded-[6px] bg-[#E39C9D] font-inter text-[15px] lg:text-[24px] font-bold'
       onClick={handleClick}
        >Aceptar</button>
        <Link href='/Contacto'>
        <button className='w-[117px] h-[37px] lg:w-[152px] lg:h-[58px] rounded-[6px] bg-black text-white font-inter text-[15px] lg:text-[24px] font-bold'>Contacto</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default DatosModal