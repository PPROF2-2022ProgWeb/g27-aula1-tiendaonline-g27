import { IApiImage, IImage } from './../models/image.model';
export function adaptImage(image: IApiImage) {
    return {
        id: image.id,
        src: image.url,
        alt: image.alt
    }
}

export function adaptImageFrontToAPI(image: IImage) {
    return {
        id: image.id,
        url: image.src,
        alt: image.alt
    }
}