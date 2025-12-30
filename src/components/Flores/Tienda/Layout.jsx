import React, { useContext, useEffect, useState } from "react";
import Filtros from "./Filtros";
import Productos from "./Productos";
import { AppContext } from "@/context/AppContext";

function Layout() {
  const [checklist, setChecklist] = useState([]);
  const [checklistArreglos, setChecklistArreglos] = useState([]);
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(AppContext);
  const [orden, setOrden] = useState("mas-nuevo");
  const [loading, setLoading] = useState(true);
  
  // Estados de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 1,
    currentPage: 1,
    limit: 12,
    hasNextPage: false,
    hasPrevPage: false
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/productos?checklist=${JSON.stringify(checklist)}&checklistArreglos=${JSON.stringify(checklistArreglos)}&orden=${orden}&page=${currentPage}&limit=12`
        );
        const data = await response.json();
        setProductos(data.productos || []);
        if (data.pagination) {
          setPagination(data.pagination);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [checklist, checklistArreglos, orden, currentPage]);

  // Resetear a página 1 cuando cambian los filtros u orden
  useEffect(() => {
    setCurrentPage(1);
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

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-full h-full overflow-hidden relative min-h-[800px]">
      <div className="w-full flex flex-row max-w-[1440px] min-w-sm mx-auto lg:px-[50px] xl:px-[180px] relative">
        <Filtros
          checklist={checklist}
          setChecklist={setChecklist}
          checklistArreglos={checklistArreglos}
          setChecklistArreglos={setChecklistArreglos}
          handleChecklistChange={handleChecklistChange}
        />
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
          pagination={pagination}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default Layout;
