import styled from "styled-components";
import { cores } from "../../styles";


export const ContainerPage = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const Imagem = styled.div`
    width: 2031.81px;
    height: 163px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    position: relative;
   
    img {
            width: 125px;
            height: 57.5px;
            margin-top: -23px;
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
    left: 250px;
`

export const LinkProduto = styled.a`
    font-size: 18px;
    font-weight: bold;
    line-height: 21.09px;
    text-align: right;
    color: ${cores.rosa};
    position: absolute;
    top: 59px;
    right: 250px; 
    width: 256px; 
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

export const ImagemOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

export const TextoCate = styled.p`
    font-size: 32px;
    font-weight: 100;
    color: ${cores.branco};
    position: absolute;
    top: 25px;
    left: 250px;
`

export const TextoTitulo = styled.p`
    font-size: 32px;
    font-weight: bold;
    color: ${cores.branco};
    position: absolute;
    left: 250px;
    bottom: 32px;
`
