import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { client } from "../lib/client";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import Complemento from "@/components/Producto/Complemento";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

function Product() {
  const router = useRouter();
  const { productSlug } = router.query;

  const { cart, addToCart, removeFromCart } = useContext(AppContext);

  const [complementosActivos, setComplementosActivos] = useState([]);

  const [counter, setCounter] = useState(1);

  const [products, setProductos] = useState([]);


  const [complementos, setComplementos] = useState([]);

  const [arreglos, setArreglos] = useState([])

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch('*[_type == "producto"]')
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch('*[_type == "complemento"]')
      .then((data) => setComplementos(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch('*[_type == "arreglo"]')
      .then((data) => setArreglos(data))
      .catch((error) => console.error(error));
  }, []);

  // Buscar el producto por el productSlug en el arreglo Products
  const product = products.find(
    (product) => product.slug.current === productSlug
  );
  const similarProducts = products.filter(
    (product) => product.category === product.category
  );
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (product?.imagenes) {
      setSelectedImage(product.imagenes[0]);
    }
  
  
  }, [product]);
  

  const [size, setSize] = useState({})

  useEffect(() => {
    if (product?.tamanos) {
      setSize(product.tamanos[0]);
    }
  }, [product]);

  console.log(size)


const handleImageClick = (image) => {
  setSelectedImage(image);
};


const [isLoading, setIsLoading] = useState(true);

const handleLoadingComplete = () => {
  setIsLoading(false);
};

  return (
    
    <div className="w-full h-full relative overflow-hidden">
      {product && (
        <div className="w-full h-full flex flex-col justify-between  max-w-[1440px] min-w-sm mx-auto">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-[10px] lg:gap-[54px]  ">
            {/* Mobil */}
            <div className="w-full h-full lg:hidden flex flex-row overflow-x-scroll no-scrollbar gap-[10px] px-8 my-4 ">
              {product?.imagenes[0] &&
                product.imagenes.map((imagen, index) => (
                  <div
                    key={index}
                    className="w-[321px] h-[338px] md:w-[520px] md:h-[530px] flex-shrink-0"
                  >
                    {isLoading && <Skeleton width={321} height={338} />}
                    <Image
                    width={321}
                    height={338}
                      src={urlForImage(imagen)}
                      alt={product.nombre}
                      className="w-full h-full object-cover rounded-[30px]"
                      onLoadingComplete={ handleLoadingComplete }

                    />
                  </div>
                ))}
            </div>
            {/* Desktop */}
            <div className="w-full hidden lg:flex flex-col items-end  gap-[44px]">
              

{isLoading && <Skeleton height={486} width={427} />}

            <Image
            width={427}
            height={486}
  src={selectedImage ? urlForImage(selectedImage) : urlForImage(product.imagenes[0])}
  alt={product.nombre}
  className="w-[427px] h-[486px] object-cover rounded-[30px] cursor-pointer"
  onClick={() => handleImageClick(product?.imagenes[0]?.asset._ref)}
  onLoadingComplete={ handleLoadingComplete }

/>

    {product?.imagenes[1] && product?.imagenes[2] && (
      <div className="w-[427px] flex justify-between items-center ">
        <Image
        width={188}
        height={194}
          src={urlForImage(product?.imagenes[1]?.asset._ref)}
          alt={product.nombre}
          className="w-[188px] h-[194px] object-cover rounded-[30px] cursor-pointer"
          onClick={() => handleImageClick(product?.imagenes[1]?.asset._ref)}
        />
        <Image
        width={188}
        height={194}
          src={urlForImage(product?.imagenes[2]?.asset._ref)}
          alt={product.nombre}
          className="w-[188px] h-[194px] object-cover rounded-[30px] cursor-pointer"
          onClick={() => handleImageClick(product?.imagenes[2]?.asset._ref)}
        />
      </div>
    )}
  </div>
              <div className="w-full flex flex-row justify-center">

            <div className="w-[90%] flex flex-col  px-4 ">
              <span className="font-inter text-[20px] lg:text-[42px] font-bold ">
                {product.nombre}{" "}
              </span>
              {
                product.tamanos &&
                product.tamanos.length>0&&
                <div className="flex flex-row items-center gap-[10px]">
                {product.tamanos.map((t, index) => (
                  <div
                  key={index}
                  className={` ${t == size && "font-bold"} w-[105px] bg-[#E39C9D] flex justify-center rounded-lg my-2 px-2 py-1 cursor-pointer`}
                  onClick={() => setSize(t)}
                  >
                  {t.tamano}
                  </div>
                ))}
              </div>
              }
              <span className="font-inter text-[20px] lg:text-[36px] xl:mt-[17px] ">
                ${
               size?.precio}.00
              </span>
              <div className="flex flex-row items-center gap-[23px] xl:mt-[32px]">
                <button
                  className="w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[24px] flex flex-col items-center justify-center "
                  onClick={() => {
                    if (counter - 1 > 0) {
                      setCounter(counter - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="font-inter text-[32px] ">{counter}</span>
                <button
                  className="w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[24px] flex flex-col items-center justify-center"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </button>
              </div>
              <p className="text-[16px] font-medium w-[322px] md:w-[530px] lg:w-[481px] xl:mt-[30px]">
                {product.descripcion}
              </p>
              <div className="w-full h-full lg:w-[481px] flex flex-row items-center">
                <h3 className="text-[25px] lg:text-[36px] mt-[36px] w-full">
                  Complementos
                </h3>

              </div>
              <div className="lg:w-[481px] flex flex-row justify-between items-center mt-[27px]">
                {complementos.map((complemento, index) => (
                  <Complemento
                    key={index}
                    complemento={complemento}
                    setComplementosActivos={setComplementosActivos}
                    complementosActivos={complementosActivos}
                  />
                ))}
              </div>

              <div className="lg:w-[481px] flex flex-row gap-[10px] lg:gap-[0px] lg:justify-between items-center mt-[58px]  ">
                <div
                  className="font-inter text-[15px] lg:text-[24px] font-bold w-[160px] h-[37px] lg:w-[258px] lg:h-[60px] rounded-[6px] bg-[#E39C9D] flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    addToCart(product, size,counter);
                    if (complementosActivos.length > 0) {
                      complementosActivos.forEach((complemento) => {
                        addToCart(complemento, 1);
                      });
                    }
                    router.push("/Carrito");
                  }}
                >
                  Agregar a carrito
                </div>
                {
                  product.file?.asset?._ref&&
                  <div className="font-inter text-[15px] lg:text-[24px] font-bold  w-[160px] h-[37px] lg:w-[204px] lg:h-[60px] rounded-[6px] bg-black text-white flex items-center justify-center gap-[19px] cursor-pointer"
                  onClick={() => router.push(`/AR/${product.slug.current}`)}
                  >
                  <Image
                  width={21}
                  height={37}
                  alt="ar"
                    src="/assets/icons/ar.svg"
                    className="w-[13px] h-[22px] lg:w-[21px] lg:h-[37px]"
                    />
                  Ver en AR
                </div>
                  }
              </div>
              <div className="h-[1px] lg:w-[481px] bg-[#E39C9D] mt-[37px]" />
              {/* Materiales */}
              <div className="lg:w-[481px] flex flex-col justify-between items-center mt-[11px]">
                <div className="w-full flex flex-row  items-center justify-between gap-[19px]">
                  <div className="flex flex-row items-center gap-[19px]">
                    <Image
                    width={40}
                    height={40}
                      src="/assets/icons/materiales.svg"
                      alt="material"
                      className="w-[40px] h-[40px]"
                    />
                    <span className="font-inter text-[20px] ">Materiales</span>
                  </div>
                  <Image
                  width={40}
                  height={40}
                    src="/assets/icons/up.svg"
                    alt="arrow"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <p className="text-[16px] font-medium leading-[23px] mt-[8px]">
                  {
                    arreglos.map((arreglo, index) => (
                    arreglo._id == product.arreglo._ref && 
                    arreglo.material
                    ))
                    
                  }
                </p>
              </div>
              <div className="h-[1px] lg:w-[481px] bg-[#E39C9D] mt-[13px]" />
              <div className="lg:w-[481px] flex flex-col justify-between items-center mt-[11px]">
                <div className="w-full flex flex-row  items-center justify-between gap-[19px]">
                  <div className="flex flex-row items-center gap-[19px]">
                    <Image
                    width={40}
                    height={40}
                      src="/assets/icons/envios.svg"
                      alt="material"
                      className="w-[40px] h-[40px]"
                    />
                    <span className="font-inter text-[20px] ">
                      Envíos 
                    </span>
                  </div>
                  <Image
                  width={40}
                  height={40}
                    src="/assets/icons/up.svg"
                    alt="arrow"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <p className="text-[16px] font-medium leading-[23px] mt-[8px]">
                {
                    arreglos.map((arreglo, index) => (
                    arreglo._id == product.arreglo._ref && 
                    arreglo.envios
                    ))
                    
                  }
                </p>
              </div>
              <div className="h-[1px] lg:w-[481px] bg-[#E39C9D] mt-[13px]" />
              <div className="lg:w-[481px] flex flex-col justify-between items-center mt-[11px] mb-4 lg:mb-0">
                <div className="w-full flex flex-row  items-center justify-between gap-[19px]">
                  <div className="flex flex-row items-center gap-[19px]">
                    <Image
                    width={40}
                    height={40}
                      src="/assets/icons/cuidados.svg"
                      alt="material"
                      className="w-[40px] h-[40px]"
                    />
                    <span className="font-inter text-[20px] ">
                      Cuidados
                    </span>
                  </div>
                  <Image
                  width={40}
                  height={40}
                    src="/assets/icons/up.svg"
                    alt="arrow"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <ol className="w-full text-[16px] font-medium leading-[23px] mt-[8px] ">
                
                  <li>1.- Evita la exposición al sol y al calor excesivo</li>
                  <li>2.- Limpia suavemente con un paño suave y seco para remover el polvo.</li>
                  <li>3.- Coloca el arreglo en un lugar fresco y seco protegiéndolo así de posibles daños.</li>

                </ol>
                
              </div>
            </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center text-center mt-[97px] ">
            <span className="text-[#E39C9D] font-inter font-bold text[18px] lg:text-[32px]">
              Recomendaciones
            </span>
            <h2 className=" text-[25px] lg:text-[83px]">
              También podría gustarte
            </h2>
            <div className="flex gap-[22px] mt-[29px]">
              {similarProducts.slice(0, 4).map((producto) => (
                <div
                  key={producto._id}
                  className="w-[229px] shadow-popular rounded-[30px] cursor-pointer"
                  onClick={() => router.push(`${producto.slug.current}`)}

                >
                  <Image
                  width={263}
                  height={173}
                    src={urlForImage(producto?.imagenes[0]?.asset._ref)}
                    alt={producto.nombre}
                    className="w-full h-[263px] object-cover rounded-t-[30px]"
                  />
                  <div className="h-[100px]  flex flex-col  justify-center px-[22px]">
                    <span className="font-inter font-bold text-[16px] text-start">
                      {producto.nombre}
                    </span>
                    <div className="flex justify-between items-center ">
                     
                      <span className="font-inter font-bold text-[16px]">
                      ${producto?.tamanos?.[producto.tamanos.length - 1]?.precio}.00
                      </span>

                      {/* <img
                        src="/assets/icons/carrito.svg"
                        alt="carrito de compras"
                        className="w-[30px] h-[30px] cursor-pointer hover:scale-125 transition-all duration-300"
                        onClick={() => addToCart(producto, 1)}
                      /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[950px] flex justify-end items-center gap-[15px]">
              <Link href="/Tienda" className="mt-[43px] mb-[42px] ">
                <span className="text-[20px] font-medium hover:scale-110 transition-all duration-300 cursor-pointer">
                  Ver Tienda
                </span>
              </Link>
              <Image
              width={40}
              height={40}
                src="/assets/icons/arrow.svg"
                alt="arrow"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
