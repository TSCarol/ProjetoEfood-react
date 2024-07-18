import { TagButtonPage } from "../Tag/styles"

import { Overlay, CartContainer, Sidebar, Prices, Valor, PricesContainer, CartItem, ImagemPizza } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

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

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
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
                    <Prices>{formataPreco(getTotalPrice())}</Prices>
                </PricesContainer>
                <TagButtonPage title='Clique aqui para continuar com a entrega'>Continuar com a entrega</TagButtonPage>
            </Sidebar>
        </CartContainer>
    )  
}
export default Cart