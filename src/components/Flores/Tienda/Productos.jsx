import React from "react";
import Producto from "./Producto";
import FiltrosModal from "./FiltrosModal";

function Productos({
  checklist,
  checklistArreglos,
  setChecklist,
  setChecklistArreglos,
  orden,
  setOrden,
  handleOrdenChange,
  isModalOpen,
  openModal,
  closeModal,
  productos,
  addToCart,
  productosRef
}) {

  const sortedProductos = [...productos].sort((a, b) => {
    switch (orden) {
      case "mas-nuevo":
        return new Date(b._createdAt) - new Date(a._createdAt); // Ordenar por fecha de creación (más nuevo primero)
      case "precio-ascendente":
        return (a.tamanos?.[0]?.precio || 0) - (b.tamanos?.[0]?.precio || 0); // Ordenar por precio ascendente
      case "precio-descendente":
        return (b.tamanos?.[0]?.precio || 0) - (a.tamanos?.[0]?.precio || 0); // Ordenar por precio descendente
      default:
        return 0;
    }
  });

  return (
    <div className="w-full h-full flex flex-col mb-[35px]">
      <div className="w-full h-full flex flex-col items-center mt-4 lg:mt-0 ">
        <div className="w-full md:w-[80%] lg:w-full flex justify-between px-5 lg:justify-end lg:pr-8">
          <div className="flex flex-col gap-[10px] ">
            <span className="text-[#E39C9D] font-inter font-bold text-[12px] lg:text-[16px] lg:hidden">Ordenar por:</span>
            <div className="flex items-center gap-[6px]">
              <span className="hidden md:block text-[16px] font-inter">Ordenar por</span>
              <select
                className="rounded-[3px] border-[1px] border-[#E39C9D] w-[180px] h-[23px] flex items-center justify-center outline-none"
                value={orden}
                onChange={handleOrdenChange}
              >
                <option value="mas-nuevo" className="cursor-pointer">Más nuevo</option>
                <option value="precio-ascendente" className="cursor-pointer">Precio ascendente</option>
                <option value="precio-descendente" className="cursor-pointer">Precio descendente</option>
              </select>
              <span className="hidden md:block text-[12px] font-inter ">{sortedProductos?.length} productos</span>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="w-[79px] h-[23px] border-[1px] border-[#E39C9D] flex items-center justify-center gap-[15px] lg:hidden" onClick={openModal}>
              <span>Filtrar</span>
              <img src="/assets/icons/filtro.svg" alt="filtro" className="w-[15px] h-[12px] cursor-pointer" />
            </div>
            {isModalOpen && (
              <FiltrosModal
                isOpen={isModalOpen}
                close={closeModal}
                checklist={checklist}
                setChecklist={setChecklist}
                checklistArreglos={checklistArreglos}
                setChecklistArreglos={setChecklistArreglos}
                handleCheckListChange={handleChecklistChange}
              />
            )}
          </div>
        </div>
      </div>
      <div ref={productosRef} className="w-full flex justify-center">
        <div className="w-[90%] lg:w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-x-[22px] gap-y-[22px] lg:gap-y-[61px] lg:px-[0px] place-items-center mt-4 lg:mt-0">
          {sortedProductos.length > 0 ? (
            sortedProductos.map((producto, index) => (
              <Producto
                key={index}
                producto={producto}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Productos;
