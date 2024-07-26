import { CardPage, ImagemCard, TituloCard, DescriptionCard } from './styles';
import { TagButtonPage } from '../Tag/styles';

type Props = {
    title: string;
    description: string;
    image: string;
    abrirModal: () => void;
}

const Pagina = ({ title, description, image, abrirModal }: Props) => (
    <CardPage>
        <ImagemCard>
            <img src={image} alt={title}/>
        </ImagemCard>
        <TituloCard>{title}</TituloCard>
        <DescriptionCard>
            {description}
        </DescriptionCard>
        <TagButtonPage onClick={abrirModal}>
            Mais detalhes
        </TagButtonPage> 
    </CardPage>
)

export default Pagina