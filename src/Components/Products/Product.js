import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider';
//import { actionTypes } from '../../reducer';

function Product({id,title,rating,price,image}) {
    const [{basket}, dispatch ] = useStateValue ()
    const addToBasket = ()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">

            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=> (
                        <p style={{color:'orange'}}>&#x2605;</p>
                    ))
                }
            </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        
        </div>
    )
}

export default Product
