import React from 'react'

function Hero() {
    return (
        <div className='h-[900px] w-full relative '>
                <img src='/assets/Luxury/heroLuxury.jpg' alt='hero' className='w-full h-[493px] object-cover ' />
                <div className='w-full h-[493px] absolute top-0 bg-black/60'/>
                <div className='h-[348px] w-[840px] rounded-[58px] absolute bg-white bottom-[120px] left-0 right-0 mx-auto flex flex-col items-center justify-center'
                style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}>
                <span className="text-[#E39C9D] font-inter font-bold text-[32px]">
                Arreglos Lujosos
                </span>
                <h2 className="text-[83px]">Elegancia Floral</h2>
                <p className='text-center w-[671px]'>Descubre nuestra exclusiva colección de arreglos florales de lujo, donde la elegancia y lo artesanal se fusionan en cada detalle. Desde impresionantes arreglos de novia hasta encantadores Ositos Fancy, celebra tus momentos especiales con la belleza incomparable de nuestras creaciones artesanales.
</p>
                </div>
        </div>
    )
}

export default Hero