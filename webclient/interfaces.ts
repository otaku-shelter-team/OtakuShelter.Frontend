export interface IUserData {
    username: string,
    password: string,
    email?: string
}

export interface ITokens {
    accessToken: string,
    refreshToken: string
}
