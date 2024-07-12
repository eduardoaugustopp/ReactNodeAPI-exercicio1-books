import CardRecomenda from '../CardRecomenda'
import { Titulo } from '../Titulo'
import { styled, StyleSheetManager } from 'styled-components'
import ayrtonImg from "../../imagens/Ayrton_2.png"
import kartImg from "../../imagens/Kart.png"
import { useEffect, useState } from 'react'
import { getLivros } from '../../servicos/livros'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    margin: 20px 0;

    img {
        width: 7%;
        max-width: 100px;
        margin: 0.5em;
    }

    @media (max-width: 900px) {
        flex-wrap: wrap;

        img {
            width: 25%; 
            margin: 5px;
        }
    }
`;

const Cards = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 20px;

    @media (max-width: 1100px) {
        gap: 0px;
        flex-direction: column;
    }
`;

function UltimosLancamentos() {

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livrosDaAPI = await getLivros();
        setLivros(livrosDaAPI);
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'cor'}>
            <UltimosLancamentosContainer>
                <Titulo
                    cor="#650000"
                    tamanhofonte="36px"
                >NOVOS LANÇAMENTOS ESPERAM POR VOCÊ
                </Titulo>
                <NovosLivrosContainer>
                    {livros.map((livro, index) =>
                        <img src={`http://localhost:8000/${livro.imagem}`} alt="imagem de livro" />
                    )}
                </NovosLivrosContainer>
                <Cards>
                <CardRecomenda
                    titulo="Legado do automobilismo"
                    subtitulo="Ayrton Senna"
                    descricao="Três vezes campeão mundial de Fórmula 1, conhecido por sua habilidade extraordinária na pista e sua determinação feroz."
                    imagem={ayrtonImg}
                />
                  <CardRecomenda
                    titulo="Talvez você também se interesse por..."
                    subtitulo="Karting manual"
                    descricao="Todos os fundamentos das corridas de kart, atendendo aos novatos, mas suficientemente detalhado para beneficiar aqueles que competem em nível de clube."
                    imagem={kartImg}
                />
                </Cards>
            </UltimosLancamentosContainer>
        </StyleSheetManager>
    )
}

export default UltimosLancamentos