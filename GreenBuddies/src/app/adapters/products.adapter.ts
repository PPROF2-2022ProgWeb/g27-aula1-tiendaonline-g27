import { IProduct } from 'src/app/models/product.model';
import { IApiProduct } from './../models/product.model';
import { adaptImage, adaptImageFrontToAPI } from './images.adapter';

export function adaptProduct(productApi: IApiProduct) {
    const adaptedProduct: IProduct = {
        id: productApi.id || null,
        nombre: productApi.name,
        categoria: productApi.category.name,
        descripcion: productApi.description,
        descuento: productApi.discount,
        detalles: productApi.details ? productApi.details.split("*") : [],
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

function handleDetails(details: string | string[] | null) {
    if (typeof (details) === "string") {
        return details.split(",").join("*");
    }
    if (Array.isArray(details)) {
        return details.join("*");
    }
    return null;
}

export function adaptProductFromFrontToAPI(product: IProduct) {
    const adaptedProduct: IApiProduct = {
        id: product.id || null,
        category: {
            description: "Artículos para el cuidado personal",
            id: 1,
            name: "Cuidado personal"
        },
        description: product.descripcion || "",
        details: handleDetails(product.detalles),
        discount: product.descuento,
        images: product.imagenes.map(image => adaptImageFrontToAPI(image)),
        name: product.nombre || "",
        price: product.precio_sin_descuento || null,
        priceWithDiscount: product.precio_con_descuento || null,
        quantity: product.stock,
        recommendation: product.recomendacion || null
    };
    return adaptedProduct;
}

export function adaptProductsFromFrontToAPI(products: IProduct[]) {
    const adaptedProducts: IApiProduct[] = [];
    if (products) {
        products.forEach(product => {
            adaptedProducts.push(adaptProductFromFrontToAPI(product))
        })
    }
    return adaptedProducts;
}