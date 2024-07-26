import { Imagem, Container } from "./styles"
import heroImg from '../../assets/images/Hero.png'
import logo from '../../assets/images/logo.svg.svg'

const Hero = () => (
    <Imagem style={{ backgroundImage: `url(${heroImg})`}}>
        <Container>
            <img src={logo} alt="EFOOD" />
            <p>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
            </p>
        </Container>
    </Imagem>
)

export default Hero