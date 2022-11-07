import { IProduct } from 'src/app/models/product.model';
import { IApiProduct } from './../models/product.model';
import { adaptImage } from './images.adapter';

const adaptFromObjToStringArray = (obj: {
    description: string,
    id: number
}) => {
    return obj.description;
}

export function adaptProduct(productApi: IApiProduct) {
    const adaptedProduct: IProduct = {
        id: productApi.id,
        nombre: productApi.name,
        categoria: productApi.category.name,
        descripcion: productApi.description,
        descuento: productApi.discount,
        detalles: productApi.details.map(detail => adaptFromObjToStringArray(detail)),
        imagenes: productApi.images.map(image => adaptImage(image)),
        precio_con_descuento: productApi.priceWithDiscount,
        precio_sin_descuento: productApi.price,
        recomendacion: productApi.recommendation,
        stock: productApi.quantity
    };
    return adaptedProduct;
}

export function adaptProducts(productsApi: IApiProduct[]) {
    const adaptedProducts: IProduct[] = [];
    if (productsApi) {
        productsApi.forEach(productApi => {
            adaptedProducts.push(adaptProduct(productApi))
        })
    }

    return adaptedProducts;
}