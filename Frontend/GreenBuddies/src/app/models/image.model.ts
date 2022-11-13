export interface IImage {
    id: number | null;
    src: string;
    alt: string | null;
}

export interface IApiImage {
    id: number | null,
    alt: string | null,
    url: string
}