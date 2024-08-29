// /pages/api/productos.js

import { getProductos } from "@/lib/sanityUtils";

export default async function handler(req, res) {
  const { page, itemsPerPage, checklist, checklistArreglos, orden } = req.query;

  try {
    // Asegúrate de que estas variables sean parseadas correctamente
    const productosData = await getProductos({ 
        page: parseInt(page) || 1, 
        itemsPerPage: parseInt(itemsPerPage) || 12, 
        checklist: checklist ? JSON.parse(checklist) : [], 
        checklistArreglos: checklistArreglos ? JSON.parse(checklistArreglos) : [], 
        orden: orden || 'mas-vendidos' 
      });

    // Revisa si `productosData` tiene los campos `productos` y `totalItems`
    if (productosData && productosData.productos && productosData.totalItems !== undefined) {
      res.status(200).json(productosData);
    } else {
      res.status(500).json({ error: 'Datos de productos incompletos.' });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
}
