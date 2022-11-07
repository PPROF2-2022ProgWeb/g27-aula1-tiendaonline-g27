export interface IImage {
    id: number;
    src: string;
    alt: string | null;
}

export interface IApiImage {
    id: number,
    alt: string,
    url: string
}