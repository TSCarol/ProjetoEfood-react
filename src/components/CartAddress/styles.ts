import styled from "styled-components";
import { color } from "../../styles";
import { TagButtonPage } from "../Tag/styles";

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
    background-color: ${color.pink};
    padding: 32px 8px 0 7px;
    max-width: 360px;
    min-width: 360px;
    box-sizing: border-box;

    h2 {
        font-size: 16px;
        font-weight: bold;
        color: ${color.lightPink};
        margin-bottom: 16px;
    }

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

export const Box =styled.div`
    margin-bottom: 24px;
`

export const InputGroup = styled.div`
    label {
        font-size: 14px;
        font-weight: bold;
        color: ${color.lightPink};
        margin-bottom: 8px;
        display: block;

    }

    input {
        background-color: ${color.lightPink};
        border: none;
        height: 32px;
        padding: 0 8px;
        margin-bottom: 8px;
        position: relative;
        display: block;
        max-width: 100%;
        width: 100%;
        text-align: center;

        &:focus {
            outline: none;
        }

        &[type="number"] {
            -moz-appearance: textfield;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
    }
`

export const Row = styled.div`
     display: flex;
    justify-content: space-between;

    ${InputGroup} {
        flex: 1;

        &:not(:last-child) {
            margin-right: 34px;
        }

        &:first-child {
            max-width: calc(50% - 17px);
        }

        &:last-child {
            max-width: calc(50% - 17px);
        }
    }
`