import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero/Hero";
import Acerca from "@/components/Home/Acerca/Acerca";
import Populares from "@/components/Home/Populares/Populares";
import Nuestros from "@/components/Home/Nuestros/Nuestros";
import Testimonios from "@/components/Home/Testimonios/Testimonios";
import Suscribe from "@/components/Suscribe";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
    
   <title>Auroelia Shop</title>
    <meta name="description" content="Descubre Auroelia, una marca mexicana que ofrece una experiencia única en el mundo de los arreglos florales con piezas que cautivan los sentidos y llenan el espacio de elegancia y distinción, innovando el arte de regalar al implementar arreglos artesanales hechos a base de distintos materiales como jabón, velas, entre otros." />
    <meta name="keywords" content="flores, arreglos florales, flores de jabon, ramos, floreria, floral, jabon, velas, regalos, regalar" />
    <meta property="og:title" content="Auroelia Shop" />
    <meta property="og:description" content="Descubre Auroelia, una marca mexicana que ofrece una experiencia única en el mundo de los arreglos florales con piezas que cautivan los sentidos y llenan el espacio de elegancia y distinción, innovando el arte de regalar al implementar arreglos artesanales hechos a base de distintos materiales como jabón, velas, entre otros." />
    <meta property="og:image" content="/assets/ogimage.png" />
    <meta property="og:url" content="https://www.auroelia.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/assets/ogimage.png" />
    <link rel="icon" href="favicon.ico" />
  </Head>
    <div className="">
      <Hero/>
      <Acerca/>
      <Populares/>
      <Nuestros/>
      <Testimonios/>
    </div>
    </>
  );
}
