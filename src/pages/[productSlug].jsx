import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { client } from "../lib/client";
import { urlForImage } from "../../sanity/lib/image";

function Product() {
  const router = useRouter();
  const { productSlug } = router.query;

  const { cart, addToCart, removeFromCart } = useContext(AppContext);

  const [counter, setCounter] = useState(1);

  const [products, setProductos] = useState([]);
  console.log(products);

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

  console.log(product);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {product && (
        <div className="w-full h-full flex flex-col max-w-[1440px] min-w-sm mx-auto">
          <div className="w-full flex flex-row justify-center items-center ">
            <div className="w-full flex flex-col items-center justify-center">
              <img
                src={urlForImage(product?.imagenes[0]?.asset._ref)}
                alt={product.nombre}
                className="w-[427px] h-[486px] object-cover rounded-t-[30px]"
              />
            </div>
            <div className="w-full flex flex-col">
              <span className="font-inter text-[42px] font-bold ">
                {product.nombre}{" "}
              </span>
              <span className="font-inter text-[36px] ">
                ${product.precio}.00
              </span>
              <div className="flex flex-row items-center gap-[23px]">
                <button className="w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D] text-[#E39C9D] ">
                  -
                </button>
                <span className="font-inter text-[32px] ">{counter}</span>
                <button className="w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D] text-[#E39C9D] ">
                  +
                </button>
              </div>
              <p className="text-[16px] font-medium w-[481px]">
                {product.descripcion}
              </p>
              <div className="w-[481px] flex flex-row items-center">
                <h3 className="text-[36px] mt-[36px] w-full">Complementos</h3>
                <div>
                  <div className="  flex flex-row items-center justify-end gap-[21px] mt-[56px]">
                    <div className="rounded-full bg-[#d8d8d8] w-[64px] h-[64px] flex items-center justify-center">
                      <img
                        src="/assets/icons/izq.svg"
                        alt="arrow"
                        className="w-[25px] h-[40px]"
                      />
                    </div>
                    <div className="rounded-full bg-black w-[64px] h-[64px] flex items-center justify-center">
                      <img
                        src="/assets/icons/der.svg"
                        alt="arrow"
                        className="w-[25px] h-[40px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[481px] flex flex-row justify-between items-center mt-[27px]">
                {complementos.map((complemento, index) => (
                  <div
                    key={complemento._id}
                    className="w-full h-full flex flex-col items-center cursor-pointer"
                  >
                    <img
                      className="w-[142px] h-[120px] rounded-[6px] object-cover"
                      src={urlForImage(complemento?.imagen?.asset._ref)}
                    />
                    <span className="font-inter text-[16px]">
                      {complemento.nombre}
                    </span>
                    <span className="font-inter text-[16px]">
                      ${complemento.precio}.00
                    </span>

                    <div className="w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D]  mt-[29px] " />
                  </div>
                ))}
              </div>

              <div className="w-[481px] flex flex-row justify-between items-center mt-[58px]  ">
                <div className="font-inter text-[24px] font-bold w-[258px] h-[60px] rounded-[6px] bg-[#E39C9D] flex items-center justify-center">
                  Agregar a carrito
                </div>
                <div className="font-inter text-[24px] font-bold w-[204px] h-[60px] rounded-[6px] bg-black text-white flex items-center justify-center gap-[19px]">
                  <img
                    src="/assets/icons/ar.svg"
                    className="w-[21px] h-[37px]"
                  />
                  Ver en AR
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
