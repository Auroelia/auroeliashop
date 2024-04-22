import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero/Hero";
import Acerca from "@/components/Home/Acerca/Acerca";
import Populares from "@/components/Home/Populares/Populares";
import Nuestros from "@/components/Home/Nuestros/Nuestros";
import Testimonios from "@/components/Home/Testimonios/Testimonios";
import Suscribe from "@/components/Suscribe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero/>
      <Acerca/>
      <Populares/>
      <Nuestros/>
      <Testimonios/>
    </div>
  );
}
