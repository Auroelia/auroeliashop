import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return<>
    <Promo/>
    <Navbar/>
    <Component {...pageProps} />
  </>
  
}
