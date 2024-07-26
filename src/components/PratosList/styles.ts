import styled from "styled-components";
import { breakpoints } from "../../styles";

export const ContainerPage = styled.section`
    margin: 56px auto-171px;
    width: calc(100% - 342px);
    max-width: 1440px; 
    min-height: 708px; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 56px auto;
    margin-bottom: 120px;

     @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        padding: 0 16px;
        box-sizing: border-box;
    }
`

export const ListPage = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 32px;
    list-style: none;
    padding: 0 171px; 
    max-width: 100%; 
    box-sizing: border-box; 

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr; 
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr; 
        padding: 0;
        gap: 16px;
    }
`