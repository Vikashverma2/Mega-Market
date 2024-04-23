import React from 'react'
import './Popular.css'
import data_product from '../assets/data'
import item from '../Item/item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item)=>{
            return <item key={i}/>
        })}
      </div>
    </div>
  )
}

export default Popular
