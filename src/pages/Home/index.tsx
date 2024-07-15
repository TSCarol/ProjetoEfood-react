import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import ProductsList from "../../components/ProductsList";

export type Categoria = {
    id: number,
    titulo: string,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: cardapioItem[];
    destacado: boolean;
};

type cardapioItem = {
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string,    
};

const Home = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then(res => res.json())
            .then((res: Categoria[]) => {
                setCategorias(res)
            });
    }, []);

    return (
        <>
            <Hero />
            <ProductsList categorias={categorias}/>
        </>
    )
}

export default Home