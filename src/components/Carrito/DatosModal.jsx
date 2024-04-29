import React from 'react'

function DatosModal({isOpen,close,title}) {

  console.log(isOpen)

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
      className='bg-white w-[1053px] h-[576px] rounded-[54px] flex flex-col items-center justify-center relative'
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <img src='/assets/Carrito/cerrar.svg' alt='close' className='absolute top-4 right-4 m-[20px] cursor-pointer' onClick={close}/>

        <img src='/assets/Carrito/girasol.png' alt='girasol' className='absolute -top-60 -left-60 w-[469px] h-[489px] object-contain'/>
        <img src='/assets/Acerca/elegirnos/rosa.png' alt='girasol' className='absolute -bottom-60 -right-60 w-[469px] h-[489px] object-contain' />
        <h2 className='text-[80px] text-center'>Datos Bancarios</h2>
        <div className='flex flex-row justify-center items-center gap-[74px]'>
          <div className='w-[336px] flex flex-col'>
            <span className='text-center text-[32px] text-[#E39C9D] font-bold'>
              CUENTA
            </span>
            <p className='text-[22px] font-bold mt-[28px] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

          </div>
          <div className='w-[336px] flex flex-col '>
            <span className='text-center text-[32px] text-[#E39C9D] font-bold'>
                DEPÓSITOS
            </span>
            <p className='text-[22px] font-bold mt-[28px] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

          </div>

        </div>
        <div className='flex flex-row justify-center items-center gap-[46px] mt-[32px]'>
        <button className='w-[152px] h-[58px] rounded-[6px] bg-[#E39C9D] font-inter text-[24px] font-bold'>Aceptar</button>
        <button className='w-[152px] h-[58px] rounded-[6px] bg-black text-white font-inter text-[24px] font-bold'>Contacto</button>
        </div>
      </div>
    </div>
  );
}

export default DatosModal