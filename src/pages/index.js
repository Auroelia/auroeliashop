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
    <meta name="description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
    <meta name="keywords" content="seguridad privada, seguridad, escoltas, blindaje, protección, emergencia, investigación, auditoria, ejecutivo" />
    <meta property="og:title" content="Auroelia Shop" />
    <meta property="og:description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
    <meta property="og:image" content="/assets/ogimage.jpg" />
    <meta property="og:url" content="https://www.auroelia.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/assets/ogimage.jpg" />
    <link rel="icon" href="favicon.ico" />
  </Head>
    <div>
      <Hero/>
      <Acerca/>
      <Populares/>
      <Nuestros/>
      <Testimonios/>
    </div>
    </>
  );
}
