import React, { useState } from 'react'

function Faqs() {

    const faqs = [
    {
        question: '¿Cuál es el tiempo de entrega de los arreglos florales?',
        answer: 'El tiempo de entrega de nuestros arreglos florales es de 24 a 48 horas hábiles, dependiendo de la disponibilidad de los productos y la zona de entrega. Para entregas en el mismo día, te recomendamos realizar tu pedido antes de las 12:00 pm.'
        },
        {
        question: '¿Puedo personalizar mi arreglo floral?',
        answer: 'Sí, ofrecemos la opción de personalizar tu arreglo floral con flores y colores de tu elección. Contáctanos para obtener más información sobre las opciones de personalización disponibles.'
        },
        {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos pagos con tarjeta de crédito, débito y PayPal. También ofrecemos la opción de pago en efectivo al momento de la entrega. Para obtener más información sobre los métodos de pago disponibles, contáctanos.'
        },
        {
        question: '¿Ofrecen servicio de envío a domicilio?',
        answer: 'Sí, ofrecemos servicio de envío a domicilio en toda la Ciudad de México y área metropolitana. Para envíos a otras zonas, contáctanos para obtener más información sobre las opciones de envío disponibles.'
    }
    ]

    const [open, setOpen] = useState(false)

  return (
    <div className='w-full h-full relative overflow-hidden'>
           <div className='w-full flex flex-col justify-center text-center  max-w-[1440px] min-w-sm mx-auto 
        px-[180px] '>
            <span className="text-[#E39C9D] font-inter font-bold text-[32px] ">
            Ideas  Artesanales
                </span>
                <h2 className="text-[65px]">¿Por qué elegirnos?</h2>
                <div className='flex flex-col gap-[36px]'>
                    
                {
                    faqs.map((faq,index) => (
                        <div key={index} className={`w-full flex  ${!open? "h-[110px]": "h-[48px]"} border-[#E39C9D] border-[1px] rounded-[6px]`}
                        onClick={() => setOpen(!open)}
                        >
                        <div  className='w-[95%] flex flex-col   justify-center text-start  px-[15px]'>
                        <span className={`${!open? "text-[#E39C9D]" : "text-black"} font-inter text-[20px] `}>
                        {faq.question}
                        </span>
                        <p className={` ${open && "hidden"} text-[16px] font-medium leading-[23px]`}>{faq.answer}</p>
                        </div>
                        <div className='w-[5%]'>
                            <img src='/assets/icons/open.svg' alt='faq' className='w-[30px] h-[34px]' />
                            </div>
                        </div>
                    ))         
                }
                
                </div>
                </div>
    </div>
  )
}

export default Faqs