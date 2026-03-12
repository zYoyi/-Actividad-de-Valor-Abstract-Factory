import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Restaurantes from './paginas/Restaurantes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
