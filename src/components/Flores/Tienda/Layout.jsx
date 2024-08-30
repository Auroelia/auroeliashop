import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/router';
import Filtros from "./Filtros";
import Productos from "./Productos";

function Layout() {
  const router = useRouter();
  const { checklist, checklistArreglos, orden } = router.query;

  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedChecklist, setSelectedChecklist] = useState(checklist ? JSON.parse(checklist) : []);
  const [selectedChecklistArreglos, setSelectedChecklistArreglos] = useState(checklistArreglos ? JSON.parse(checklistArreglos) : []);
  const [selectedOrden, setSelectedOrden] = useState(orden || "mas-vendidos");

  const itemsPerPage = 12;

  const fetchProductos = useCallback(async (page = 1) => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/productos?page=${page}&itemsPerPage=${itemsPerPage}&checklist=${JSON.stringify(selectedChecklist)}&checklistArreglos=${JSON.stringify(selectedChecklistArreglos)}&orden=${selectedOrden}`);
      const data = await response.json();

      if (data.productos.length < itemsPerPage) {
        setHasMore(false); // No hay más productos para cargar
      }

      setProductos((prevProductos) => [...prevProductos, ...data.productos]);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedChecklist, selectedChecklistArreglos, selectedOrden, hasMore]);

  useEffect(() => {
    fetchProductos(currentPage);
  }, [fetchProductos, currentPage]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const handleChecklistChange = (newChecklist) => {
    setSelectedChecklist(newChecklist);
    setCurrentPage(1);
    setProductos([]);
    setHasMore(true);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        checklist: JSON.stringify(newChecklist),
        page: 1,
      },
    });
  };

  const handleChecklistArreglosChange = (newChecklistArreglos) => {
    setSelectedChecklistArreglos(newChecklistArreglos);
    setCurrentPage(1);
    setProductos([]);
    setHasMore(true);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        checklistArreglos: JSON.stringify(newChecklistArreglos),
        page: 1,
      },
    });
  };

  const handleOrdenChange = (newOrden) => {
    setSelectedOrden(newOrden);
    setCurrentPage(1);
    setProductos([]);
    setHasMore(true);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        orden: newOrden,
        page: 1,
      },
    });
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="w-full flex flex-row max-w-[1440px] min-w-sm mx-auto lg:px-[50px] xl:px-[180px] relative">
        <Filtros
          checklist={selectedChecklist}
          setChecklist={handleChecklistChange}
          checklistArreglos={selectedChecklistArreglos}
          setChecklistArreglos={handleChecklistArreglosChange}
          orden={selectedOrden}
          setOrden={handleOrdenChange}
        />
        <div className="w-full">
          <Productos productos={productos} />
          {loading && (
            <div className="flex justify-center items-center w-full py-4">
              <span>Cargando más productos...</span>
            </div>
          )}
          {!hasMore && (
            <div className="flex justify-center items-center w-full py-4">
              <span>No hay más productos</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
