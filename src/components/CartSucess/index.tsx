import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartContainerSucess, Sidebar, Box } from "./styles"
import { RootReducer } from "../../store";
import { TagButtonPage } from "../Tag/styles";
import { close } from "../../store/reducers/cart";

interface CartSuccessProps {
    orderID: string | null;
}

const CartSuccess: React.FC<CartSuccessProps> = ({ orderID }) => {
    const { isOpen } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleConclude = () => {
        dispatch(close()); 
        navigate("/");
    };

    return (
        <CartContainerSucess className={isOpen ? 'is-open' : ''}>
            <Sidebar>
                <Box>
                    <h2>Pedido realizado - {orderID}</h2>
                    <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido</p>
                    <br />
                    <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                    <br />
                    <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                    <br />
                    <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                </Box>
                <TagButtonPage title="Concluir" onClick={handleConclude}>Concluir</TagButtonPage>
            </Sidebar>
        </CartContainerSucess>
    )
}

export default CartSuccess;
