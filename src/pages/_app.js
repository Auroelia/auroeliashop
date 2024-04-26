import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import Suscribe from "@/components/Suscribe";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return<>
  <AppProvider>
    <Promo/>
    <Navbar/>
    <Component {...pageProps} />
    <Suscribe/>
    <Footer/>
  </AppProvider>
  </>
  
}
