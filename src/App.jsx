import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Components/NavBar/navbar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'


class App extends React.Component {
 render(){
  return ( 
    <div className='App'>
        <Navbar />
      <div>
        <ItemListContainer greeting= "Los precios mas bajos del mercado"/>
      </div>
    </div>
    )
  }
}

export default App
