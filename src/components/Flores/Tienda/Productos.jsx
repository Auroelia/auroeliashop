import React, { useEffect, useState } from 'react';
import client from '../../../../sanity/lib/client'



function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza la consulta a la API de Sanity para obtener los productos
    client
      .fetch('*[_type == "producto"]')
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto._id}>{producto.nombre}</div>
      ))}
    </div>
  );
}

export default Productos;