import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Ofertas from './views/ofertas'
import Blog from './views/blog'
import Cadastro from './views/cadastro'
import Home from './views/home'
import Login from './views/login'
import Destino from './views/destino'
import Sobre from './views/sobre'
import Contato from './views/contato'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Ofertas} path="/ofertas" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Cadastro} path="/cadastro" />
        <Route exact component={Home} path="/" />
        <Route exact component={Login} path="/login" />
        <Route exact component={Destino} path="/destino" />
        <Route exact component={Sobre} path="/sobre" />
        <Route exact component={Contato} path="/contato" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
