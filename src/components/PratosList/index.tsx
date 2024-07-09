import { Categoria } from "../../models"
import Receita from "../Pratos"
import { ContainerPage, ListPage } from "./styles"

type Props = {
    categorias: Categoria[];
}

const ReceitaList = ({ categorias }: Props) => (
    <ContainerPage>
        <div>
            <ListPage>
                {categorias.map((categoria) => (
                    <Receita 
                        key={categoria.id}
                        title={categoria.title}
                        description={categoria.description}
                        image={categoria.image}
                    />
                ))} 
            </ListPage>
        </div>
    </ContainerPage>
)

export default ReceitaList