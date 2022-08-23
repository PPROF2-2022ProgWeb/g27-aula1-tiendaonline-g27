import { IImage } from "./image.model";
export interface IProduct {
  id: number;
  nombre: string | null;
  categoria: string | null;
  descripcion: string | null;
  descuento: boolean;
  detalles: string[];
  imagenes: IImage[],
  precio_con_descuento: number | null;
  precio_sin_descuento: number | null;
  recomendacion: string | null;
  stock: number | null;
}