import { TagButton } from "../Tag/styles"
import { Card, Titulo, Descricao, ImagemCard, NotaContainer, TagInfo } from "./styles"

import logo from '../../assets/images/Page-1.svg'
import Tag from "../Tag";
import { useNavigate } from "react-router-dom";

type Props = {
    title: string;
    category: string;
    description: string;
    infos: string[];
    image: string;
    nota: string;
    primeiro?: boolean;
    destacado: boolean;
}

const Product = ({ title, category, description, infos, image, nota, destacado }: Props) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/categorias/${category.toLowerCase()}`);
    }


    return (
         <Card>
            <ImagemCard>
                <img src={image} alt={title}/>
                <TagInfo>
                    {infos.map(info => <Tag key={info}>{info}</Tag>)}
                    {destacado && <Tag>Destacado</Tag>}
                    <Tag>{category}</Tag>
                </TagInfo>
            </ImagemCard>
            <NotaContainer>
                <Titulo>{title}</Titulo>
                <div>
                    {nota}
                    <img src={logo} alt="Estrela" />
                </div>
            </NotaContainer>
            <Descricao>
                {description}
            </Descricao>
            <TagButton onClick={handleButtonClick}>
                <p>Saiba mais</p>
            </TagButton> 
        </Card>
    )
}

export default Product
