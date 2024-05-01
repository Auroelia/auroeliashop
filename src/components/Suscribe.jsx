import { client } from "../lib/client";
import { useState } from "react";

function Suscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un nuevo documento en Sanity
    const newSubscription = {
      _type: 'suscripcion', // el tipo de documento en tu schema de Sanity
      email: email
    };

    try {
      await client.create(newSubscription);
      alert('¡Gracias por suscribirte!');
      setEmail('');
    } catch (error) {
      console.error('Error al crear la suscripción:', error);
    }
  };

  return (
    <div className='w-full h-full relative'>
      <div className='w-full h-full bg-black/50 absolute -z-10'/>
      <img src='/assets/suscribe/suscribebg.jpg' alt='suscribe-bg' className='w-full h-full object-cover absolute -z-20' />
      <div className='w-full h-[249px] flex flex-row justify-center items-center'>
        <div className='flex flex-col text-center gap-[6px]'>
          <span className='text-white font-inter text-[35px] font-bold leading-[42px]'>
            Suscríbete para grandes ofertas
          </span>
          <p className='text-white text-[16px] font-semibold leading-[24px]'>
            ¡No dejes de enterarte de nuestras mejores promociones y descuentos!
          </p>
          <form onSubmit={handleSubmit} className='flex flex-row gap-[20px] mt-[18px]'>
            <input
              type='email'
              placeholder='Correo Electrónico'
              className='w-[255px] lg:w-[481px] h-[58px]  border-0 outline-none rounded-[6px] placeholder:text-[#989898] placeholder:font-inter placeholder:text-[16px] placeholder:pl-[55px]'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type='submit' className='bg-[#E39C9D] w-[152px] h-[52px] text-[24px] font-semibold rounded-[6px]'>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Suscribe;