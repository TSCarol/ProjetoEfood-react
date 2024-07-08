import styled from "styled-components";
import { cores } from "../../styles";
import { TagButton, TagContainer } from "../Tag/styles";

export const ImagemCard = styled.div`
    width: 472px;
    height: 217px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const TagInfo = styled.div`
    position: absolute;
    right: 16px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    bottom: 175px;
`

export const Card = styled.div`
    width: 472px;
    height: 398px;
    border: 1px solid ${cores.rosa};
    background-color: ${cores.branco};
    position: relative;

    ${TagContainer} {
        margin-left: 8px;
        margin-top: 16px;
        margin-bottom: 8px;
    }

    ${TagButton} {
        position: absolute;
        bottom: 8px;


        p {
            margin-top: 4px;
            margin-left: 6px;
            margin-bottom: 4px;
            margin-right: 6px;
            font-weight: 700px;
        }
    }
`

export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rosa};
    top: 8px;
`

export const Descricao = styled.p`
    width: 456px;
    height: 88px;
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-left: 8px;
    color: ${cores.rosa};
`

export const NotaContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: ${cores.rosa};
    font-size: 18px;
    font-weight: bold;
    padding: 8px;

    > div {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    img {
        width: 21px;
        height: 21px;
        margin-left: 8px;
        margin-right: 8px;
    }
`