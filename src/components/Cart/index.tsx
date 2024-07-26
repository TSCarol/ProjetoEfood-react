import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TagButtonPage } from "../Tag/styles"
import { Overlay, CartContainer, Sidebar, Prices, Valor, PricesContainer, CartItem, ImagemPizza } from "./styles"
import { close, remove } from '../../store/reducers/cart'
import CardAddress from '../CartAddress'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDeliveryStep, setDeliveryStep] = useState(false); 

    const closeCart = () => {
        dispatch(close())
    }

    const formataPreco = (preco: number) => `R$ ${preco.toFixed(2)}`;
    
    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return acumulador += valorAtual.preco;
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const handleContinueDelivery = () => {
        if (items.length === 0) {
            closeCart();
            navigate('/');
        } else {
            setDeliveryStep(true);
        }        
    }

    const handleBackToCart = () => {
        setDeliveryStep(false);
    }

    const totalPrice = getTotalPrice();

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                {isDeliveryStep ? (
                        <CardAddress onBackToCart={handleBackToCart} totalPrice={totalPrice} /> 
                    ) : (
                        <div>
                            <ul>
                                {items.map((item) => (
                                    <CartItem key={item.id}>
                                        <ImagemPizza src={item.foto} alt={item.nome} />
                                        <div>
                                            <h3>{item.nome}</h3> 
                                            <span>{formataPreco(item.preco)}</span>
                                        </div>
                                        <button onClick={() => removeItem(item.id)} type="button" />
                                    </CartItem>
                                ))}
                            </ul>
                            <PricesContainer>
                                <Valor>Valor total</Valor>
                                <Prices>{formataPreco(totalPrice)}</Prices>
                            </PricesContainer>
                            <TagButtonPage title='Clique aqui para continuar com a entrega' onClick={handleContinueDelivery}>Continuar com a entrega</TagButtonPage>
                        </div>
                    )}
            </Sidebar>
        </CartContainer>
    )  
}
export default Cart