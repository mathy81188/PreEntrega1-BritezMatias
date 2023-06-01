import React from 'react'
import "./CartWidget.css"
import "bootstrap/dist/css/bootstrap.min.css"

const CartWidget = () => {
  return (
    <div className='CartWidget'>
        <i className="bi bi-basket2 text-white fw-semibold"></i>
        <h3>4</h3>
    </div>
  )
}

export default CartWidget