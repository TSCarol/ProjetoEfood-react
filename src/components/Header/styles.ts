import styled from "styled-components";
import { cores } from "../../styles";

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;

    img {
        display: block;
        margin: 0 auto;
        position: relative;
    }
`;

export const ContainerHeader = styled.header`
    background-size: cover;
    background-position: center;
    position: relative;
    height: 186px;
    display: flex;
    align-items: center;
    justify-content: center;

    .container { 
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;

        a {
            flex: 1;
            margin-top: 2px;
            font-size: 18px;
            font-weight: bold;
            line-height: 21.09px;
            text-decoration: none;
            color: ${cores.rosa};

            &:first-child {
                text-align: left;
            }
            &:last-child {
                text-align: right;
            }
        }

        img {
            margin-bottom: 10px;
        }
    }
`;


export const ImagemHero = styled.div`
    position: relative;
    display: block;
    height: 280px;
    width: 100%; 

    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    &::after {
        position: absolute;
        background-color: #000;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        opacity: 0.5;
    }

    .container {
        z-index: 1;
        position: relative;

        .text-container {
            position: absolute;
            width: 100%;
        }

        h2 {
            font-size: 32px;
            font-weight: bold;
            color: ${cores.branco};
            margin-top: 156.5px;
        }

        p { 
            font-size: 32px;
            font-weight: 100;
            color: ${cores.branco};
            margin-top: 25px;
        }
    }
`