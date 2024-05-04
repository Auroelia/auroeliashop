import floresSchema from "./schemas/flores";
import complementosSchema from "./schemas/complementos";
import productosSchema from "./schemas/productos";
import arreglosSchema from "./schemas/arreglos";
import categoriasSchema from "./schemas/categorias";
import cuponSchema from "./schemas/cupones";
import suscripcionesSchema from "./schemas/suscripciones";
import pedidosSchema from "./schemas/pedidos";
import usuariosSchema from "./schemas/usuarios";

export const schema = {
  types: [productosSchema, floresSchema,arreglosSchema, categoriasSchema, complementosSchema,cuponSchema, suscripcionesSchema, pedidosSchema, usuariosSchema ],
}
