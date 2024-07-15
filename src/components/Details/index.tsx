
import { TagButtonPage } from "../Tag/styles";
import { CardDetails, DescriptionDetails, ImagemCardDetails, Porcao, TextContainer, TituloDetails, Logo, Modal, ModalContent } from "./styles";

import logo from '../../assets/images/close1.svg'
import React from "react";
import { CardapioItem } from "../../pages/Categories";

type Props = {
    title: string;
    description: string;
    image: string;
    porcao: string;
    modalEstaAberto: boolean;
    fecharModal: () => void;
    abrirModal: (item: CardapioItem) => void;
}; 

export const Details = ({ title, description, image, porcao, modalEstaAberto, fecharModal }: Props) => (
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
                    <TagButtonPage>
                        Adicionar ao carrinho - R$ 60,90
                    </TagButtonPage>
                </TextContainer>
                <Logo src={logo} alt="Logo" onClick={fecharModal}/>
            </CardDetails>
        </ModalContent>
        <div className="overlay"></div>
    </Modal>  
);