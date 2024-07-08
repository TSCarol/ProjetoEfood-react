import { CardPage, ImagemCard, TituloCard, DescriptionCard } from './styles';

import { TagButtonPage } from '../../components/Tag/styles';

type Props = {
    title: string;
    description: string;
    image: string;
}

const Pagina = ({ title, description, image }: Props) => (
    <CardPage>
        <ImagemCard>
            <img src={image} alt={title}/>
        </ImagemCard>
        <TituloCard>{title}</TituloCard>
        <DescriptionCard>
            {description}
        </DescriptionCard>
        <TagButtonPage>
            Adicionar ao carrinho
        </TagButtonPage> 
    </CardPage>
)

export default Pagina
