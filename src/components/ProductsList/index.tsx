import Receita from "../../models";
import Product from "../Product";
import { Container, List } from "./styles";

type Props = {
    receitas: Receita[];
}

const ProductsList = ({ receitas }: Props) => (
    <Container>
        <div>
            <List>
                {receitas.map((receita, index) => (
                    <Product 
                        key={receita.id}
                        title={receita.title}
                        category={receita.category}
                        description={receita.description}
                        infos={receita.infos}
                        image={receita.image}
                        nota={receita.nota}
                        primeiro={index === 0}
                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductsList