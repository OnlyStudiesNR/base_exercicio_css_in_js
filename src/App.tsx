import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import StyledGlobal from './global'

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
