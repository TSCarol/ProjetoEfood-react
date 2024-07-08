import Hero from "../../components/Hero";
import ProductsList from "../../components/ProductsList";
import Receita from "../../models";

import prato1 from '../../assets/images/comida1.png'
import prato2 from '../../assets/images/comida2.png'

const receitas: Receita[] = [
    {
        id: 1,
        title: "Hioki Sushi",
        category: "Japonesa",
        description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!`,
        infos: ["Destaque da semana"],
        image: prato2,
        nota: "4.9",
        primeiro: true
    },
    {
        id: 2,
        title: "La Dolce Vita Trattoria",
        category: "Italiana",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        infos: [],
        image: prato1,
        nota: "4.6"
    },  
    {
        id: 3,
        title: "La Dolce Vita Trattoria",
        category: "Italiana",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        infos: [],
        image: prato1,
        nota: "4.6"
    },  
    {
        id: 4,
        title: "La Dolce Vita Trattoria",
        category: "Italiana",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        infos: [],
        image: prato1,
        nota: "4.6"
    }, 
    {
        id: 5,
        title: "La Dolce Vita Trattoria",
        category: "Italiana",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        infos: [],
        image: prato1,
        nota: "4.6"
    }, 
    {
        id: 6,
        title: "La Dolce Vita Trattoria",
        category: "Italiana",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        infos: [],
        image: prato1,
        nota: "4.6"
    } 
];

const Home = () => (
    <>
        <Hero />
        <ProductsList receitas={receitas}/>
    </>
)

export default Home