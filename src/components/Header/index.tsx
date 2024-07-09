import { ContainerPage, Imagem, Texto, LinkProduto, ImageSec, ImagemHeader, TextoCate, TextoTitulo, ImagemOverlay } from "./styles"

import heroImagem from '../../assets/images/Hero.png'
import logo from '../../assets/images/logo.svg.svg'
import ImageHeader from '../../assets/images/image2.png'

const Header = () => (
    <div>
        <ContainerPage>
            <Imagem style={{ backgroundImage: `url(${heroImagem})`}}>
                <img src={logo} alt="EFOOD" />
                <Texto>Restaurante</Texto>
                <LinkProduto href="#">0 produto(s) no carrinho</LinkProduto>
            </Imagem>      
        </ContainerPage>
        <ImagemHeader>
            <ImageSec src={ImageHeader} alt="Header" />
            <ImagemOverlay />
            <TextoCate>Italiana</TextoCate>
            <TextoTitulo>La Dolce Vita Trattoria</TextoTitulo>
        </ImagemHeader>
    </div>
   
)

export default Header