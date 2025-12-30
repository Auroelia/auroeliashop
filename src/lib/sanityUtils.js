// /lib/sanityUtils.js

import { client } from "@/lib/client";

export async function getProductos({ 
  checklist = [], 
  checklistArreglos = [], 
  orden = 'mas-nuevo',
  page = 1,
  limit = 12 
}) {
  try {
    let filters = [];

    // Construir los filtros de manera adecuada
    if (checklist.length > 0) {
      filters.push(`flor._ref in ${JSON.stringify(checklist)}`);
    }
    if (checklistArreglos.length > 0) {
      filters.push(`arreglo._ref in ${JSON.stringify(checklistArreglos)}`);
    }

    // Construir la consulta GROQ base
    const baseFilter = `*[_type == "producto" ${filters.length > 0 ? '&& ' + filters.join(' && ') : ''}]`;

    // Obtener el total de productos para la paginación
    const totalQuery = `count(${baseFilter})`;
    const total = await client.fetch(totalQuery);

    // Construir la consulta con orden
    let orderClause = '';
    switch (orden) {
      case 'mas-nuevo':
        orderClause = ` | order(_createdAt desc)`;
        break;
      case 'precio-ascendente':
        orderClause = ` | order(coalesce(tamanos[0].precio, 0) asc)`;
        break;
      case 'precio-descendente':
        orderClause = ` | order(coalesce(tamanos[0].precio, 0) desc)`;
        break;
      default:
        orderClause = ` | order(_createdAt desc)`;
        break;
    }

    // Calcular offset para paginación
    const offset = (page - 1) * limit;
    
    // Consulta completa sin proyección restrictiva para obtener todos los campos
    const query = `${baseFilter}${orderClause}[${offset}...${offset + limit}]`;

    const productos = await client.fetch(query);
    
    // Calcular información de paginación
    const totalPages = Math.ceil(total / limit);
    
    return { 
      productos,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    };
  } catch (error) {
    console.error('Error in getProductos:', error);
    throw new Error('Error al obtener productos desde Sanity.');
  }
}
