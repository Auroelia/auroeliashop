import React, { useEffect, useState } from "react";
import DatosModal from "./DatosModal";

function Envio({ openModal, isModalOpen, closeModal }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [dedication, setDedication] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("novia/o");
  const [generatedMessages, setGeneratedMessages] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleDedicationChange = (e) => {
    setDedication(e.target.value);
  };

  const handlePersonChange = (e) => {
    setSelectedPerson(e.target.value);
  };

  const messagesNovie = [
    `Para mi amor en su día especial `,
    `Eres el amor de mi vida, te amo `,
    `Gracias por hacerme feliz `,
    `Eres mi todo `,
  ];

  const messagesMadre = [
    `Para la mejor madre del mundo `,
    `Gracias por todo tu amor y apoyo `,
    `Eres mi ejemplo a seguir `,
    `Te quiero mucho, mamá `,
  ];
  const messagePadre = [
    `Feliz día del padre `,
    `Gracias por ser el mejor papá `,
    `Eres mi héroe `,
    `Te quiero mucho, papá `,
  ];
  const messagesAmigue = [
    `Eres una persona increíble, te admiro mucho `,
    `Gracias por estar siempre ahí para mí `,
    `Eres mi compañere de aventuras, te quiero mucho `,
    `Celebremos nuestra amistad, ¡felicidades! `,
  ];

  const handleGenerateMessages = () => {
    let messages = [];
    switch (selectedPerson) {
      case "novia/o":
        messages = messagesNovie;
        break;
      case "madre":
        messages = messagesMadre;
        break;
      case "padre":
        messages = messagePadre;
        break;
      case "amiga/o":
        messages = messagesAmigue;
        break;
      default:
        break;
    }

    const randomIndex = Math.floor(Math.random() * messages.length);
    setGeneratedMessages(messages[randomIndex]);
  };

  useEffect(() => {
    setDedication(generatedMessages);
  }, [generatedMessages]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[349px]">
        <span className="text-[16px] font-inter font-bold">
          Selecciona Fecha y Hora de Entrega
        </span>
        <input
          type="date"
          className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <select
          className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
          value={selectedTime}
          onChange={handleTimeChange}
        >
          <option value="12-4">Elige un horario</option>
          <option value="12-4">12pm-4pm</option>
          {new Date().getHours() < 16 && <option value="4-7">4pm-7pm</option>}
        </select>
        <span className="text-[16px] font-inter font-bold">
          Escribe o elige una dedicatoria
        </span>
        <textarea
          placeholder="Escribe el mensaje"
          className="h-[164px] w-full border-[1px] border-[#E39C9D] pl-4 pt-4 mt-[10px]"
          value={dedication}
          onChange={handleDedicationChange}
        />
        <div className="w-full flex justify-between items-center">
          <span className="text-[12px] font-light">Genera un mensaje para</span>
          <div className="w-[111px] h[30px] border-[2px] border-[#E39C9D] rounded-[6px] flex justify-between px-2">
            <select value={selectedPerson} onChange={handlePersonChange}>
              <option value="novia/o">Novia/o</option>
              <option value="madre">Madre</option>
              <option value="padre">Padre</option>
              <option value="amiga/o">Amiga/o</option>
            </select>
          </div>
          <div>
            <button
              className="w-[84px] h-[30px] rounded-[6px] bg-[#E39C9D]"
              onClick={handleGenerateMessages}
            >
              Generar
            </button>
          </div>
        </div>
        <div className="">
          <button
            className="w-[349px] h-[40px] rounded-[6px] bg-[#E39C9D] mt-[10px] font-bold text-[24px] font-inter lg:mt-[20px]"
            onClick={openModal}
          >
            Pagar
          </button>
          {isModalOpen && (
            <DatosModal
              isOpen={isModalOpen}
              close={closeModal}
              title="Título del Modal"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Envio;
