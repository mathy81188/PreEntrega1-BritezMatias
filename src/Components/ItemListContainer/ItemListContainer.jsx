import React from 'react'
import "./ItemListContainer.css"
import "bootstrap/dist/css/bootstrap.min.css"

const ItemListContainer = (props) => {
  return (
    <div className='greeting'>
        {props.greeting} 
    </div>
  )
}

export default ItemListContainer