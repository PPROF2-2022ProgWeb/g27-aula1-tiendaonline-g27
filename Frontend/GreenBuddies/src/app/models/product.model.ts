import { IApiImage, IImage } from "./image.model";
export interface IProduct{
  id: number | null;
  nombre: string | null;
  categoria: string | null;
  descripcion: string | null;
  descuento: boolean;
  detalles: string[];
  imagenes: IImage[],
  precio_con_descuento: number | null;
  precio_sin_descuento: number | null;
  recomendacion: string | null;
  stock: number;
}

export interface IApiProduct {
  category: {
    description: string,
    id: number,
    name: string
  },
  description: string | null,
  details: string | null,
  discount: boolean,
  id: number | null,
  images: IApiImage[],
  name: string,
  price: number | null,
  priceWithDiscount: number | null,
  quantity: number,
  recommendation: string | null
}