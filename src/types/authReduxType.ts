
export interface User {
    id: string,
    name: string,
    email: string,
    role: string
}
export interface authReduxType {
    loading: boolean,
    error: string | null,
    user: User| null,
    success:boolean
    isAuth: boolean

}
