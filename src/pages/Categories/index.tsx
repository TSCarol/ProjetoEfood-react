import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReceitaList from "../../components/PratosList";
import  Details from "../../components/Details"

import Header from "../../components/Header";
import axios from 'axios';
import { useGetFeatureGameQuery } from "../../services/api"

export type CardapioItem = {
    tipo: string,
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string,
}

async function fetchCardapioItems(): Promise<CardapioItem[]> {
    try {
        const response = await axios.get('https://fake-api-tau.vercel.app/api/efood/restaurantes');
        const data = response.data;
        const cardapioItems = data.flatMap((restaurante: any) => 
            restaurante.cardapio.map((item: CardapioItem) => ({
                ...item,
                tipo: restaurante.tipo 
            }))
        );
        return cardapioItems;
    } catch (error) {
        console.error('Error fetching cardapio items:', error);
        return [];
    }
}

const Categories = () => {
    const[cardapio, setCardapio] = useState<CardapioItem[]>([]);
    const [modalEstaAberto, setModalEstaAberto] = useState(false);
    const [modalData, setModalData] = useState<CardapioItem>({
        tipo: "",
        foto: "",
        preco: 0,
        id: 0,
        nome: "",
        descricao: "",
        porcao: ""
    });

    const { category } = useParams<{ category: string }>(); 
    const navigate = useNavigate();
    const { data, isLoading } = useGetFeatureGameQuery();

    useEffect(() => {
        if (category) {
            fetchCardapioItems().then((res: CardapioItem[]) => {
                const filteredItems = res.filter(item => item.tipo.toLowerCase() === category.toLowerCase());
                setCardapio(filteredItems);
            });
        }
    }, [category]);

    const abrirModal = (item: CardapioItem) => {
        setModalData(item);
        setModalEstaAberto(true);
    };

    const fecharModal = () => {
        setModalEstaAberto(false);
    };

    return (
        <>
            <Header />
            <ReceitaList categorias={cardapio} abrirModal={abrirModal} />
            <Details 
                title={modalData.nome} 
                description={modalData.descricao}
                porcao={modalData.porcao}
                preco={modalData.preco} 
                image={modalData.foto} 
                modalEstaAberto={modalEstaAberto}
                fecharModal={fecharModal}
                abrirModal={abrirModal}
            />
        </>
    );
};

export default Categories;