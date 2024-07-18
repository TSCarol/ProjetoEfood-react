import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.section`
    padding: 171px;
    margin: 80px auto;
    width:  1024px;
    height: 1290px;
    display: flex;
    justify-content: center;
    align-items: center;


    @media (max-width: ${breakpoints.tablet}) {
        padding: 80px 15px;
        margin: 40px auto;
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr; /* Cards enfileirados em tablets */
        gap: 24px;
    }
`