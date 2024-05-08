import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import Suscribe from "@/components/Suscribe";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
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
    </>
    }
    
  </AppProvider>
  </div>
  )
}
