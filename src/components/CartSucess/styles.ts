import styled from "styled-components";
import { color } from "../../styles";
import { TagButtonPage } from "../Tag/styles";

export const CartContainerSucess = styled.div`
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
    background-color: ${color.pink};
    padding: 32px 8px 0 7px;
    max-width: 360px;
    min-width: 360px;
    box-sizing: border-box;

    
    ${TagButtonPage} {
        font-size: 14px;
        font-weight: bold;
        color: ${color.pink};
        margin-bottom: 8px;
        position: relative;
        display: block;
        max-width: 100%;
        width: 100%;
        text-align: center;
    }
`

export const Box = styled.div`
    margin-bottom: 24px;
    color: ${color.lightPink};

    h2 {
        font-size: 16px;
        font-weigth: bold;
    }

    p {
        font-size: 14px;
        line-height: 22px
    }
`