import floresSchema from "./schemas/flores";
import complementosSchema from "./schemas/complementos";
import productosSchema from "./schemas/productos";
import arreglosSchema from "./schemas/arreglos";
import categoriasSchema from "./schemas/categorias";

export const schema = {
  types: [productosSchema, floresSchema,arreglosSchema, categoriasSchema, complementosSchema],
}
