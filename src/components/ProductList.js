
import React from 'react';
import Product from './product.js'
export default function ProductList(props) {

    
  return (
    props.productlist.length > 0 ?
    props.productlist.map((product,i)=>{
      return <Product product={product} key={i} incrementQuanity={props.incrementQuanity}   deQuanity={props.deQuanity} remove={props.remove} index={i} />

    })
    : <h1> No products yet in the list</h1>
  )
}
