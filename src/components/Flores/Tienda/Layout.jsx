import React, { useContext, useEffect, useState } from "react";
import Filtros from "./Filtros";
import Productos from "./Productos";
import { AppContext } from "@/context/AppContext";

function Layout() {
  const [checklist, setChecklist] = useState([]);
  const [checklistArreglos, setChecklistArreglos] = useState([]);
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(AppContext);
  const [orden, setOrden] = useState("mas-vendidos");
  const [loading, setLoading] = useState(true);
  

  console.log("checklist:", checklist);
  console.log("checklistArreglos:", checklistArreglos);
  console.log("orden:", orden);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/productos?checklist=${JSON.stringify(checklist)}&checklistArreglos=${JSON.stringify(checklistArreglos)}&orden=${orden}`);
        const data = await response.json();
        setProductos(data.productos);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [checklist, checklistArreglos, orden]);

  const handleChecklistChange = (event) => {
    const { name, checked } = event.target;
    const updateChecklist = name.startsWith("flor") ? setChecklist : setChecklistArreglos;

    updateChecklist((prev) => {
      const newList = checked ? [...prev, name] : prev.filter((item) => item !== name);
      return newList;
    });
  };

  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
  };
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="w-full flex flex-row max-w-[1440px] min-w-sm mx-auto lg:px-[50px] xl:px-[180px] relative">
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
            addToCart={addToCart}
            openModal={openModal}
            closeModal={closeModal}
            isModalOpen={isModalOpen}

          />
        )}
      </div>
    </div>
  );
}

export default Layout;
