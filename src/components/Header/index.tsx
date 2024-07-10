import {  ContainerHeader, ImagemHero } from "./styles"

import heroImagem from '../../assets/images/Hero.png'
import logo from '../../assets/images/logo.svg.svg'
import ImageHeader from '../../assets/images/image2.png'

const Header = () => (
    <div>
        <ContainerHeader style={{backgroundImage: `url(${heroImagem})`}}>
                <div className="container">
                   <a href="#">Restaurantes</a>
                    <img src={logo} alt="EFOOD" />
                    <a href="#">0 produto(s) no carrinho</a>
                </div>
        </ContainerHeader>
        <ImagemHero style={{ backgroundImage: `url(${ImageHeader})`}}>
            <div className="container">
                <div>
                    <div className="text-container">
                        <p> Italiana</p>
                        <h2>La Dolce Vita Trattoria</h2>
                    </div>
                </div>
            </div>
        </ImagemHero>
    </div>
   
)

export default Header