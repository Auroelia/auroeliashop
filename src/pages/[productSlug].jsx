import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { client } from "../lib/client";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import Complemento from "@/components/Producto/Complemento";

function Product() {
  const router = useRouter();
  const { productSlug } = router.query;

  const { cart, addToCart, removeFromCart } = useContext(AppContext);

  const [complementosActivos, setComplementosActivos] = useState([]);

  const [counter, setCounter] = useState(1);

  const [products, setProductos] = useState([]);


  const [complementos, setComplementos] = useState([]);

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

  // Buscar el producto por el productSlug en el arreglo Products
  const product = products.find(
    (product) => product.slug.current === productSlug
  );
  const similarProducts = products.filter(
    (product) => product.category === product.category
  );
  const [selectedImage, setSelectedImage] = useState(null);

  const [size, setSize] = useState({})

  useEffect(() => {
    if (product?.tamanos) {
      setSize(product.tamanos[0]);
    }
  }, [product]);

  console.log(size)

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
                    <img
                      src={urlForImage(imagen)}
                      alt={product.nombre}
                      className="w-full h-full object-cover rounded-[30px]"
                    />
                  </div>
                ))}
            </div>
            {/* Desktop */}
            <div className="w-full hidden lg:flex flex-col items-end  gap-[44px]">
              <img
                src={urlForImage(product?.imagenes[0]?.asset._ref)}
                alt={product.nombre}
                className="w-[427px] h-[486px] object-cover rounded-[30px]"
              />
              {product?.imagenes[1] && product?.imagenes[2] && (
                <div className="w-[427px] flex justify-between items-center ">
                  <img
                    src={urlForImage(product?.imagenes[1]?.asset._ref)}
                    alt={product.nombre}
                    className="w-[188px] h-[194px] object-cover rounded-[30px]"
                  />
                  <img
                    src={urlForImage(product?.imagenes[2]?.asset._ref)}
                    alt={product.nombre}
                    className="w-[188px] h-[194px] object-cover rounded-[30px]"
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
                  className={` ${t == size && "font-bold"} w-full bg-[#E39C9D] flex justify-center rounded-lg my-2 px-2 py-1 cursor-pointer`}
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

               {/*  <div className="  flex flex-row items-center justify-end gap-[20px] lg:gap-[21px] mt-[56px]">
                  <div className="rounded-full bg-[#d8d8d8] w-[29px] h-[29px] lg:w-[64px] lg:h-[64px] flex items-center justify-center">
                    <img
                      src="/assets/icons/izq.svg"
                      alt="arrow"
                      className="w-[9px] h-[15px] lg:w-[25px] lg:h-[40px]"
                    />
                  </div>
                  <div
                    className="rounded-full bg-black 
                    w-[29px] h-[29px]
                    lg:w-[64px] lg:h-[64px] flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/der.svg"
                      alt="arrow"
                      className="w-[9px] h-[15px] lg:w-[25px] lg:h-[40px]"
                    />
                  </div>
                </div> */}
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
                  <div className="font-inter text-[15px] lg:text-[24px] font-bold  w-[160px] h-[37px] lg:w-[204px] lg:h-[60px] rounded-[6px] bg-black text-white flex items-center justify-center gap-[19px]">
                  <img
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
                    <img
                      src="/assets/icons/materiales.svg"
                      alt="material"
                      className="w-[40px] h-[40px]"
                    />
                    <span className="font-inter text-[20px] ">Materiales</span>
                  </div>
                  <img
                    src="/assets/icons/up.svg"
                    alt="arrow"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <p className="text-[16px] font-medium leading-[23px] mt-[8px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="h-[1px] lg:w-[481px] bg-[#E39C9D] mt-[13px]" />
              <div className="lg:w-[481px] flex flex-col justify-between items-center mt-[11px]">
                <div className="w-full flex flex-row  items-center justify-between gap-[19px]">
                  <div className="flex flex-row items-center gap-[19px]">
                    <img
                      src="/assets/icons/envios.svg"
                      alt="material"
                      className="w-[40px] h-[40px]"
                    />
                    <span className="font-inter text-[20px] ">
                      Envíos y devoluciones
                    </span>
                  </div>
                  <img
                    src="/assets/icons/up.svg"
                    alt="arrow"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <p className="text-[16px] font-medium leading-[23px] mt-[8px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="h-[1px] lg:w-[481px] bg-[#E39C9D] mt-[13px]" />
              <div className="lg:w-[481px] flex flex-col justify-between items-center mt-[11px] mb-4 lg:mb-0">
                <div className="w-full flex flex-row  items-center justify-between gap-[19px]">
                  <div className="flex flex-row items-center gap-[19px]">
                    <img
                      src="/assets/icons/cuidados.svg"
                      alt="material"
                      className="w-[40px] h-[40px]"
                    />
                    <span className="font-inter text-[20px] ">
                      Cuidados
                    </span>
                  </div>
                  <img
                    src="/assets/icons/up.svg"
                    alt="arrow"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <p className="text-[16px] font-medium leading-[23px] mt-[8px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
                >
                  <img
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
                        ${producto.precio}.00
                      </span>

                      <img
                        src="/assets/icons/carrito.svg"
                        alt="carrito de compras"
                        className="w-[30px] h-[30px] cursor-pointer hover:scale-125 transition-all duration-300"
                        onClick={() => addToCart(producto, 1)}
                      />
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
              <img
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
