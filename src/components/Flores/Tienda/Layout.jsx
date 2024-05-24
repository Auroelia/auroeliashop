import React, { useContext, useEffect, useState } from "react";
import Filtros from "./Filtros";
import Productos from "./Productos";
import { AppContext } from "@/context/AppContext";
import { client } from "../../../../sanity/lib/client";

function Layout() {
  const [checklist, setChecklist] = useState([]);
  const [checklistArreglos, setChecklistArreglos] = useState([]);
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [totalItems, setTotalItems] = useState(0);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [orden, setOrden] = useState("mas-vendidos");

  useEffect(() => {
    client.fetch('*[_type == "producto"]').then((data) => {
      setProductos(data);
      filterAndSortProducts(data, checklist, checklistArreglos, orden, currentPage);
    });
  }, []);

  useEffect(() => {
    filterAndSortProducts(productos, checklist, checklistArreglos, orden, currentPage);
  }, [checklist, checklistArreglos, orden, currentPage]);

  const filterAndSortProducts = (productos, checklist, checklistArreglos, orden, currentPage) => {
    let filtered = productos.filter((producto) => {
      return (
        (checklist.length === 0 || checklist.includes(producto.flor._ref)) &&
        (checklistArreglos.length === 0 || checklistArreglos.includes(producto.arreglo._ref))
      );
    });

    switch (orden) {
      case "mas-nuevo":
        filtered = filtered.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
        break;
      case "precio-ascendente":
        filtered = filtered.sort((a, b) =>
          (a.tamanos?.[a.tamanos.length - 1]?.precio || 0) - (b.tamanos?.[b.tamanos.length - 1]?.precio || 0)
        );
        break;
      case "precio-descendente":
        filtered = filtered.sort((a, b) =>
          (b.tamanos?.[b.tamanos.length - 1]?.precio || 0) - (a.tamanos?.[a.tamanos.length - 1]?.precio || 0)
        );
        break;
      default:
        break;
    }

    setTotalItems(filtered.length);
    setFilteredProductos(filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
  };

  const handleChecklistChange = (event) => {
    const { name, checked } = event.target;
    const updateChecklist = name.startsWith("flor")
      ? setChecklist
      : setChecklistArreglos;

    updateChecklist((prev) => {
      const newList = checked
        ? [...prev, name]
        : prev.filter((item) => item !== name);
      setCurrentPage(1);
      filterAndSortProducts(productos, checklist, checklistArreglos, orden, 1);
      return newList;
    });
  };

  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
    setCurrentPage(1);
    filterAndSortProducts(productos, checklist, checklistArreglos, event.target.value, 1);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
        <Productos
          checklist={checklist}
          setChecklist={setChecklist}
          checklistArreglos={checklistArreglos}
          setChecklistArreglos={setChecklistArreglos}
          orden={orden}
          setOrden={setOrden}
          handleOrdenChange={handleOrdenChange}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          productos={filteredProductos}
          setProductos={setProductos}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          filteredProductos={filteredProductos}
          handleChecklistChange={handleChecklistChange}
          nextPage={nextPage}
          prevPage={prevPage}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default Layout;
