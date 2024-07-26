import { useSelector } from "react-redux";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { TagButtonPage } from "../Tag/styles"
import { CartContainer, Sidebar, InputGroup, Row, Box } from "./styles"
import { RootReducer } from "../../store";
import CartPayment from "../CartPayment";

interface CardAddressProps {
    onBackToCart: () => void;
    totalPrice: number;
}

interface DeliveryData {
    fullName: string;
    address: string;
    city: string;
    code: string;
    number: string;
    additional: string;
}

const CardAddress: React.FC<CardAddressProps> = ({ onBackToCart, totalPrice }) => {
    const { isOpen } = useSelector((state: RootReducer) => state.cart);
   
    const [isDeliveryStep, setDeliveryStep] = useState(false);
    const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const handleContinueDelivery = () => {
        console.log("Continuando para a etapa de pagamento");
        setDeliveryStep(true);
    }

    const form = useFormik({
        initialValues: {
            fullName: '',
            address: '',
            city: '',
            code: '',
            number: '',
            additional: ''
        },
        validationSchema: Yup.object().shape({
            fullName: Yup.string()
                .min(1, 'O nome precisa ter pelo menos 1 caracter')
                .required('O campo é obrigatório'),
            address: Yup.string()
                .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            city: Yup.string()
                .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
                .required('O campo é obrigatório'),
            code: Yup.string()
                .min(8, 'O CEP precisa ter pelo menos 8 números')
                .required('O campo é obrigatório'),
            number: Yup.number()
                .min(1, 'O número precisa ter pelo menos 1 número')
                .required('O campo é obrigatório'),
        }),
        onSubmit: async (values) => {
            const payload = {
                products: [
                    {
                        id: 1,
                        price: totalPrice
                    }
                ],
                delivery: {
                    receiver: values.fullName,
                    address: {
                        description: values.address,
                        city: values.city,
                        zipCode: values.code,
                        number: values.number,
                        complement: values.additional || ''
                    }
                },
                payment: {
                    card: {
                        name: 'Nome do cartão',
                        number: '1234 1234 1234 1234',
                        code: 123,
                        expires: {
                            month: 12,
                            year: 2024,
                        }
                    }
                }
            };

            console.log("Enviando dados do formulário:", payload);

            try {
                const response = await axios.post('https://fake-api-tau.vercel.app/api/efood/checkout', payload);
                setDeliveryData(values);
                console.log("Dados de entrega definidos:", values);
                handleContinueDelivery();
            } catch (error) {
                console.error('Erro ao enviar os dados de endereço:', error);
                setSubmissionError('Ocorreu um erro ao enviar os dados de endereço. Por favor, tente novamente.');
            }
        }
    });

    const getErrorMessage = (fieldName: string) => {
        const error = form.errors[fieldName as keyof typeof form.errors];
        const touched = form.touched[fieldName as keyof typeof form.touched];
        if (touched && error) return error;
        return '';
    };

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Sidebar>
                {isDeliveryStep ? (
                    <CartPayment 
                        onBackToCart={() => setDeliveryStep(false)} 
                        totalPrice={totalPrice} 
                        deliveryData={deliveryData}
                    />
                ) : (
                    <form onSubmit={form.handleSubmit}>
                        <Box>
                            <h2>Entrega</h2>
                            <InputGroup>
                                <label htmlFor="fullName">Quem irá receber</label>
                                <input id="fullName" type="text" name="fullName" value={form.values.fullName} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('fullName')}</small>
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="address">Endereço</label>
                                <input id="address" type="text" name="address" value={form.values.address} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('address')}</small>
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="city">Cidade</label>
                                <input id="city" type="text" name="city" value={form.values.city} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('city')}</small>
                            </InputGroup>
                            <Row>
                                <InputGroup>
                                    <label htmlFor="code">CEP</label>
                                    <input id="code" type="text" name="code" value={form.values.code} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                    <small>{getErrorMessage('code')}</small>
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="number">Número</label>
                                    <input id="number" type="number" name="number" value={form.values.number} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                    <small>{getErrorMessage('number')}</small>
                                </InputGroup>
                            </Row>
                            <InputGroup>
                                <label htmlFor="additional">Complemento (opcional)</label>
                                <input id="additional" type="text" name="additional" value={form.values.additional} onChange={form.handleChange} onBlur={form.handleBlur}/>
                            </InputGroup>
                        </Box>
                        <TagButtonPage type="submit" title='Continuar com o pagamento'>Continuar com o pagamento</TagButtonPage>
                        <TagButtonPage type="button" title='Voltar para o carrinho' onClick={onBackToCart}>Voltar para o carrinho</TagButtonPage>
                    </form>
                )}
            </Sidebar>
        </CartContainer>
    );
}

export default CardAddress;
