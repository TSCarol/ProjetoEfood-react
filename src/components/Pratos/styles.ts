import styled from "styled-components";
import { cores } from "../../styles";
import { TagButtonPage } from "../Tag/styles";

export const CardPage = styled.div`
    width: 320px;
    height: 338px;
    background-color: ${cores.rosa};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;

    ${TagButtonPage} {
        margin-top: auto;
        align-self: flex-end;
        margin-left: 8px;
        margin-bottom: 8px;
        margin-right: 8px;
        color: ${cores.rosa};
        font-size: 14px;
        font-weight: bold;
    }
`
export const ImagemCard = styled.div`
    width: 304px;
    height: 167px;
    margin-bottom: 8px;
    
    img {
        padding-top: 8px;
        padding-left: 8px;
        padding-right:8px;
    }
`

export const TituloCard = styled.h2`
    font-size: 16px;
    font-weight: bold;
    color: ${cores.rosaClaro};
    padding-top: 8px;
    padding-left: 8px;
`

export const DescriptionCard = styled.p`
    font-size: 14px;
    color: ${cores.rosaClaro};
    Line height: 22px;
    margin: 8px;
`