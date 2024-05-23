import React, { useContext, useEffect, useState } from 'react'
import Filtros from './Filtros'
import Productos from './Productos'
import { AppContext } from '@/context/AppContext';
import { client } from '../../../../sanity/lib/client';

function Layout() {
  const [checklist, setChecklist] = useState([]);
  console.log(checklist)
  const [checklistArreglos, setChecklistArreglos] = useState([]);

  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Cambia esto al número de elementos que quieres por página
  const [totalItems, setTotalItems] = useState(0);

  const [filteredProductos, setFilteredProductos] = useState([]);
  
  

  
  const handleChecklistChange = (event) => {
    // Filtrar todos los productos
    let newFilteredProductos = productos.filter((producto) => {
      return (
        checklist.includes(producto.flor._ref) ||
        checklistArreglos.includes(producto.arreglo._ref)
      );
    });
  
    // Ordenar los productos filtrados
    switch (orden) {
      case 'mas-nuevo':
        // Aquí debes implementar la lógica para ordenar por más vendidos
        // Por ahora, no cambiamos el orden
        break;
      case 'precio-ascendente':
        newFilteredProductos = [...newFilteredProductos].sort((a, b) => {
          const lastA = a.tamanos && a.tamanos.length > 0 ? a.tamanos[a.tamanos.length - 1].precio : 0;
          const lastB = b.tamanos && b.tamanos.length > 0 ? b.tamanos[b.tamanos.length - 1].precio : 0;
          return lastA - lastB;
        });
        break;
      case 'precio-descendente':
        newFilteredProductos = [...newFilteredProductos].sort((a, b) => {
          const lastA = a.tamanos && a.tamanos.length > 0 ? a.tamanos[a.tamanos.length - 1].precio : 0;
          const lastB = b.tamanos && b.tamanos.length > 0 ? b.tamanos[b.tamanos.length - 1].precio : 0;
          return lastB - lastA;
        });
        break;
      default:
        // Si no se especifica un orden, no cambiamos el orden
    }
  
    // Actualizar los productos filtrados y ordenados
    setFilteredProductos(newFilteredProductos);
  
    // Actualizar el número total de elementos
    setTotalItems(newFilteredProductos.length);
  
    // Reiniciar la página actual a 1
    setCurrentPage(1);
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


  // Agrega un nuevo estado para almacenar el valor seleccionado
const [orden, setOrden] = useState('mas-vendidos');

useEffect(() => {
  // Realiza la consulta a la API de Sanity para obtener todos los productos
  client
    .fetch('*[_type == "producto"]')
    .then((data) => {
      // Filtra los productos si hay elementos en la lista de verificación
      let productosFiltrados = data;
      if (checklist.length > 0) {
        productosFiltrados = data.filter((producto) => checklist.includes(producto.flor._ref));
      }

      // Ordena los productos antes de establecer el estado
      let productosOrdenados;
      switch (orden) {
        case 'mas-nuevo':
          // Aquí debes implementar la lógica para ordenar por más vendidos
          productosOrdenados = productosFiltrados;
          break;
        case 'precio-ascendente':
          productosOrdenados = [...productosFiltrados].sort((a, b) => a.precio - b.precio);
          break;
        case 'precio-descendente':
          productosOrdenados = [...productosFiltrados].sort((a, b) => b.precio - a.precio);
          break;
        default:
          productosOrdenados = productosFiltrados;
      }

      // Establece el estado con los productos ordenados
      setProductos(productosOrdenados);
      // Establece el total de items
      setTotalItems(productosOrdenados.length);
    })
    .catch((error) => console.error(error));
}, [orden, checklist]);

useEffect(() => {
  setFilteredProductos(
    filteredProductos && filteredProductos.length > 0
      ? filteredProductos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : productos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  );
}, [currentPage, productos]);





// Agrega un manejador para el evento onChange del select
const handleOrdenChange = (event) => {
  setOrden(event.target.value);
  setCurrentPage(1); // Agrega esta línea

};

 

  return (
    <div className='w-full h-full overflow-hidden relative'>

      <div className='w-full flex flex-row max-w-[1440px] min-w-sm mx-auto lg:px-[50px]
        xl:px-[180px] relative'>
          {/* <img src='/assets/Flores/floresIzq.png' alt='flores' className=' hidden 2xl:block w-[568px] h-[719px] object-cover absolute bottom-8 -left-[200px]'/>
          <img src='/assets/Flores/floresIzq.png' alt='flores' className=' hidden 2xl:block w-[568px] h-[719px] object-cover absolute top-[0px] -right-[400px]'/> */}
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
  )
}

export default Layout