import Pesquisa from '../componentes/Pesquisa'
import styled from 'styled-components'
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(97.54deg, #950c0c 35.49%, #000000 165.37%);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home;
