import { client } from "@/lib/client";
import { useEffect, useState } from "react";
import { urlForImage } from "../../../../sanity/lib/image";

function Venta({ venta }) {
  const [products, setProducts] = useState([]);
  
  const fetchProductDetails = async (productId) => {
    const product = await client.fetch(`*[_id == "${productId}"]`);
    return product[0]; // Devuelve el primer producto que coincida con el ID
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await Promise.all(
        venta?.productos.map((item) => fetchProductDetails(item?.product._ref))
      );
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [venta]);

  return (
    <div>
      {products?.map((product, index) => (
        
        <div key={index}>
          {console.log(venta)}
          <img src={urlForImage(product?.imagenes[0]?.asset._ref)} alt={product?.nombre}
          className="w-[311px] h-[152px] object-cover rounded-t-[21px]"
          />
          <div className="flex flex-col">
          <span className="font-inter text-[14px] font-bold leading-[16px]">{product?.nombre}</span>
          <span className="font-inter text-[14px]  leading-[16px]">${product?.precio}.00</span>
          <span className="font-inter text-[14px]  leading-[16px]">{venta?.cliente.nombre} {venta?.cliente.apellidos}</span>
          <div className="font-inter text-[14px]  leading-[16px]  flex gap-1 font-light w-[179px]  flex-wrap">
          <span>
            {venta.destinatario.direccion},</span>
            <span>{venta.destinatario.colonia},</span>
            <span>{venta.destinatario.estado},</span>
            <span>{venta.destinatario.delegación},</span>
            <span>{venta.destinatario.cp},</span>
            <span>{venta.destinatario.notas},</span>
          
          </div>
          <div className="w-full flex gap-[10px]">
              <img src="/assets/Iconos/editarVenta.svg" alt="Editar" className="cursor-pointer"/>
              <img src="/assets/Iconos/trashVenta.svg" alt="trash" className="cursor-pointer"/>
              <select>
                Selcciona un estado
              </select>
            </div>
          
          </div>
        </div>
      ))}
    </div>
  );
}


export default Venta;