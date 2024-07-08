import styled from "styled-components";
import { cores } from "../../styles";


export const ContainerPage = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const Imagem = styled.div`
    width: 100%;
    height: 186px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    position: relative;
   
    img {
            width: 125px;
            height: 57.5px;
            margin-bottom: 65.5px;
        }
`

export const Texto = styled.p`
    font-size: 18px;
    font-weight: bold;
    line-height: 21.09px;
    text-align: center;
    color: ${cores.rosa};
    position: absolute;
    top: 59px;
    left: 171px;
`

export const LinkProduto = styled.a`
    font-size: 18px;
    font-weight: bold;
    line-height: 21.09px;
    text-align: right;
    color: ${cores.rosa};
    position: absolute;
    width: 256px;
    height: 21px;
    top: 59px;
    left: 939px;
    margin-left: 193px;
`
export const ImagemHeader = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    algn-items: center;
`

export const ImageSec = styled.img`
    width: 100%;
    height: auto;
`

export const TextoCate = styled.p`
    font-size: 32px;
    color: ${cores.branco};
    position: absolute;
    top: 25px;
    margin-left: 171px;
`

export const TextoTitulo = styled.p`
    font-size: 32px;
    font-weight: bold;
    color: ${cores.branco};
    position: absolute;
    left: 171px;
    bottom: 32px;
`
