import categoriasSchema from "./schemas/categorias";
import complementosSchema from "./schemas/complementos";
import productosSchema from "./schemas/productos";

export const schema = {
  types: [productosSchema, categoriasSchema, complementosSchema],
}
