import React from "react";
import Producto from "./Producto";
import FiltrosModal from "./FiltrosModal";
import Image from "next/image";

// Componente skeleton para productos
function ProductoSkeleton() {
  return (
    <div className="w-full md:w-[70%] lg:w-[229px] shadow-popular rounded-[30px] animate-pulse">
      <div className="w-full h-[173px] lg:h-[263px] rounded-t-[30px] bg-gray-200" />
      <div className="h-[100px] flex flex-col justify-center px-[22px] gap-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
}

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
  pagination,
  currentPage,
  onPageChange,
  loading
}) {
  // Generar array de páginas para mostrar
  const getPageNumbers = () => {
    const pages = [];
    const totalPages = pagination?.totalPages || 1;
    const current = currentPage;
    
    pages.push(1);
    
    if (totalPages <= 7) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (current > 3) {
        pages.push('...');
      }
      
      const start = Math.max(2, current - 1);
      const end = Math.min(totalPages - 1, current + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }
      
      if (current < totalPages - 2) {
        pages.push('...');
      }
      
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Número de skeletons a mostrar mientras carga
  const skeletonCount = 12;

  return (
    <div className="w-full h-full flex flex-col mb-[35px] min-h-[600px]">
      <div className="w-full h-full flex flex-col items-center mt-4 lg:mt-0">
        <div className="w-full md:w-[80%] lg:w-full flex justify-between px-5 lg:justify-end lg:pr-8">
          <div className="flex flex-col gap-[10px]">
            <span className="text-[#E39C9D] font-inter font-bold text-[12px] lg:text-[16px] lg:hidden">Ordenar por:</span>
            <div className="flex items-center gap-[6px]">
              <span className="hidden md:block text-[16px] font-inter">Ordenar por</span>
              <select
                className="rounded-[3px] border-[1px] border-[#E39C9D] w-[180px] h-[30px] flex items-center justify-center outline-none px-2"
                value={orden}
                onChange={handleOrdenChange}
                disabled={loading}
              >
                <option value="mas-nuevo" className="cursor-pointer">Más nuevo</option>
                <option value="precio-ascendente" className="cursor-pointer">Precio ascendente</option>
                <option value="precio-descendente" className="cursor-pointer">Precio descendente</option>
              </select>
              <span className="hidden md:block text-[12px] font-inter">
                {loading ? (
                  <span className="inline-block w-16 h-4 bg-gray-200 rounded animate-pulse" />
                ) : (
                  `${pagination?.total || 0} productos`
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div 
              className="w-[79px] h-[23px] border-[1px] border-[#E39C9D] flex items-center justify-center gap-[15px] lg:hidden cursor-pointer" 
              onClick={openModal}
            >
              <span>Filtrar</span>
              <Image
                width={15} 
                height={12}
                src="/assets/icons/filtro.svg" 
                alt="filtro" 
                className="w-[15px] h-[12px]" 
              />
            </div>
            {isModalOpen && (
              <FiltrosModal
                isOpen={isModalOpen}
                close={closeModal}
                checklist={checklist}
                setChecklist={setChecklist}
                checklistArreglos={checklistArreglos}
                setChecklistArreglos={setChecklistArreglos}
              />
            )}
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="w-[90%] lg:w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-x-[22px] gap-y-[22px] lg:gap-y-[61px] lg:px-[0px] place-items-center mt-4">
          {loading ? (
            // Mostrar skeletons mientras carga
            Array.from({ length: skeletonCount }).map((_, index) => (
              <ProductoSkeleton key={`skeleton-${index}`} />
            ))
          ) : productos && productos.length > 0 ? (
            productos.map((producto, index) => (
              <Producto
                key={producto._id || index}
                producto={producto}
                addToCart={addToCart}
              />
            ))
          ) : (
            <div className="col-span-2 lg:col-span-3 py-10 text-center">
              <p className="text-gray-500">No hay productos disponibles con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </div>

      {/* Paginación - solo mostrar si no está cargando y hay más de una página */}
      {!loading && pagination && pagination.totalPages > 1 && (
        <div className="w-full flex justify-center mt-10 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={!pagination.hasPrevPage}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200
                ${pagination.hasPrevPage 
                  ? 'border-[#E39C9D] text-[#E39C9D] hover:bg-[#E39C9D] hover:text-white cursor-pointer' 
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {getPageNumbers().map((page, index) => (
              page === '...' ? (
                <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200 font-inter
                    ${currentPage === page
                      ? 'bg-[#E39C9D] text-white border-[#E39C9D]'
                      : 'border-gray-200 text-gray-600 hover:border-[#E39C9D] hover:text-[#E39C9D]'
                    }`}
                >
                  {page}
                </button>
              )
            ))}

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={!pagination.hasNextPage}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200
                ${pagination.hasNextPage 
                  ? 'border-[#E39C9D] text-[#E39C9D] hover:bg-[#E39C9D] hover:text-white cursor-pointer' 
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Información de paginación */}
      {!loading && pagination && pagination.total > 0 && (
        <div className="w-full text-center text-sm text-gray-500 mb-4">
          Mostrando {((currentPage - 1) * pagination.limit) + 1} - {Math.min(currentPage * pagination.limit, pagination.total)} de {pagination.total} productos
        </div>
      )}
    </div>
  );
}

export default Productos;
