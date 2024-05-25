import React, { useEffect, useState } from "react";
import DatosModal from "./DatosModal";
import { useMediaQuery } from "react-responsive";

function Envio({ openModal, isModalOpen, closeModal, envio, setEnvio, enviarInfo, error }) {
  const [selectedPerson, setSelectedPerson] = useState("novia/o");
  const [generatedMessages, setGeneratedMessages] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    let today = new Date();
    let dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    setFecha(dateString);
    setEnvio((prevEnvio) => ({
      ...prevEnvio,
      fecha: dateString,
    }));
  }, [setEnvio]);

  const handleChangeEnvio = (e) => {
    const { name, value } = e.target;
    setEnvio((prevEnvio) => ({
      ...prevEnvio,
      [name]: value,
    }));
    if (name === 'fecha') {
      setFecha(value);
    }
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

  const handlePersonChange = (e) => {
    setSelectedPerson(e.target.value);
  };

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
    setEnvio((prevEnvio) => ({
      ...prevEnvio,
      dedicatoria: generatedMessages,
    }));
  }, [generatedMessages, setEnvio]);

  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="flex flex-col items-center">
      <div className="w-full lg:w-[349px]">
        <span className="text-[16px] font-inter font-bold">
          Selecciona Fecha y Hora de Entrega
        </span>
        
        <input
          type="date"
          id="fecha"
          className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] px-4"
          name="fecha"
          value={fecha}
          onChange={handleChangeEnvio}
          style={
            isLarge
              ? {
                  background: `#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_22.png) 97% 50% no-repeat`,
                }
              : {
                background: `#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_22.png) 97% 50% no-repeat`,
              }
          }
        />
        <select
          className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] my-[10px] px-4"
          name="horario"
          value={envio.horario}
          onChange={handleChangeEnvio}
          style={{
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'gray\' viewBox=\'0 0 140 140\' width=\'50\' height=\'50\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M20 40l50 50l50 -50\'/></svg>")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right .7em top 50%',
            backgroundSize: '.65em auto',
          }}
        >
          <option>Elige un horario</option>
          <option value="12-4">12pm-4pm</option>
          <option value="4-7">4pm-7pm</option>
        </select>
        <span className="text-[16px] font-inter font-bold">
          Escribe o elige una dedicatoria
        </span>
        <textarea
          placeholder="Escribe el mensaje"
          className="h-[164px] w-full border-[1px] border-[#E39C9D] pl-4 pt-4 mt-[10px]"
          name="dedicatoria"
          value={envio.dedicatoria}
          onChange={handleChangeEnvio}
        />
        <div className="w-full flex justify-between items-center">
          <span className="text-[12px] font-light">Genera un mensaje para</span>
          <div className="w-[111px] h[30px] border-[2px] border-[#E39C9D] rounded-[6px] flex justify-between px-2">
            <select
              value={selectedPerson}
              onChange={handlePersonChange}
              style={{
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
                backgroundColor: 'white',
                backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'gray\' viewBox=\'0 0 140 140\' width=\'50\' height=\'50\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M20 40l50 50l50 -50\'/></svg>")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right .7em top 50%',
                backgroundSize: '.65em auto',
                paddingRight: '2em',
                outline: 'none', // Agrega esta línea
              }}
            >
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

        <input
          type="text"
          placeholder="Firma"
          className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 col-span-2"
          name="firma"
          value={envio.firma}
          onChange={handleChangeEnvio}
        />
        <div className="">
          <button
            className="w-full lg:w-[349px] h-[40px] rounded-[6px] bg-[#E39C9D] mt-[10px] font-bold text-[24px] font-inter lg:mt-[20px]"
            onClick={() => {
              if (!error) {
                openModal();
                enviarInfo();
              }
            }}
          >
            Pagar
          </button>
          {error && <span className="text-red-500 text-sm">Por favor rellena todos los campos</span>}
          {isModalOpen && !error && (
            <DatosModal
              isOpen={isModalOpen}
              close={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Envio;
