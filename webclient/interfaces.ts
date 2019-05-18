export interface IUserData {
    username: string,
    password: string,
    email?: string
}

export interface ITokens {
    accessToken: string | undefined | 'undefined',
    refreshToken: string | undefined | 'undefined'
}

export interface IAuthor {
    id: number,
    name: string
}

export interface ITranslator {
    id: number,
    name: string
}

export interface IChapter {
    id: number,
    title: string,
    uploadDate: string
}

export interface IPage {
    id: number,
    image: string
}

export interface IManga {
    chapters?: IChapter[],
    translators: ITranslator[],
    tags: ITag[],
    authors: IAuthor[],
    id: number,
    title: string,
    description: string,
    image: string,
    type: {
        id: number,
        name: string
    }
}

export interface ITag {
    id: number,
    name: string
}
