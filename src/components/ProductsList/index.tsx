import Product from "../Product";
import { Container, List } from "./styles";

type Categoria = {
    id: number;
    titulo: string;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: cardapioItem[];
    destacado: boolean;
};

type cardapioItem = {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
};

type Props = {
    categorias: Categoria[];
}

const ProductsList = ({ categorias }: Props) => (
    <Container>
        <div>
            <List>
                {categorias.map((categoria) => (
                    <Product 
                        key={categoria.id}
                        title={categoria.titulo}
                        category={categoria.tipo}
                        description={categoria.descricao}
                        infos={[]} 
                        image={categoria.capa}
                        nota={categoria.avaliacao.toString()}
                        destacado={categoria.destacado}
                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductsList