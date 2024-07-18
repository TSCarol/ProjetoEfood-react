import styled from "styled-components";
import { cores } from "../../styles";

import { Props } from '.'

export const TagContainer = styled.div<Props>`
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};
    font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
    font-weight: bold;
    padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
    display: inline-block;
`

export const TagButton = styled.button`
    width: 82px;
    height: 24px;
    margin-top: 16px;
    margin-left: 8px;
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};
    font-size: 14px;
    display: inline-block;
    border: none;
`

export const TagButtonPage = styled.button`
    width: 304px;
    height: 24px;
    color: ${cores.rosaClaro};
    border: none;

`