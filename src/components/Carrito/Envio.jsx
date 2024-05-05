import React from 'react'
import DatosModal from './DatosModal'

function envio(
{openModal, isModalOpen, closeModal}

) {
  return (
    <div className=" flex flex-col items-center">
          <div className="w-[349px]">
            <span className=" text-[16px] font-inter font-bold">
              Selecciona Fecha y Hora de Entrega
            </span>
            <input
              type="date"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
            />
            <input
              type="time"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
            />
            <span className=" text-[16px] font-inter font-bold">
              Escribe o elige una dedicatoria
            </span>
            <textarea
              placeholder="Escribe el mensaje"
              className="h-[164px] w-full border-[1px] border-[#E39C9D] pl-4 pt-4 mt-[10px]"
            />
            <div className="w-full flex justify-between items-center">
              <span className="text-[12px] font-light">
                Genera un mensaje para
              </span>
              <div className="w-[111px] h[30px] border-[2px] border-[#E39C9D] rounded-[6px] flex justify-between px-2">
                Novia/o{" "}
                <img
                  src="/assets/icons/up.svg"
                  alt="arrow down"
                  className="rotate-180"
                />
              </div>

              <div>
                <button className="w-[84px] h-[30px] rounded-[6px] bg-[#E39C9D]">
                  Generar
                </button>
              </div>
            </div>
            <div className="">
              <button className="w-[349px] h-[40px] rounded-[6px] bg-[#E39C9D] mt-[10px] font-bold text-[24px] font-inter lg:mt-[20px]"
              onClick={openModal}
              >
                Pagar
              </button>
              {isModalOpen && (
     <DatosModal
     isOpen={isModalOpen} close={closeModal} title="Título del Modal"
   />
    )}
            </div>
          </div>
        </div>
  )
}

export default envio