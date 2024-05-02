import React from 'react'

function Hero() {
    return (
        <div className='h-[600px] lg:h-[900px] w-full relative '>
                <img src='/assets/Acerca/hero/heroAcerca.jpg' alt='hero' className='w-full h-[493px] object-cover object-center ' />
                <div className='h-[260px] lg:h-[348px] w-[385px] lg:w-[840px] rounded-[26px] lg:rounded-[58px] absolute bg-white bottom-[50px] lg:bottom-[120px] left-0 right-0 mx-auto flex flex-col items-center justify-center'
                style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                <span className="text-[#E39C9D] font-inter font-bold text-[18px] lg:text-[32px] ">
                Conócenos
                </span>
                <h2 className="text-[45px] lg:text-[83px]">Acerca de</h2>
                <p className='text-center w-[303px] lg:w-[671px] leading-[17px]'>Somos una marca mexicana que surge con la intención de ofrecer una experiencia única en el mundo de los arreglos florales. Nuestro objetivo es fusionar la belleza de la naturaleza con la creatividad artesanal, creando piezas que cautiven los sentidos y llenen el espacio con elegancia y distinción, 
creando una experiencia única en el arte de regalar.</p>
                </div>
        </div>
    )
}

export default Hero