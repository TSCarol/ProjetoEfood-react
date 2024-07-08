import { ContainerFooter, ImageFooter, Links, Link } from "./styles"

import logo from '../../assets/images/logo.svg.svg'
import Instagram from '../../assets/images/redessociais/instagram.svg'
import Facebook from '../../assets/images/redessociais/facebook.svg'
import Twitter from '../../assets/images/redessociais/twitter.svg'

const Footer = () => (
    <ContainerFooter>
        <ImageFooter>
            <img src={logo} alt="EFOOD" />
            <Links>
                <Link>
                    <a href="#">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </Link>
                <Link>
                    <a href="#">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </Link>
                <Link>
                    <a href="#">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                </Link>
            </Links>
        </ImageFooter>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
    </ContainerFooter>
)

export default Footer