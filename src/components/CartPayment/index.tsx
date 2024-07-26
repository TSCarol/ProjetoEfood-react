import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { CartContainer, Sidebar, Box, InputGroupPay, Row, Rowpay } from "./styles"
import { TagButtonPage } from "../Tag/styles";
import { RootReducer } from "../../store";
import CartSuccess from "../CartSucess";

interface CartPaymentProps {
    onBackToCart: () => void;
    totalPrice: number;
    deliveryData: any;
}

const CartPayment: React.FC<CartPaymentProps> = ({ onBackToCart, totalPrice, deliveryData }) => {
    const { isOpen } = useSelector((state: RootReducer) => state.cart);
    const navigate = useNavigate();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [orderID, setOrderID] = useState<string | null>(null);

    const formataPreco = (preco: number) => `R$ ${preco.toFixed(2)}`;

    const form = useFormik({
        initialValues: {
            cardOwer: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: ''
        },
        validationSchema: Yup.object({
            cardOwer: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
            cardNumber: Yup.string().min(16, 'O número precisa ter pelo menos 16 caracteres').required('O campo é obrigatório'),
            cardCode: Yup.string().min(3, 'A cidade precisa ter pelo menos 3 caracteres').required('O campo é obrigatório'),
            expiresMonth: Yup.number().min(2, 'O mês precisa ter 2 caracteres').required('O campo é obrigatório'),
            expiresYear: Yup.number().min(4, 'O ano precisa ter 4 caracteres').required('O campo é obrigatório'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('https://fake-api-tau.vercel.app/api/efood/checkout', {
                    products: [
                        {
                            id: 1,
                            price: totalPrice,
                        },
                    ],
                    delivery: {
                        receiver: deliveryData.fullName,
                        address: {
                            description: deliveryData.address,
                            city: deliveryData.city,
                            zipCode: deliveryData.code,
                            number: deliveryData.number,
                            complement: deliveryData.additional || ''
                        }
                    },
                    payment: {
                        card: {
                            name: values.cardOwer,
                            number: values.cardNumber,
                            code: parseInt(values.cardCode),
                            expires: {
                                month: parseInt(values.expiresMonth),
                                year: parseInt(values.expiresYear),
                            }
                        }
                    }
                });
                setOrderID(response.data.orderId);
                setPaymentSuccess(true);
            } catch (error) {
                console.error('Ocorreu um erro:', error);
                alert('Ocorreu um erro ao processar o pagamento. Tente novamente.');
            }
        }
    });

    const getErrorMessage = (fieldName: string) => {
        const error = form.errors[fieldName as keyof typeof form.errors];
        const touched = form.touched[fieldName as keyof typeof form.touched];
        if (touched && error) return error;
        return '';
    };

    if (paymentSuccess) {
        return <CartSuccess orderID={orderID} />;
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Sidebar>
                <h2>Pagamento - Valor a pagar {formataPreco(totalPrice)}</h2>
                <form onSubmit={form.handleSubmit}>
                    <Box>
                        <InputGroupPay>
                            <label htmlFor="cardOwer">Nome do titular do cartão</label>
                            <input
                                id="cardOwer"
                                type="text"
                                name="cardOwer"
                                value={form.values.cardOwer}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('cardOwer')}</small>
                        </InputGroupPay>
                        <Row>
                            <InputGroupPay>
                                <label htmlFor="cardNumber">Número do cartão</label>
                                <input
                                    id="cardNumber"
                                    type="text"
                                    name="cardNumber"
                                    value={form.values.cardNumber}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                <small>{getErrorMessage('cardNumber')}</small>
                            </InputGroupPay>
                            <InputGroupPay>
                                <label htmlFor="cardCode">CVV</label>
                                <input
                                    id="cardCode"
                                    type="text"
                                    name="cardCode"
                                    value={form.values.cardCode}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                <small>{getErrorMessage('cardCode')}</small>
                            </InputGroupPay>
                        </Row>
                        <Rowpay>
                            <InputGroupPay>
                                <label htmlFor="expiresMonth">Mês de vencimento</label>
                                <input
                                    id="expiresMonth"
                                    type="number"
                                    name="expiresMonth"
                                    value={form.values.expiresMonth}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                <small>{getErrorMessage('expiresMonth')}</small>
                            </InputGroupPay>
                            <InputGroupPay>
                                <label htmlFor="expiresYear">Ano de vencimento</label>
                                <input
                                    id="expiresYear"
                                    type="number"
                                    name="expiresYear"
                                    value={form.values.expiresYear}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                <small>{getErrorMessage('expiresYear')}</small>
                            </InputGroupPay>
                        </Rowpay>
                    </Box>
                    <TagButtonPage title='Finalizar Compra' onClick={form.submitForm}>
                        Finalizar pagamento
                    </TagButtonPage>
                    <TagButtonPage title='Voltar para o carrinho' onClick={onBackToCart}>
                        Voltar para a edição de endereço
                    </TagButtonPage>
                </form>
            </Sidebar>
        </CartContainer>
    );
};

export default CartPayment;