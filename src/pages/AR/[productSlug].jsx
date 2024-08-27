import { client } from "@/lib/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function AR() {
  const router = useRouter();
  const { productSlug } = router.query;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productSlug) {
      console.log("Product slug:", productSlug);
      setLoading(true); // Aseguramos que el estado de carga sea verdadero cuando comenzamos la carga
      client
        .fetch(`*[_type == "producto" && slug.current == $productSlug]`, { productSlug })
        .then((data) => {
          console.log("Fetched data:", data);
          if (data.length > 0) {
            setProduct(data[0]);
          } else {
            console.error("Product not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        })
        .finally(() => {
          setLoading(false); // Aseguramos que el estado de carga sea falso cuando terminamos
        });
    }
  }, [productSlug]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!product) {
    return <div className="flex items-center justify-center h-screen">Product not found</div>;
  }

  const ar = product.file.asset._ref;
  const newAR = ar
    .replace("file-", "https://cdn.sanity.io/files/xyulam1e/production/")
    .replace("-glb", ".glb");

  console.log(newAR);

  return (
    <div className="">
    
    <div className="flex flex-col justify-start lg:justify-center w-full h-screen overflow-hidden relative">
      
      <div className="  flex flex-row justify-center ">
        
        
        <model-viewer
        className=" relative"
        style={{ width: "100vh", height: "800px" }}
          src={newAR}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster="poster.webp"
          shadow-intensity="1.98"
          exposure="0.86"
          shadow-softness="0.97"
          auto-rotate
          camera-target="0m 0m 0m"
          min-camera-orbit="auto 87deg auto"
          max-camera-orbit="auto 101deg auto"
        >
          <div className="absolute top-5 left-5">
            <FaArrowLeft className="cursor-pointer w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]  text-[#E39C9D]"
            onClick={() => router.back()}
            />
           
          </div>
          <button slot="ar-button" className="absolute top-[60%] left-[10%] md:top-[50%] lg:top-[55%] md:left-[35%] lg:left-[40%] xl:hidden xl:bottom-[15%] xl:left-[45%] z-50 "  >
            <span  className="rounded-[4px] bg-[#E39C9D] text-white hover:text-[#d3cbc0] w-[200px] h-[45px] text-xl tracking-[4px] mt-8 font-apollo flex flex-col justify-center">
       Activate AR
            </span>
  </button>
        </model-viewer>
          
      </div>
    </div>
    </div>
  );
}

export default AR;