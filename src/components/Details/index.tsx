
import { TagButtonPage } from "../Tag/styles";
import { CardDetails, DescriptionDetails, ImagemCardDetails, Porcao, TextContainer, TituloDetails, Logo, Modal, ModalContent } from "./styles";

import logo from '../../assets/images/close1.svg'
import React, { useEffect } from "react";
import { CardapioItem } from "../../pages/Categories";

import { add, open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

type Props = {
    title: string;
    description: string;
    image: string;
    porcao: string;
    preco: number;
    modalEstaAberto: boolean;
    fecharModal: () => void;
    abrirModal: (item: CardapioItem) => void;
}; 

const Details = ({ title, description, image, porcao, preco, modalEstaAberto, fecharModal }: Props) => {
    const { items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch()
    const [modalData, setModalData] = React.useState<CardapioItem | null>(null);

    const addTocart = () => {
        if (modalData) {
            const itemExists = items.some(item => item.nome === modalData.nome && item.descricao === modalData.descricao);
            console.log('Item Exists:', itemExists);

            if (itemExists) {
                alert('O prato já está no carrinho');
            } else {
                dispatch(add(modalData));
                dispatch(open());
                fecharModal();
            }
        }
    }

    const formataPreco = (preco: number) => `R$ ${preco.toFixed(2)}`;

    useEffect(() => {
        if (modalEstaAberto) {
            setModalData({
                tipo: "", 
                foto: image,
                preco: preco, 
                id: Date.now(), 
                nome: title,
                descricao: description,
                porcao: porcao
            });
        }
    }, [modalEstaAberto, title, description, image, porcao, preco]);

    return  (
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
            <ModalContent className="container">
                <CardDetails>
                    <ImagemCardDetails>
                        <img src={image} alt="Prato" />
                    </ImagemCardDetails>
                    <TextContainer>
                        <TituloDetails>
                            {title}
                        </TituloDetails>
                        <DescriptionDetails>
                            {description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </DescriptionDetails>
                        <Porcao>
                            {porcao}
                        </Porcao>
                        <TagButtonPage type="button" title="Clique aqui para adicionar ao carrinho" onClick={addTocart}>
                            Adicionar ao carrinho - {formataPreco(preco)}
                        </TagButtonPage>
                    </TextContainer>
                    <Logo src={logo} alt="Logo" onClick={fecharModal}/>
                </CardDetails>
            </ModalContent>
            <div className="overlay"></div>
        </Modal>  
    );
}

export default Details