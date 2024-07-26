import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-size: cover;


  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
  }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;

    img {
        width: 125px;
        height: 57.5px;
        margin-top: 40px;

        @media (max-width: ${breakpoints.tablet}) {
            width: 100px;
            height: 46px;
        }
    }

    p {
        font-size: 36px;
        margin-top: 138.5px;
        color: ${cores.rosa}; 
        font-weight: bold;
        
        @media (max-width: ${breakpoints.tablet}) {
          font-size: 24px;
          margin-top: 20px;
        }
    }
`