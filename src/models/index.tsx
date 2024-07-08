class Receita {
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

export default Receita