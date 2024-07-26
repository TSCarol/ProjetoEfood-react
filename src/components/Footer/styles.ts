import styled from "styled-components";

import { color } from "../../styles";

export const ContainerFooter = styled.footer`
    background-color: ${color.lightPink};
    width: 100%;
    height: 298px auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
     
    p {
        color:${color.pink};
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