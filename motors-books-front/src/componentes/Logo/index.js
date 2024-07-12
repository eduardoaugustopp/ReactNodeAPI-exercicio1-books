import styled from "styled-components";
import logo from "../../imagens/logo.png";

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    color: #000;

    img{
        margin-right: 10px;
    }

    @media (max-width: 600px) {

        p{
            display: none;
        }   
        
    }
`;

function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt='imagem de logo' />
            <p><strong>Motors</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;
