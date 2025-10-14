export interface loginFormType {

    email?: string,
    password?: string,

}

export type registerFormType = loginFormType & {
    name?: string,
    confirmPassword?: string
}

