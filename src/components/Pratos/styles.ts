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
    width: 100%;
    height: 167px;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%
        display: block;
        object-fit: cover; 
        object-position: center;
        display: block;
        padding: 8px;
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
    font-size: 12px;
    color: ${cores.rosaClaro};
    margin: 8px;
`