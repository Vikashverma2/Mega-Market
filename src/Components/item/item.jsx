import React from 'react'
import './Item.css'

const item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prize">
        <div className="item-new-prize">
        {props.new_price}
        </div>
        <div className="item-old-prize">
            {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default item
