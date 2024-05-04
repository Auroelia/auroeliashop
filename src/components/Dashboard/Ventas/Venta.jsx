import Image from 'next/image'
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from "../Modal/Modal";
import { client, urlFor } from "../../../lib/client";

import Swal from 'sweetalert2'

import emailjs from '@emailjs/browser';
import { AppContext } from '@/context/AppContext';

function Venta({venta}) {

  const {getVenta, updateVenta, deleteVenta} = useContext(AppContext);
  

  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("pendiente")
const [ventaUnica, setVentaUnica] = useState(null)

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const obtenerVentaUnica = async () => {
      if (venta) {
        const ventaData = await getVenta(venta.productos[0]._ref);
        setVentaUnica(ventaData);
      }
    };

    obtenerVentaUnica();
  }, [venta]);
  

  const [formData, setFormData] = useState({
    nombre: venta.nombre,
    telefono: venta.telelefono,
    correo: venta.correo,
    comentarios: venta.comentarios,
    estado: venta.estado,
  });

  useEffect(() => {
    setFormData({
      nombre: venta.nombre,
      telefono: venta.telefono,
      correo: venta.correo,
      comentarios: venta.comentarios,
      estado: venta.estado,
    });
  }, [venta]);

  
  const handleSelectChange = async (event) => {
    setSelectedOption(event.target.value);
    const newEstado = event.target.value;

    // Actualizar el campo estado en el formData
    const updatedFormData = { ...formData, estado: newEstado };

    // Mostrar alerta de confirmación antes de actualizar la venta
    const result = await Swal.fire({
        title: 'Confirmar Cambio de Estado',
        text: `¿Estás seguro de cambiar el estado de la venta a "${newEstado}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        await updateVenta(venta._id, updatedFormData);
        emailjs.init("F9ctTSenSvQgRvd69");
        if(newEstado == "confirmado"){
          const params = {
            texto1ventaConfirmed:"ORDER CONFIRMATION",
            texto2ventaConfirmed:"THANK YOU FOR CHOOSING CASA ITZIMNÁ",
            texto3ventaConfirmed: "WE ARE DELIGHTED TO CONFIRM YOUR ORDER.",
            from_email: venta.correo,
            email_cc: "boutiquecasaitzimna@gmail.com",
            subject: "ORDER CONFIRMATION"
            
          };
          emailjs
          .send("service_d5x4xeq", "template_15qv37j", params)
          .then((response) => {
            console.log("Correo electrónico enviado exitosamente:", response);
          })
          .catch((error) => {
            console.error("Error al enviar el correo electrónico:", error);
          });
        }  
        if(newEstado == "cancelado"){
          const params = {
            texto1ventaCanceled:"ORDER CANCELED",
            texto2ventaCanceled:"THANK YOU FOR CHOOSING CASA ITZIMNÁ",
            texto3ventaCanceled: "UNFORTUNATELY, WE HAD TO CANCEL YOUR ORDER. PLEASE GET IN TOUCH WITH US FOR YOUR REFOUND.",
            from_email: venta.correo,
            email_cc: "boutiquecasaitzimna@gmail.com",
            subject: "ORDER CANCELED"
            
          };
          emailjs
          .send("service_d5x4xeq", "template_15qv37j", params)
          .then((response) => {
            console.log("Correo electrónico enviado exitosamente:", response);
          })
          .catch((error) => {
            console.error("Error al enviar el correo electrónico:", error);
          });
        }  
        if(newEstado == "enviado"){
          const params = {
            texto1ventaShipped:"ORDER SHIPPED",
            texto2ventaShipped:"THANK YOU FOR CHOOSING CASA ITZIMNÁ",
            texto3ventaShipped: "YOUR ORDER HAS BEEN SHIPPED. BELOW YOU WILL FIND THE TRACKING NUMBER:",
            tracking: venta?.comentarios,
            from_email: venta.correo,
            email_cc: "boutiquecasaitzimna@gmail.com",
            subject: "ORDER SHIPPED"
            
          };
          emailjs
          .send("service_d5x4xeq", "template_15qv37j", params)
          .then((response) => {
            console.log("Correo electrónico enviado exitosamente:", response);
          })
          .catch((error) => {
            console.error("Error al enviar el correo electrónico:", error);
          });
        }  
        if(newEstado == "finalizado"){
          const params = {
            texto1ventaFinished:"ORDER COMPLETED",
            texto2ventaFinished:"THANK YOU FOR CHOOSING CASA ITZIMNÁ",
            texto3ventaFinished: "YOUR ORDER HAS BEEN DELIVERED. WE APPRECIATE YOUR PREFERENCE.",
            from_email: venta.correo,
            email_cc: "boutiquecasaitzimna@gmail.com",
            subject: "THANK YOU FOR CHOOSING CASA ITZIMNÁ"
            
          };
          emailjs
          .send("service_d5x4xeq", "template_15qv37j", params)
          .then((response) => {
            console.log("Correo electrónico enviado exitosamente:", response);
          })
          .catch((error) => {
            console.error("Error al enviar el correo electrónico:", error);
          });
        }  
            Swal.fire({
                title: 'Estado Actualizado',
                text: `El estado de la venta ha sido cambiado a "${newEstado}"`,
                icon: 'success',
            });
        } catch (error) {
            console.error('Error al actualizar la venta:', error);
            Swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error al actualizar la venta',
                icon: 'error',
            });
            // Restaurar el valor seleccionado anteriormente
            setSelectedOption(formData.estado);
        }
    } else {
        // Restaurar el valor seleccionado anteriormente
        setSelectedOption(formData.estado);
    }
};


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleDeleteClick = async () => {
  try {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la venta. ¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      const deletionSuccessful = await deleteVenta(venta._id);

      if (deletionSuccessful) {
        console.log('Venta eliminada');
        getVentas();
        Swal.fire('Eliminada', 'La venta ha sido eliminada', 'success');
      } else {
        Swal.fire('Error', 'No se pudo eliminar la venta', 'error');
      }

      Swal.fire('Eliminada', 'La venta ha sido eliminada', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // El usuario ha cancelado la eliminación
      Swal.fire('Cancelado', 'La eliminación ha sido cancelada', 'error');
    }
  } catch (error) {
    console.error('Error al eliminar venta:', error);
    Swal.fire('Error', 'Ha ocurrido un error al eliminar la venta', 'error');
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
    };
    console.log(updatedFormData);
  
    // Mostrar una alerta de confirmación antes de enviar los datos actualizados
    const confirmationResult = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas actualizar la venta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar',
    });
  
    if (confirmationResult.isConfirmed) {
      try {
        const respuesta = await updateVenta(venta._id, updatedFormData);
  
        setShowModal(false);
  
        // Mostrar una alerta de éxito si la actualización fue exitosa
        Swal.fire('Actualizada', 'La venta ha sido actualizada correctamente', 'success');
      } catch (error) {
        console.log(error);
  
        // Mostrar una alerta de error si la actualización falló
        Swal.fire('Error', 'Ha ocurrido un error al actualizar la venta', 'error');
      }
    } else {
      // El usuario ha cancelado la actualización
      Swal.fire('Cancelada', 'La actualización ha sido cancelada', 'info');
    }
  
  };
  

  return (
    <div className="w-[350px] h-[280px] md:h-[350px] rounded-[7px] border-[2px] bg-white">
      {
        ventaUnica &&
        <div className="w-full flex flex-row justify-center">
        <div className="w-[90%] flex flex-col gap-1">
          <div className="flex flex-row justify-between ">
            <span className="uppercase font-apollo tracking-[2px] mt-4 text-lg">
              {ventaUnica?.name}
            </span>
            <button onClick={handleEditClick}>
              <Image src="/assets/icons/telblanco.svg" alt="editar button" className="w-[20px]" />{" "}
            </button>
          </div>
          <div className='flex flex-row justify-between gap-8'>
            <div className='w-[50%] h-full'>
            <img src={urlFor(ventaUnica?.image[0]?.asset._ref)} alt='imagen producto' className='w-[150px] h-[150px] md:w-[200px] md:h-[230px]  object-contain'   /> 
            </div>
            <div className='w-[50%] flex flex-col justify-center  '>
          
          <p className="font-apollo uppercase text-sm">
          Fecha: {venta?._createdAt.substring(0,10)} 
          </p>
          <p className="font-apollo uppercase text-sm">
            Precio: ${ventaUnica?.price}
          </p>
          <p className="font-apollo uppercase text-sm">
            Estado: {venta?.estado}
          </p>
          <p className="font-apollo uppercase text-sm">
            Nombre: {venta.nombre?
            "✔":""}
          </p>
          <p className="font-apollo uppercase text-sm">
            Correo: {venta?.correo?
            "✔":""}
          </p>
          </div>
          </div>
          <div className="flex flex-row justify-between mb-4">
            <div className='flex '>
              <button onClick={handleDeleteClick} className="mt-2">
                <Image src="/assets/trash.svg" alt="editar button" className="w-[15px] " />
              </button>
            </div>

            <div>
      <select
        value={venta.estado}
        onChange={handleSelectChange}
        className="mt-2 border bg-[#d3cbc0] text-center py-1 rounded uppercase"
      >
        <option className='uppercase' value="">Seleccionar opción</option>
        <option className='uppercase' value="pendiente">Pendiente</option>
        <option className='uppercase' value="confirmado">Confirmado</option>
        <option className='uppercase' value="cancelado">Cancelado</option>
        <option className='uppercase' value="enviado">Enviado</option>
        <option className='uppercase' value="finalizado">Finalizado</option>
      </select>
      
    </div>
          </div>

          <Modal show={showModal} onClose={handleCloseModal} className="">
            <div className="p-6  ">
              <h2 className="text-xl mb-4">
                Editar venta
              </h2>
              <div>
                <form
                  className="flex flex-col h-full w-full"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="border-2 mt-2"
                    placeholder="nombre"
                    onChange={handleInputChange}
                    value={formData.nombre}
                    required
                  />
                  <input
                    type="telefono"
                    name="telefono"
                    id="telefono"
                    className="border-2 mt-2"
                    placeholder="telefono"
                    onChange={handleInputChange}
                    value={formData.telefono}
                    required
                  />
                  <input
                    type="correo"
                    name="correo"
                    id="correo"
                    className="border-2 mt-2"
                    placeholder="correo"
                    onChange={handleInputChange}
                    value={formData.correo}
                    required
                  />
                  
                  <textarea
                    type="text"
                    name="comentarios"
                    id="comentarios"
                    className="border-2 mt-2"
                    placeholder="comentarios"
                    onChange={handleInputChange}
                    value={formData.comentarios}
                    required
                  />
                
                 <select
  name="estado"
  id="estado"
  className="border-2 mt-2"
  onChange={handleInputChange}
  value={formData.estado}
  required
>
<option className='uppercase' value="">Seleccionar opción</option>
        <option className='uppercase' value="pendiente">Pendiente</option>
        <option className='uppercase' value="confirmado">Confirmado</option>
        <option className='uppercase' value="cancelado">Cancelado</option>
        <option className='uppercase' value="enviado">Enviado</option>
        <option className='uppercase' value="finalizado">Finalizado</option>
</select>
                </form>
              </div>
              <div className="flex flex-row justify-between">
                <button
                  className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Guardar
                </button>
                <button
                  className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      }
      </div>
      
  );
}

export default Venta