import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import Suscribe from "@/components/Suscribe";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return<>
    <Promo/>
    <Navbar/>
    <Component {...pageProps} />
    <Suscribe/>
    <Footer/>
  </>
  
}
