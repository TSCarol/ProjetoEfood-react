export class Receita {
    title: string
    category:string
    description: string
    image: string
    infos: string[]
    nota: string
    id: number
    primeiro?: boolean;

    constructor(
        id: number,
        title: string,
        category:string,
        description: string,
        image: string,
        infos: string[],
        nota: string,
        primeiro?: boolean
    ) {
        this.id = id
        this.title = title
        this.category = category
        this.description = description
        this.image = image
        this.infos = infos
        this.nota = nota
        this.primeiro = primeiro
    }
}

export class Categoria {
    title: string
    description: string
    image: string
    id: number

    constructor(
        id: number,
        title: string,
        description: string,
        image: string,
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.image = image
    }
}