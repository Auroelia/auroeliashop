import { AppContext } from '@/context/AppContext'
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";

function Login() {
  const { loginUser } = useContext(AppContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", credentials);
      if (response.status === 200) {
        router.push("/Dashboard");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("El correo electrónico no existe");
        } else if (error.response.status === 402) {
          setError("Contraseña incorrecta");
        } else {
          setError("Error al iniciar sesión. Por favor, intenta nuevamente más tarde.");
        }
      } else {
        setError("Error al conectarse al servidor. Por favor, verifica tu conexión.");
      }
    }
  };

  return (
    <div className="w-full h-screen lg:h-[1000px] flex flex-row justify-center  relative ">
       <Head>
 <title>Auroelia</title>
 </Head>

      <div className="absolute top-0 h-screen lg:h-full w-full z-0">
        <Image
        width={1920}
        height={1080}
          src="/assets/Login/loginbg.jpg"
          alt="login background"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className='w-full h-full absolute top-0 left-0 bg-black/70'>

      </div>
      <div className="w-full h-full flex flex-col justify-center 2xl:mt-20 items-center  ">
      <div className=" w-[90%] lg:w-[50%] h-[50vh] lg:h-[50%] bg-[#282828]/20 border-2 rounded-xl mt-10 xl:mb-[20px] 2xl:mb-[100px] z-10 ">
        <div className="h-full w-full flex flex-col justify-center items-center text-center">
          
          <Image
          width={253}
          height={54}
          src='/assets/Login/logoLogin.png' alt='logo' className='w-[253px] h-[54px] object-cover' />
          
          <form
            className="w-[80%] flex flex-col md:items-center text-left mt-8"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="email"
              className="text-white font-inter text-[10px] lg:text-sm mb-1"
            >
              E-MAIL
            </label>
            <input
              type="email"
              className="border-2 border-[#d3cbc0] bg-white/70 md:w-3/4  "
              name="email"
              id="email"
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="text-white font-inter text-[10px] lg:text-sm mb-1 mt-2"
            >
              PASSWORD
            </label>
            <input
              type="password"
              className="border-2 border-[#d3cbc0] bg-white/70 md:w-3/4 "
              id="password"
              name="password"
              onChange={handleChange}
            />
            <div className="flex flex-col justify-center items-center md:w-3/4">
            {error ? (
                  <div className="col-span-2 w-full flex flex-row justify-center mt-4 text-red-500 font-Geometrica uppercase">
                    <p>{error}</p>
                  </div>
                ) : null}
              <button className="bg-[#E39C9DCC] hover:bg-[#ae7b7ccc] text-white px-4 py-2 mt-4 mb-4 w-full font-inter text-[15px] tracking-[2px]">
                Ingresar
              </button>
              <span className="hidden lg:block text-white uppercase font-inter text-[9px] lg:text-[12px]">
              2024 Auroelia® - All Rights Reserved{" "}
              </span>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
