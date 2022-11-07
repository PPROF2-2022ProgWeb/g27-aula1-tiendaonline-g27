import { IApiImage } from './../models/image.model';
export function adaptImage(image: IApiImage) {
    return {
        id: image.id,
        src: image.url,
        alt: image.alt
    }
}