import {  ContainerHeader, ImagemHero } from "./styles"

import heroImagem from '../../assets/images/Hero.png'
import logo from '../../assets/images/logo.svg.svg'
import ImageHeader from '../../assets/images/image2.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"

const Header = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }
 
    return (
        <div>
            <ContainerHeader style={{backgroundImage: `url(${heroImagem})`}}>
                    <div className="container">
                       <a href="#">Restaurantes</a>
                        <img src={logo} alt="EFOOD" />
                        <button onClick={openCart}>
                            {items.length} produto(s) no carrinho
                        </button>
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
}

export default Header