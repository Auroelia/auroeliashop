import { client } from "@/lib/client";
import { useContext, useEffect, useState } from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import { AppContext } from "@/context/AppContext";

function Venta({ venta, productoVenta, handleDeleteVenta }) {



  const [product, setProduct] = useState([]);
  
  const fetchProductDetails = async (productId) => {
    const product = await client.fetch(`*[_id == "${productId}"]`);
    return product[0]; // Devuelve el primer producto que coincida con el ID
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProduct = await(
       fetchProductDetails(productoVenta?.product._ref)
      );
      setProduct(fetchedProduct);
    };

    fetchProducts();
  }, [venta]);


  return (
    <div>
      
        <div className="rounded-t-[21px]" style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}
        
        >
          {
            product?.imagenes&&

          <img
          src={urlForImage(product?.imagenes[0].asset._ref)}
          alt={product?.nombre}
          className="w-[311px] h-[152px] object-cover rounded-t-[21px]"
          />
        }
          <div className="flex flex-col h-[300px] justify-center px-[25px] rounded-b-[21px] gap-[5px]">
            <span className="font-inter text-[14px] font-bold leading-[16px]">
              {product?.nombre}
            </span>
            <div className="font-inter text-[14px]  leading-[16px] flex flex-wrap gap-[10px]">
              <span>
                ${product?.precio}.00 
                </span>
              <span>
                {venta?.cupon}
                </span>
              
            </div>
            <span className="font-inter text-[14px]  leading-[16px]">
              {venta?.cliente.nombre} {venta?.cliente.apellidos}
            </span>
            <span className="font-inter text-[14px]  leading-[16px]">
              {venta?.destinatario.nombre} {venta?.destinatario.telefono}
            </span>
            <span className="font-inter text-[14px]  leading-[16px]">
              {venta?.envio.fecha} {venta?.envio.horario}
            </span>
            <div className="font-inter text-[14px]  leading-[16px] flex flex-wrap w-[250px] ">
              {venta?.envio.dedicatoria} 
            </div>
            <span className="font-inter text-[14px]  leading-[16px]">
              {venta?.envio.firma} 
            </span>
            <div className="font-inter text-[14px]  leading-[16px]  flex gap-1 font-light w-[250px]  flex-wrap">
              <span>{venta.destinatario.direccion},</span>
              <span>{venta.destinatario.colonia},</span>
              <span>{venta.destinatario.estado},</span>
              <span>{venta.destinatario.delegacion},</span>
              <span>{venta.destinatario.cp},</span>
              <span>{venta.destinatario.notas},</span>
            </div>
            <div className="w-full flex gap-[10px] mt-[10px]">
              <img
                src="/assets/dashboard/Ventas/editarVenta.svg"
                alt="Editar"
                className="cursor-pointer"
              />
              <img
                src="/assets/dashboard/Ventas/trashVenta.svg"
                alt="trash"
                className="cursor-pointer"
                onClick={()=>handleDeleteVenta(venta._id)}
              />
              <select className="border-[1px] border-[#E39C9D] rounded-[6px]">
                <option value="pendiente">Pendiente</option>
                <option value="confirmado">Confirmado</option>
                <option value="enviado">Enviado</option>
                <option value="finalizado">Finalizado</option>
              </select>
            </div>
          </div>
        </div>
    </div>
  );
}


export default Venta;