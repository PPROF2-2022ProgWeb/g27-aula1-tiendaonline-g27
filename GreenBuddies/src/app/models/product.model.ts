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

export interface IApiProduct {
  category: {
    description: string,
    id: number,
    name: string
  },
  description: string,
  details: [
    {
      description: string,
      id: number
    }
  ],
  discount: true,
  id: number,
  images: [
    {
      alt: string,
      id: number,
      url: string
    }
  ],
  name: string,
  price: number,
  priceWithDiscount: number,
  quantity: number,
  recommendation: string
}