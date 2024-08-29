import React, { useContext, useEffect, useRef, useState } from "react";
import Filtros from "./Filtros";
import Productos from "./Productos";
import { AppContext } from "@/context/AppContext";

function Layout() {
  const [checklist, setChecklist] = useState([]);
  const [checklistArreglos, setChecklistArreglos] = useState([]);
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [totalItems, setTotalItems] = useState(0);
  const [orden, setOrden] = useState("mas-vendidos");
  const productosRef = useRef(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/productos?page=${currentPage}&itemsPerPage=${itemsPerPage}&checklist=${JSON.stringify(checklist)}&checklistArreglos=${JSON.stringify(checklistArreglos)}&orden=${orden}`);
        const data = await response.json();
        setProductos(data.productos);
        setTotalItems(data.totalItems); // Ajustar esto con el total de productos en la base de datos
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [checklist, checklistArreglos, orden, currentPage]);

  const handleChecklistChange = (event) => {
    const { name, checked } = event.target;
    const updateChecklist = name.startsWith("flor") ? setChecklist : setChecklistArreglos;

    updateChecklist((prev) => {
      const newList = checked ? [...prev, name] : prev.filter((item) => item !== name);
      setCurrentPage(1);
      return newList;
    });
  };

  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
      productosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      productosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        className="w-full flex flex-row max-w-[1440px] min-w-sm mx-auto lg:px-[50px]
        xl:px-[180px] relative"
      >
        <Filtros
          checklist={checklist}
          setChecklist={setChecklist}
          checklistArreglos={checklistArreglos}
          setChecklistArreglos={setChecklistArreglos}
          handleChecklistChange={handleChecklistChange}
        />
        {loading ? (
          <div>Cargando productos...</div>
        ) : (
          <Productos
            checklist={checklist}
            setChecklist={setChecklist}
            checklistArreglos={checklistArreglos}
            setChecklistArreglos={setChecklistArreglos}
            orden={orden}
            setOrden={setOrden}
            handleOrdenChange={handleOrdenChange}
            productos={productos}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            nextPage={nextPage}
            prevPage={prevPage}
            addToCart={addToCart}
            productosRef={productosRef}
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Layout;
