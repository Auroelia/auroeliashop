// /lib/sanityUtils.js

import { client } from "@/lib/client";

export async function getProductos({ checklist = [], checklistArreglos = [], orden = 'mas-vendidos' }) {
  try {
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
        query += ` | order(_createdAt desc)`; // Ordenar por la fecha de creación (más nuevo primero)
        break;
      case 'precio-ascendente':
        query += ` | order(coalesce(tamanos[0].precio, 0) asc)`; // Ordenar por precio ascendente
        break;
      case 'precio-descendente':
        query += ` | order(coalesce(tamanos[0].precio, 0) desc)`; // Ordenar por precio descendente
        break;
      default:
        query += ` | order(_createdAt desc)`; // Ordenar por defecto
        break;
    }

    const productos = await client.fetch(query);
    return { productos };
  } catch (error) {
    console.error('Error in getProductos:', error);
    throw new Error('Error al obtener productos desde Sanity.');
  }
}
