import React from 'react'

function Elegirnos() {
  return (
    <div className='w-full h-full relative  mt-4 lg:mt-0'>
        <img src='/assets/Acerca/elegirnos/rosa.png' alt='elegirnos' className='w-[199px] h-[194px]
         xl:w-[627px] xl:h-[610px] object-cover absolute right-0 -bottom-[150px]  md:-bottom-[200px] lg:-bottom-[250px] lg:right-[100px] xl:-right-[300px] xl:-bottom-[50px] ' />

        <div className='w-full h-[610px] md:h-[410px] lg:h-[850px] xl:h-[500px] flex flex-col text-center xl:text-left lg:flex-row justify-between max-w-[1440px] min-w-sm mx-auto 
        lg:px-[180px] xl:px-[100px]
        '>
            <div className='w-full h-full flex flex-col justify-center items-center xl:items-start '>
            <span className="text-[#E39C9D] font-inter font-bold text-[18px] md:text-[25px] lg:text-[32px]">
            Ideas  Artesanales
                </span>
                <h2 className="text-[40px] md:text-[65px]">¿Por qué elegirnos?</h2>
                <div className='h- flex flex-col   gap-[20px] w-[90%] lg:w-[619px] text-[16px] lg:text-[29px] xl:text-[16px]  leading-[23px] lg:leading-[41px] xl:leading-[23px] '>

                <p>
                En nuestra marca de arreglos florales, nos dedicamos a ofrecerte más que solo flores. Cada producto que creamos es una expresión de amor, cuidado y dedicación artesanal, tanto hermosos como duraderos. 
                </p>
                <p>Nos comprometemos a proporcionarte una experiencia de compra excepcional, desde el momento en que realizas tu pedido hasta que recibes tu producto. Tu satisfacción es nuestra prioridad, y estamos aquí para ayudarte a expresar tus emociones de la manera más bella posible. </p>
                <p>
                Únete a nuestra comunidad de clientes satisfechos y haz tu pedido hoy para descubrir por qué somos la elección perfecta para tus necesidades florales.
                </p>
                </div>
                </div>

        </div>

    </div>
  )
}

export default Elegirnos