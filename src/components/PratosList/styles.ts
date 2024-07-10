import styled from "styled-components";

export const ContainerPage = styled.section`
    margin: 56px 171px; 
    width: calc(100% - 342px);
    max-width: 1440px; 
    min-height: 708px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
`

export const ListPage = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 32px;
    list-style: none;
    margin: 0 171px; 
    max-width: 100%; 
    box-sizing: border-box; 

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr); 
    }
`