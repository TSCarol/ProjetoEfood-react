import styled from "styled-components";

import { cores } from "../../styles";

export const ContainerFooter = styled.footer`
    background-color: ${cores.rosaClaro};
    width: 100%;
    height: 298px auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
     
    p {
        color: ${cores.rosa};
        font-size: 10px;
        width: 480px;
        height: 24px;
        line-height: 11.72px;
        margin-bottom: 40px;
    }
`

export const ImageFooter = styled.div`
    padding: 40px;
`

export const Links = styled.ul`
    display: flex;
    margin-top: 32.5px;
    list-style-type: none;
    justify-content: center;
    padding: 0;
    margin-bottom: 80px;
`

export const Link = styled.li`
    width: 24px;
    height: 24px;
    text-decoration: none;
    margin-left: 8px;
`