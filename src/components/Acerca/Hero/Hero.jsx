import React from 'react'

function Hero() {
    return (
        <div className='h-[900px] w-full relative '>
                <img src='/assets/Acerca/hero/heroAcerca.jpg' alt='hero' className='w-full h-[493px] object-cover ' />
                <div className='h-[348px] w-[840px] rounded-[58px] absolute bg-white bottom-[120px] left-0 right-0 mx-auto flex flex-col items-center justify-center'
                style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
                Conócenos
                </span>
                <h2 className="text-[83px]">Acerca de</h2>
                <p className='text-center w-[671px]'>Somos una marca mexicana que surge con la intención de ofrecer una experiencia única en el mundo de los arreglos florales. Nuestro objetivo es fusionar la belleza de la naturaleza con la creatividad artesanal, creando piezas que cautiven los sentidos y llenen el espacio con elegancia y distinción, 
creando una experiencia única en el arte de regalar.</p>
                </div>
        </div>
    )
}

export default Hero