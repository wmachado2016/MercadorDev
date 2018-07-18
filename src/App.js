import React, { Component } from 'react'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <h3>Últimos Anúncios</h3>
          <div className="row">
            <AnuncioHome />
            <AnuncioHome />
            <AnuncioHome />
          </div>
          <h3>Categorias</h3>
          <LinkCategoria categoria={{ categoria:'Automóveis','icon':'fa-car'}} />
        </div>
        <Footer />      
      </div>
    )
  }
}

export default App
