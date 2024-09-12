import Image from 'next/image'
import React from 'react'

function Hero() { 
    return (
        <div className='h-[600px] lg:h-[900px] w-full relative '>
                <Image
                width={1920}
                height={493}
                src='/assets/Flores/floresHero.jpg' alt='hero' className='w-full h-[493px] object-cover ' />
                <div className='w-full h-[493px] absolute top-0 bg-black/60'/>
                <div className='h-[300px] lg:h-[348px] w-full lg:w-[840px] rounded-[26px] lg:rounded-[58px] absolute bg-white bottom-[0px] lg:bottom-[120px] left-0 right-0 mx-auto flex flex-col items-center justify-center'
                style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                <span className="text-[#E39C9D] font-inter font-bold text-[18px] lg:text-[32px]">
                Nuestras Flores
                </span>
                <h2 className="text-[45px] lg:text-[83px]">Ideas del corazón</h2>
                <p className='text-center w-[303px] lg:w-[671px]'>Descubre nuestra colección única de arreglos florales artesanales, hechos a mano con creatividad y calidad. Añade encanto a cualquier ocasión con nuestras obras maestras florales. Utilizamos una variedad de materiales seleccionados cuidadosamente, como el jabón, para ofrecerte una experiencia verdaderamente encantadora.
</p>
                </div>
        </div>
    )
}

export default Hero