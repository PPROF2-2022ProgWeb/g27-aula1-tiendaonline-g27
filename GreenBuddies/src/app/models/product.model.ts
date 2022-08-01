import { Image } from "./image.model";
export interface Product {
  id: number;
  nombre: string | null;
  categoria: string | null;
  descripcion: string | null;
  descuento: boolean;
  detalles: string[];
  imagenes: Image[],
  precio_con_descuento: number | null;
  precio_sin_descuento: number | null;
  recomendacion: string | null;
  stock: number | null;
}