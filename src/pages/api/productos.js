// /pages/api/productos.js

import { getProductos } from "@/lib/sanityUtils";

export default async function handler(req, res) {
  const { checklist, checklistArreglos, orden, page, limit } = req.query;

  try {
    const productosData = await getProductos({ 
      checklist: checklist ? JSON.parse(checklist) : [], 
      checklistArreglos: checklistArreglos ? JSON.parse(checklistArreglos) : [], 
      orden: orden || 'mas-nuevo',
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 12
    });

    if (productosData && productosData.productos) {
      res.status(200).json(productosData);
    } else {
      res.status(500).json({ error: 'Datos de productos incompletos.' });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
}
