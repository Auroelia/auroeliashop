
import { useContext, useEffect } from "react";
import Venta from "./Ventas/Venta";
import Image from "next/image";
import Modal from "./Modal/Modal";
import { useState } from "react";
import fondo from './img/fondo.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AppContext } from "@/context/AppContext";

function Ventas() {
    const {getVentas, postVenta, updateVenta, ventas, isLoading} = useContext(AppContext)
    useEffect(() => {
        getVentas()
      }, [])


    const [addFormData, setAddFormData] = useState({
        name: '',
        tel: 0,
        email: "",
        guests: "1-2",
        checkin:null,
        checkout:null,
        plan: "",
        experience: [],
        comments: "",
        status: "",
        idioma: "ES",
        total: 0,
      });

    const [ventasFecha, setVentasFecha] = useState([])
    const [showModal, setShowModal] = useState(false);

    function compararPorCheckin(a, b) {
        const fechaCheckinA = new Date(a._updatedAt);
        const fechaCheckinB = new Date(b._updatedAt);
        return fechaCheckinB - fechaCheckinA;
      }

    

    const handleCloseModal = () => {
        setShowModal(false);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
      
    
        try {
          const respuesta = await postVenta(addFormData);
         
          getVentas()
          setShowModal(false);
          
         
          
        } catch (error) {
        }
    
       
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAddFormData({ ...addFormData, [name]: value });
      };
  
    useEffect(() => {
      if(ventas){
        ventas.sort(compararPorCheckin)
        setVentasFecha(ventas)
      }
    }, [ventas])
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
      };
    
      const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };

      const [currentPage, setCurrentPage] = useState(1)
    

      const ventasPerPage = 5
      const indexOfLastVenta = currentPage * ventasPerPage
      const indexOfFirstVenta  = indexOfLastVenta - ventasPerPage


      const currentVentas = ventasFecha?.slice(indexOfFirstVenta, indexOfLastVenta )
    
      
    return(
    <div className="h-full flex flex-row justify-center relative ">
    <Image src={fondo} alt="fondo img" className="absolute hidden lg:flex object-cover top-0 h-full w-full left-0 z-0" />
  <div className="h-full flex flex-col justify-center z-10">
  
  <div className="  flex flex-col lg:flex-row justify-between lg:mt-8">

<h2 className="text-2xl lg:text-4xl  font-apollo tracking-[2px] mb-8 lg:text-white">Ventas</h2>
<div className="h-full flex flex-row gap-4">
  <div className="hidden border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer flex flex-row items-center gap-2 bg-white">STATUS <img
  
  src="/assets/up.svg" alt="triangulo icon" className="w-[9px] h-[7px] "/> </div>
  <div className="hidden border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer bg-white"
  onClick={()=>setShowModal(true)}
  >+ AGREGAR </div>
</div>
  </div>
<div className="  grid grid-cols-1 md:grid-cols-2  mt-8 lg:mt-0 gap-4 lg:overflow-y-scroll ">
{isLoading ? (
<p>Cargando Ventas...</p>
) : (

currentVentas.length > 0 ? (
currentVentas.map((venta,index) => (
  <Venta key={index} venta={venta} />
))



) : (
<div className="w-[350px] h-[350px]">
<span className="lg:text-white">No hay Ventas</span>
  </div>
)
)}
</div>
<div  className="flex flex-row justify-center gap-8 mt-8 mb-8">

<button onClick={handlePrevPage} >
    <FaArrowLeft className={currentPage == 1? "hidden":"text-[#d3cbc0] lg:text-white text-3xl"}/>
  </button>
  <button onClick={handleNextPage} >
    <FaArrowRight className={currentVentas.length < ventasPerPage? "hidden": "text-[#d3cbc0] lg:text-white text-3xl "}/>
  </button>
</div>
</div>
<Modal show={showModal} onClose={handleCloseModal}>
        <div className="p-6 ">
          <h2 className="text-xl mb-4">
            Crear Reservacion
          </h2>
          <div>
            <form
              className="flex flex-col h-full w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 mt-2"
                placeholder="name"
                onChange={handleInputChange}
                value={addFormData.name}
                required
              />
              <input
                type="tel"
                name="tel"
                id="tel"
                className="border-2 mt-2"
                placeholder="tel"
                onChange={handleInputChange}
                value={addFormData.tel}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 mt-2"
                placeholder="email"
                onChange={handleInputChange}
                value={addFormData.email}
                required
              />
              <input
                type="text"
                name="guests"
                id="guests"
                className="border-2 mt-2"
                placeholder="guests"
                onChange={handleInputChange}
                value={addFormData.guests}
                required
              />
              <input
                type="date"
                name="checkin"
                id="checkin"
                className="border-2 mt-2"
                placeholder="checkin date"
                onChange={handleInputChange}
                value={addFormData.checkin}
                required
              />
              <input
                type="date"
                name="checkout"
                id="checkout"
                className="border-2 mt-2"
                placeholder="checkout date"
                onChange={handleInputChange}
                value={addFormData.checkout}
                required
              />
              <select
name="plan"
id="plan"
className="border-2 mt-2"
onChange={handleInputChange}
value={addFormData.plan}
required
>
<option value="">Seleccionar plan</option>
<option value="select">Select</option>
<option value="luxury">Luxury</option>
<option value="premier">Premier</option>
</select>

<div className="flex flex-row  gap-4 col-span-2 mt-4">
              <div className="flex flex-col ">

              <h3 className="uppercase ">Ventas:</h3>
              <div className="flex flex-row gap-4 mb-4">
                
              
  </div>
  </div>
</div>
              <textarea
                type="text"
                name="comments"
                id="comments"
                className="border-2 mt-2"
                placeholder="comments"
                onChange={handleInputChange}
                value={addFormData.comments}
                required
              />
              <input
                type="string"
                name="total"
                id="total"
                className="border-2 mt-2"
                placeholder="total"
                onChange={handleInputChange}
                value={addFormData.total}
                required
              />
             <select
name="status"
id="status"
className="border-2 mt-2"
onChange={handleInputChange}
value={addFormData.status}
required
>
<option value="">Seleccionar estado</option>
<option value="pendiente">Pendiente</option>
<option value="aprobada">Aprobada</option>
<option value="cancelada">Cancelada</option>
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
);
}

export default Ventas