import React from 'react'

const Products = (props) => {
  return (
    <div>
      <h4>Products</h4>
      <ul>
        {props.products.map((item) => <li>{item.item}</li>)}
      </ul>
    </div>
  )
}

export default Products
