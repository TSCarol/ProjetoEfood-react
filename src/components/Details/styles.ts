import styled from "styled-components";
import { cores } from "../../styles";
import { TagButtonPage } from "../Tag/styles";

export const CardDetails = styled.div`
    Width: 1024px;
    heigth: 344px;
    background-color: ${cores.rosa};
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    ${TagButtonPage} {
        font-size: 14px;
        font-weight: bold;
        color: ${cores.rosa};
        width: 218px; 
        position: absolute;
        bottom: 59px;
    }
`

export const ImagemCardDetails = styled.div`
    float: left;

    img {
        width: 280px;
        height: 280px;
        margin-top: 32px;
        margin-left: 32px;
        margin-bottom: 32px;
        margin-right: 24px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const TituloDetails = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branco};
    line-height: 21.09px;
    padding-top: 32px;
`

export const DescriptionDetails = styled.div`
    font-size: 14px;
    color: ${cores.branco};
    line-height: 22px;
    margin-right: 32px;
    margin-top: 16px;
    margin-bottom: 16px;
`

export const Porcao = styled.div`
    font-size: 14px;
    color: ${cores.branco};
    line-height: 22px;
    margin-bottom: 16px;
`

export const Logo =styled.img`
    position: absolute;
    margin-top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    max-width: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visivel {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.80);
    }
`

export const ModalContent = styled.div`
    max-width: 1024px;
    position: relative;
    z-index: 1;
`