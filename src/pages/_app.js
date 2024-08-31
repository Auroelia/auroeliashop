import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import Suscribe from "@/components/Suscribe";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return(
  <div className="overflow-hidden">
  <AppProvider>
    {
      router.pathname.startsWith('/Dashboard') || router.pathname.startsWith('/studio') ?
      <Component {...pageProps} />
    :
    <>
    <div className="flex flex-col-reverse lg:flex-col">
  <Promo/>
  <Navbar/>
  </div>
  <Component {...pageProps} />
  <Suscribe/>
  <Footer/>
  <a href="https://wa.me/+525626306790?text=Hola!%20me%20podrías%20dar%20mas%20información?" 
        className='animate-pulse transition-all duration-700 hover:animate-none hover:scale-110 '
          style={{position: 'fixed', bottom: '25px', right: '25px', padding: '10px', backgroundColor: '#25D366', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', textDecoration: 'none'}}
         
          >
          <Image
          

          src="/assets/whatsapp.svg" alt="WhatsApp" width={100} height={100}
          
          style={{width: '48px', height: '48px'}}/>
        </a>
    </>
    }
    
  </AppProvider>
  </div>
  )
}
