import ReceitaList from "../../components2/PratosList";
import Categoria from "../../modelsPage";

import Prato from '../../assets/images/image3.png'
import Header from "../../components2/Header";

const categorias: Categoria[] = [
    {
        id: 1,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: Prato,
    },
    {
        id: 2,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: Prato,
    },
    {
        id: 3,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: Prato,
    },
    {
        id: 4,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: Prato,
    },
    {
        id: 5,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: Prato,
    },
    {
        id: 6,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: Prato,
    },
];

const Categories = () => (
    <>
        <Header />
        <ReceitaList categorias={categorias}/>
    </>
)

export default Categories