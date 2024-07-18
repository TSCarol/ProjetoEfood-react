import styled from "styled-components";
import { cores } from "../../styles";
import { TagButtonPage } from "../Tag/styles";

import fechar from '../../assets/images/lixeira.svg'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const Sidebar = styled.aside`
    z-index: 1;
    background-color: ${cores.rosa};
    padding: 40px 8px 0 8px;
    max-width: 360px;
    min-width: 360px;
    box-sizing: border-box;

    ${TagButtonPage} {
        font-size: 14px;
        font-weight: bold;
        color: ${cores.rosa};
        position: relative;
        display: block;
        max-width: 100%;
        width: 100%;
        text-align: center;
    }
`

export const PricesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 16px;
`

export const Valor = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${cores.rosaClaro};
`

export const Prices = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${cores.rosaClaro};
`

export const CartItem = styled.li`
    margin-bottom:16px;
    display: flex;
    width: 344px;
    height: 100px;
    padding: 8px 8px 12px 8px;
    background-color: ${cores.rosaClaro};
    position: relative;

    h3 {
        margin-left: 8px;
        color: ${cores.rosa};
        font-weight: bold;
        font-size: 18px;
    }

    span {
        display: inline-block;
        margin-top: 16px;
        margin-left: 8px;
        margin-bottom: 33px;
        color: ${cores.rosa};
        font-size: 14px;
    }

    button {
        background-image: url(${fechar});
        width: 16px;
        height: 16px;
        border: none;
        position: absolute;
        background-color: transparent;
        top: 76px;
        right: 8px;
    }
`

export const ImagemPizza = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
`