import React, { Component } from 'react'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
import base from './base'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      categorias:[],
      anuncios:[]
    }
    base.bindToState('categorias',{
      context:this,
      state:'categorias'
    })
    base.bindToState('anuncios',{
      context:this,
      state:'anuncios',
      queries:{
        limitToLast:3
      }
    })
  }
  render() {
    let index=0
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <h3>Últimos Anúncios</h3>
          <div className="row">
          {
              this.state.anuncios.map((anuncio,indice) => {
                return [
                        <AnuncioHome anuncio={anuncio} key={indice} />,
                          ++index%4 === 0 && <div key={'a'+indice} className="w-100"></div>
                      ]
              })
            }      
          </div>
          <h3>Categorias</h3>
          <div className="row">
            {
              this.state.categorias.map((cat,indice) => {
                return [
                        <LinkCategoria categoria={cat} key={indice} />,
                          ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
                      ]
              })
            }          
          </div>
          
        </div>
        <Footer />      
      </div>
    )
  }
}

export default App
