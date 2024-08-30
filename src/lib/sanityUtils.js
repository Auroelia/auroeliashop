import { client } from "@/lib/client";

export async function getProductos({ page = 1, itemsPerPage = 12, checklist = [], checklistArreglos = [], orden = 'mas-vendidos' }) {
  try {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    let filters = [];

    // Construir los filtros de manera adecuada
    if (checklist.length > 0) {
      filters.push(`flor._ref in ${JSON.stringify(checklist)}`);
    }
    if (checklistArreglos.length > 0) {
      filters.push(`arreglo._ref in ${JSON.stringify(checklistArreglos)}`);
    }

    // Construir la consulta GROQ
    let query = `*[_type == "producto" ${filters.length > 0 ? '&& ' + filters.join(' && ') : ''}]`;

    // Aplicar orden
    switch (orden) {
      case 'mas-nuevo':
        query += ` | order(_createdAt asc)`; // Ordenar por la fecha de creación
        break;
      case 'precio-ascendente':
        query += ` | order(coalesce(tamanos[0].precio, 0) asc)`; // Ordenar por precio ascendente
        break;
      case 'precio-descendente':
        query += ` | order(coalesce(tamanos[0].precio, 0) desc)`; // Ordenar por precio descendente
        break;
      default:
        query += ` | order(_createdAt asc)`; // Ordenar por defecto
        break;
    }

    // Aplicar la paginación
    query += `[${start}...${end}]`;

    const productos = await client.fetch(query);

    // Calcular el total de productos para el cálculo de páginas
    console.log('filters:', filters);

    const totalQuery = `count(*[_type == "producto" ${filters.length > 0 ? '&& ' + filters.join(' && ') : ''}])`;

    console.log('totalQuery:', totalQuery);

    const totalItems = await client.fetch(totalQuery);

    return { productos, totalItems };
  } catch (error) {
    console.error('Error in getProductos:', error);
    throw new Error('Error al obtener productos desde Sanity.');
  }
}
