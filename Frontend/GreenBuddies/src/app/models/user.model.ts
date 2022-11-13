export interface IUser {
    birthDate: string,
    country: {
        id: number,
        name: string
    },
    email: string,
    id: number,
    lastName: string,
    name: string,
    password: string,
    role: {
        id: number,
        roleName: string
    },
    state: {
        id: number,
        name: string
    },
    zipCode: {
        code: string,
        id: number
    }
}