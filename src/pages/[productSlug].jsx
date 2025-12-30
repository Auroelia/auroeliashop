import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { client, urlFor } from "../lib/client";
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
  const [arreglos, setArreglos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productosData, complementosData, arreglosData] = await Promise.all([
          client.fetch('*[_type == "producto"]'),
          client.fetch('*[_type == "complemento"]'),
          client.fetch('*[_type == "arreglo"]')
        ]);
        setProductos(productosData);
        setComplementos(complementosData);
        setArreglos(arreglosData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Buscar el producto por el productSlug en el arreglo Products
  const product = products.find(
    (p) => p.slug?.current === productSlug
  );

  // Obtener productos similares (del mismo arreglo)
  const similarProducts = products.filter(
    (p) => p._id !== product?._id && p.arreglo?._ref === product?.arreglo?._ref
  );

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (product?.imagenes && product.imagenes.length > 0) {
      setSelectedImage(product.imagenes[0]);
    }
  }, [product]);

  const [size, setSize] = useState({});

  useEffect(() => {
    if (product?.tamanos && product.tamanos.length > 0) {
      setSize(product.tamanos[0]);
    }
  }, [product]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Función segura para obtener URL de imagen
  const getImageUrl = (imagen) => {
    try {
      if (!imagen) return null;
      return urlFor(imagen).width(500).height(500).url();
    } catch (error) {
      console.error('Error al obtener URL de imagen:', error);
      return null;
    }
  };

  // Función para obtener la URL del modelo 3D
  const get3DModelUrl = () => {
    try {
      if (product?.file?.asset?._ref) {
        const ar = product.file.asset._ref;
        return ar
          .replace("file-", "https://cdn.sanity.io/files/xyulam1e/production/")
          .replace("-glb", ".glb");
      }
      return null;
    } catch (error) {
      console.error('Error al obtener URL del modelo 3D:', error);
      return null;
    }
  };

  const modelUrl = product ? get3DModelUrl() : null;

  // Mostrar loading mientras carga
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#E39C9D] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-500">Cargando producto...</span>
        </div>
      </div>
    );
  }

  // Si no se encuentra el producto
  if (!loading && !product) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <span className="text-2xl font-bold text-gray-600">Producto no encontrado</span>
        <Link href="/Tienda" className="text-[#E39C9D] hover:underline">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      {product && (
        <div className="w-full h-full flex flex-col justify-between max-w-[1440px] min-w-sm mx-auto">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-[10px] lg:gap-[54px]">
            {/* Móvil */}
            <div className="w-full h-full lg:hidden flex flex-row overflow-x-scroll no-scrollbar gap-[10px] px-8 my-4">
              {product?.imagenes && product.imagenes.length > 0 &&
                product.imagenes.map((imagen, index) => {
                  const imgUrl = getImageUrl(imagen);
                  return (
                    <div
                      key={index}
                      className="w-[321px] h-[338px] md:w-[520px] md:h-[530px] flex-shrink-0"
                    >
                      {isLoading && <Skeleton width={321} height={338} />}
                      {imgUrl && (
                        <Image
                          width={321}
                          height={338}
                          src={imgUrl}
                          alt={product.nombre || 'Producto'}
                          className="w-full h-full object-cover rounded-[30px]"
                          onLoadingComplete={handleLoadingComplete}
                        />
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Desktop */}
            <div className="w-full hidden lg:flex flex-col items-end gap-[44px]">
              {isLoading && <Skeleton height={486} width={427} />}
              {selectedImage && getImageUrl(selectedImage) && (
                <Image
                  width={427}
                  height={486}
                  src={getImageUrl(selectedImage)}
                  alt={product.nombre || 'Producto'}
                  className="w-[427px] h-[486px] object-cover rounded-[30px] cursor-pointer"
                  onClick={() => product?.imagenes?.[0] && handleImageClick(product.imagenes[0])}
                  onLoadingComplete={handleLoadingComplete}
                />
              )}

              {product?.imagenes?.[1] && product?.imagenes?.[2] && (
                <div className="w-[427px] flex justify-between items-center">
                  {getImageUrl(product.imagenes[1]) && (
                    <Image
                      width={188}
                      height={194}
                      src={getImageUrl(product.imagenes[1])}
                      alt={product.nombre || 'Producto'}
                      className="w-[188px] h-[194px] object-cover rounded-[30px] cursor-pointer"
                      onClick={() => handleImageClick(product.imagenes[1])}
                    />
                  )}
                  {getImageUrl(product.imagenes[2]) && (
                    <Image
                      width={188}
                      height={194}
                      src={getImageUrl(product.imagenes[2])}
                      alt={product.nombre || 'Producto'}
                      className="w-[188px] h-[194px] object-cover rounded-[30px] cursor-pointer"
                      onClick={() => handleImageClick(product.imagenes[2])}
                    />
                  )}
                </div>
              )}

              {/* Visor 3D - Desktop */}
              {modelUrl && (
                <div className="w-[427px] flex flex-col items-center">
                  <span className="text-[#E39C9D] font-inter font-bold text-[18px] mb-4">
                    Vista 3D Interactiva
                  </span>
                  <div className="w-[427px] h-[250px] rounded-[30px] overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 shadow-lg flex items-center justify-center">
                    <model-viewer
                      src={modelUrl}
                      ar
                      ar-modes="webxr scene-viewer quick-look"
                      camera-controls
                      shadow-intensity="1.98"
                      exposure="0.86"
                      shadow-softness="0.97"
                      auto-rotate
                      camera-target="0.12m 0.15m 0.1m "
                      min-camera-orbit="auto 50deg auto"
                      max-camera-orbit="auto 120deg auto"
                      field-of-view="40deg"
                      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translatex(55px)' }}
                    >
                      <button 
                        slot="ar-button" 
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#E39C9D] text-white px-6 py-3 rounded-lg font-inter font-bold text-sm hover:bg-[#d08687] transition-colors"
                      >
                        Ver en tu espacio
                      </button>
                    </model-viewer>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full flex flex-row justify-center">
              <div className="w-[90%] flex flex-col px-4">
                <span className="font-inter text-[20px] lg:text-[42px] font-bold">
                  {product.nombre}
                </span>
                {product.tamanos && product.tamanos.length > 0 && (
                  <div className="flex flex-row items-center gap-[10px]">
                    {product.tamanos.map((t, index) => (
                      <div
                        key={index}
                        className={`${t === size ? "font-bold" : ""} w-[105px] bg-[#E39C9D] flex justify-center rounded-lg my-2 px-2 py-1 cursor-pointer`}
                        onClick={() => setSize(t)}
                      >
                        {t.tamano}
                      </div>
                    ))}
                  </div>
                )}
                <span className="font-inter text-[20px] lg:text-[36px] xl:mt-[17px]">
                  ${size?.precio ? size.precio.toLocaleString('es-MX', { minimumFractionDigits: 2 }) : '0.00'}
                </span>
                <div className="flex flex-row items-center gap-[23px] xl:mt-[32px]">
                  <button
                    className="w-[40px] h-[40px] rounded-[11px] border-[2px] border-[#E39C9D] text-[#E39C9D] text-[24px] flex flex-col items-center justify-center"
                    onClick={() => {
                      if (counter - 1 > 0) {
                        setCounter(counter - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="font-inter text-[32px]">{counter}</span>
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

                {/* Visor 3D - Móvil */}
                {modelUrl && (
                  <div className="lg:hidden w-full flex flex-col items-center mt-8">
                    <span className="text-[#E39C9D] font-inter font-bold text-[16px] mb-4">
                      Vista 3D Interactiva
                    </span>
                    <div className="w-full h-[350px] rounded-[20px] overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 shadow-lg">
                      <model-viewer
                        src={modelUrl}
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        shadow-intensity="1.98"
                        exposure="0.86"
                        shadow-softness="0.97"
                        auto-rotate
                        camera-target="0m 0m 0m"
                        min-camera-orbit="auto 87deg auto"
                        max-camera-orbit="auto 101deg auto"
                        style={{ width: '100%', height: '100%' }}
                      >
                        <button 
                          slot="ar-button" 
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#E39C9D] text-white px-4 py-2 rounded-lg font-inter font-bold text-sm hover:bg-[#d08687] transition-colors"
                        >
                          Ver en tu espacio
                        </button>
                      </model-viewer>
                    </div>
                  </div>
                )}

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

                <div className="lg:w-[481px] flex flex-row gap-[10px] lg:gap-[0px] lg:justify-center items-center mt-[58px]">
                  <div
                    className="font-inter text-[15px] lg:text-[24px] font-bold w-[200px] h-[45px] lg:w-[300px] lg:h-[60px] rounded-[6px] bg-[#E39C9D] flex items-center justify-center cursor-pointer hover:bg-[#d08687] transition-colors"
                    onClick={() => {
                      addToCart(product, size, counter);
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
                </div>
                <div className="h-[1px] lg:w-[481px] bg-[#E39C9D] mt-[37px]" />
                {/* Materiales */}
                <div className="lg:w-[481px] flex flex-col justify-between items-center mt-[11px]">
                  <div className="w-full flex flex-row items-center justify-between gap-[19px]">
                    <div className="flex flex-row items-center gap-[19px]">
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/materiales.svg"
                        alt="material"
                        className="w-[40px] h-[40px]"
                      />
                      <span className="font-inter text-[20px]">Materiales</span>
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
                    {arreglos.map((arreglo, index) => (
                      arreglo._id === product.arreglo?._ref && arreglo.material
                    ))}
                  </p>
                </div>
                <div className="h-[1px] lg:w-[481px] bg-[#E39C9D] mt-[13px]" />
                <div className="lg:w-[481px] flex flex-col justify-between items-center mt-[11px]">
                  <div className="w-full flex flex-row items-center justify-between gap-[19px]">
                    <div className="flex flex-row items-center gap-[19px]">
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/envios.svg"
                        alt="material"
                        className="w-[40px] h-[40px]"
                      />
                      <span className="font-inter text-[20px]">Envíos</span>
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
                    {arreglos.map((arreglo, index) => (
                      arreglo._id === product.arreglo?._ref && arreglo.envios
                    ))}
                  </p>
                </div>
                <div className="h-[1px] lg:w-[481px] bg-[#E39C9D] mt-[13px]" />
                <div className="lg:w-[481px] flex flex-col justify-between items-center mt-[11px] mb-4 lg:mb-0">
                  <div className="w-full flex flex-row items-center justify-between gap-[19px]">
                    <div className="flex flex-row items-center gap-[19px]">
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/cuidados.svg"
                        alt="material"
                        className="w-[40px] h-[40px]"
                      />
                      <span className="font-inter text-[20px]">Cuidados</span>
                    </div>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/icons/up.svg"
                      alt="arrow"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <ol className="w-full text-[16px] font-medium leading-[23px] mt-[8px]">
                    <li>1.- Evita la exposición al sol y al calor excesivo</li>
                    <li>2.- Limpia suavemente con un paño suave y seco para remover el polvo.</li>
                    <li>3.- Coloca el arreglo en un lugar fresco y seco protegiéndolo así de posibles daños.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center text-center mt-[97px]">
            <span className="text-[#E39C9D] font-inter font-bold text[18px] lg:text-[32px]">
              Recomendaciones
            </span>
            <h2 className="text-[25px] lg:text-[83px]">
              También podría gustarte
            </h2>
            <div className="flex gap-[22px] mt-[29px]">
              {similarProducts.slice(0, 4).map((producto) => {
                const imgUrl = getImageUrl(producto?.imagenes?.[0]);
                return (
                  <div
                    key={producto._id}
                    className="w-[229px] shadow-popular rounded-[30px] cursor-pointer"
                    onClick={() => producto.slug?.current && router.push(`/${producto.slug.current}`)}
                  >
                    {imgUrl ? (
                      <Image
                        width={263}
                        height={173}
                        src={imgUrl}
                        alt={producto.nombre || 'Producto'}
                        className="w-full h-[263px] object-cover rounded-t-[30px]"
                      />
                    ) : (
                      <div className="w-full h-[263px] bg-gray-200 rounded-t-[30px] flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Sin imagen</span>
                      </div>
                    )}
                    <div className="h-[100px] flex flex-col justify-center px-[22px]">
                      <span className="font-inter font-bold text-[16px] text-start">
                        {producto.nombre || 'Sin nombre'}
                      </span>
                      <div className="flex justify-between items-center">
                        <span className="font-inter font-bold text-[16px]">
                          ${producto?.tamanos?.[0]?.precio?.toLocaleString('es-MX', { minimumFractionDigits: 2 }) || '0.00'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[950px] flex justify-end items-center gap-[15px]">
              <Link href="/Tienda" className="mt-[43px] mb-[42px]">
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
