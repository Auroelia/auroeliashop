import Item from "@/components/Carrito/Item";
import { AppContext } from "@/context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import Otros from "../components/Carrito/Otros/Otros";
import DatosModal from "@/components/Carrito/DatosModal";
import Productos from "../components/Carrito/Productos";
import Informacion from "@/components/Carrito/Informacion";
import Envio from "@/components/Carrito/Envio";
import { client } from "@/lib/client";
import { v4 as uuidv4 } from 'uuid';
// Import the necessary modules from emailjs-com
import emailjs from '@emailjs/browser';

function Carrito() {
  const { cart, deleteCart } = useContext(AppContext);
  console.log(cart)



  const [total, setTotal] = useState(0);
  const [subtotalPrice, setSubTotalPrice] = useState(0);
  console.log(cart);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      const precio = item.size?.precio || item.product.precio;
      const qty = item.qty || 1;
      total += precio * qty;
    });
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    const subtotalPrice = cart.reduce((total, item) => {
      const precio = item.size?.precio || item.product.precio;
      const qty = item.qty || 1;
      return total + precio * qty;
    }, 0);
    setSubTotalPrice(subtotalPrice);
  }, [cart]);

  
const [isOpen, setIsOpen] = useState(false);

const [isModalOpen, setModalOpen] = useState(false);

const openModal = () => setModalOpen(true);
const closeModal = () => setModalOpen(false);

const [descuento, setDescuento] = useState('')
const [porcentaje, setProcentaje] = useState(0)

const [cliente, setCliente] = useState({
  nombre: "",
  apellidos: "",
  telefono: "",
  correo: "",
  });
  const [destinatario, setDestinatario] = useState({
  nombre: "",
  telefono: "",
  direccion: "",
  colonia: "",
  estado: "",
  delegacion: "",
  cp: "",
  notas: "",
  });

  const [envio, setEnvio] = useState({
  horario: "",
  dedicatoria: "",
  firma: "",
  estadoPedido: "pendiente",
  fecha: new Date(),
  })

  const [error, setError] = useState(false)

  useEffect(() => {
    if (
      cliente.nombre !== "" &&
      cliente.apellidos !== "" &&
      cliente.telefono !== "" &&
      cliente.correo !== "" &&
      destinatario.nombre !== "" &&
      destinatario.telefono !== "" &&
      destinatario.direccion !== "" &&
      destinatario.colonia !== "" &&
      destinatario.estado !== "" &&
      destinatario.delegacion !== "" &&
      destinatario.cp !== "" &&
      envio.horario !== "" &&
      envio.dedicatoria !== "" &&
      envio.firma !== ""
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }, [cliente, destinatario, envio]);

   // Define your email service credentials
   const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
   const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_PEDIDO_ID;
   const userID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_PUBLIC_KEY_ID;

   // Define the function to send the email
  const sendEmail = () => {
    const templateParams = {
    cliente_nombre: cliente.nombre, 
    cliente_apellidos: cliente.apellidos, 
    cliente_telefono: cliente.telefono, 
    cliente_correo: cliente.correo, 
    destinatario_nombre: destinatario.nombre, 
    destinatario_telefono: destinatario.telefono, 
    destinatario_direccion: destinatario.direccion, 
    destinatario_colonia: destinatario.colonia, 
    destinatario_estado: destinatario.estado, 
    destinatario_delegacion: destinatario.delegacion, 
    destinatario_cp: destinatario.cp, 
    envio_horario: envio.horario, 
    envio_dedicatoria: envio.dedicatoria, 
    envio_firma: envio.firma,
    total: total,
     message: 'Gracias por pedir en nuestra tienda, tu pedido ha sido recibido con éxito',
     banco: 'Santander',
     nombre:"J Armando Zavala",
     numero_cuenta: '5579 0990 1683 5342',
     clabe: '0141-8020-0108-399426',
     instrucciones:"Por favor, envía una foto de tu comprobante de pago a nuestro correo electrónico para confirmar tu pedido.",
     whatsapp: "https://wa.me/+525626306790?text=Quiero%20enviar%20mi%20comprobante%20de%20pago"

    };

     // Send the email using emailjs
     emailjs.send(serviceID, templateID, templateParams, userID)
       .then((response) => {
         console.log('Email sent successfully!', response.status, response.text);
       })
       .catch((error) => {
         console.error('Error sending email:', error);
       });
   };


  const enviarInfo = () => {
    
    if (!error) {
      // Mapear cart para extraer solo el _id, qty y añadir _key único
      const productosParaSanity = cart.map((item) => ({
        _key: uuidv4(), // Generar una clave única para cada elemento
        product: { _ref: item.product._id }, // Referencia al _id del producto
        size: item.size, // Referencia al _id del producto
        qty: item.qty, // Cantidad
      }));
      
      client
      .create({
        _type: "pedido", // Nombre del esquema en Sanity
        cliente: cliente,
        destinatario: destinatario,
        envio: envio,
        productos: productosParaSanity, 
        cupon: descuento,
        total: total,
      })
      .then((res) => {
        console.log(`Pedido fue creado, ID es ${res._id}`);
        sendEmail();
        /* limpiar carrito */
        deleteCart();
      })
      .catch((err) => {
        console.log("Ocurrió un error:", err.message);
      });
    }
  };

  const [cuponEncontrado, setcuponEncontrado] = useState('')

  const buscarDescuento = async (descuento) => {
    console.log(descuento)
    try {
        const resultado = await client.fetch(`*[(_type == "cupon" && nombre match '${descuento}')]`);
        console.log(resultado)
        if (resultado.length > 0) {
            const cupon = resultado[0];
            const descuentoAplicado = (total * cupon.porcentaje) / 100;
            const totalConDescuento = total - descuentoAplicado;
            setProcentaje(cupon.porcentaje);
            setcuponEncontrado('')
            setTotal(totalConDescuento);
        }
        else{
          setcuponEncontrado('No existe ese cupon')
        }
        
    } catch (err) {
        console.log("No existe ese cupon", err.message);
    }
}






  return (
    <div className="w-full h-full overflow-hidden relative my-8 lg:my-0">
      <div
        className="w-[90%] lg:w-full max-w-[1440px] min-w-sm mx-auto flex flex-col lg:flex-row justify-center  gap-[33px] lg:px-[50px] xl:px-[0px] mt-4 lg:mb-8
      
      "
      >
        {/* Productos */}
        <div className="w-full lg:w-[639px] flex flex-col justify-center items-center">
          <div className="w-full hidden lg:hidden grid-cols-5 place-items-center">
            <div className="">{/* vacio */}</div>
            <div>Producto</div>
            <div className="hidden lg:block">Cantidad</div>
            <div>{/* vacio */}</div>
            <div>Total</div>
          </div>
          <div className="h-[1px] bg-[#E39C9D] w-full hidden lg:block my-4" />
          <div className="w-full h-full flex flex-col gap-[24px] ">

          {
            cart.length>0?
            cart.map((item, index) => (
              <Productos
              key={index}
              item={item}
              />
            ))
            :
            <div className="w-full h-[200px] flex flex-col items-center justify-center">
          <span className="text-[24px] font-inter font-bold">Carrito Vacio</span>
          <span className="text-[16px] font-inter font-light">Agrega productos</span>
          </div>
        }
        </div>
          <div className="h-[1px] bg-[#E39C9D] w-full mt-4" />
          <div className="w-full flex flex-row justify-end gap-[15px] mt-[13px]">
            <input
              type="text"
              placeholder="Codigo de Descuento"
              className="w-[184px] h-[30px] border-[1px] border-[#E39C9D] rounded-[6px]"
              name="descuento"
              id="descuento"
              onChange={(e) => setDescuento(e.target.value)}

            />
            <div className="w-[97px] h-[30px] rounded-[6px]  bg-[#E39C9D] flex flex-row items-center justify-center font-bold cursor-pointer"
            onClick={()=>buscarDescuento(descuento)}
            >
              Usar
            </div>
          </div>
          <div className="w-full flex flex-row justify-end gap-[15px] mt-[8px] pr-[155px]">

          <span className="text-red-500">{cuponEncontrado}</span>
          </div>
          <div className="w-full h-full flex flex-row justify-end font-inter text-[16px] font-light mt-[13px] ">
            <div className=" flex flex-col">
              <span>Sub Total</span>
              <span>Descuento</span>
              <span className="font-bold">Total</span>
            </div>
            <div className=" flex flex-col w-[120px] items-end">
              <span>${subtotalPrice}</span>
              <span>{porcentaje}%</span>
              <span className="font-bold">${total}</span>
            </div>
          </div>

{/* informacion */}
<Informacion
cliente={cliente}
setCliente={setCliente}
destinatario={destinatario}
setDestinatario={setDestinatario}

/>

        </div>
        {/* envio */}
        <Envio
          openModal={openModal}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          envio={envio}
          setEnvio={setEnvio}
          enviarInfo={enviarInfo}
          error={error}

         />
      </div>
      <Otros />
    </div>
  );
}

export default Carrito;
