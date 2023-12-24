import React from 'react'
import { PRODUCTS} from "../../products"
import {Product} from "./product"
import "./shop.css"

export const Shop = () => {
  return (
    <div>
        <div className='shop'>
            <div className='one'>
                <h1 className=''>Shop</h1>
            </div>
            <div className='products'>
                {" "}
                {PRODUCTS.map((product)=>(
                  <Product data={product}/>  
                ))}
            </div>
        </div>
    </div>
  )
}
