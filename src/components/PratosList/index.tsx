import { ContainerPage, ListPage } from "./styles"
import Receita from "../Pratos"
import { CardapioItem } from '../../pages/Categories'

type Props = {
    categorias: CardapioItem[];
    abrirModal: (item: CardapioItem) => void;
};

const ReceitaList = ({ categorias, abrirModal }: Props) => (
    <ContainerPage>
        <div>
            <ListPage>
                {categorias.map((categoria) => (
                    <Receita 
                        key={categoria.id}
                        title={categoria.nome} 
                        description={categoria.descricao} 
                        image={categoria.foto} 
                        abrirModal={() => abrirModal(categoria)}
                    />
                ))} 
            </ListPage>
        </div>
    </ContainerPage>
)

export default ReceitaList