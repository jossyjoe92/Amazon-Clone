import React, { forwardRef } from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../../StateProvider';
import Hidden from '@material-ui/core/Hidden';

const CheckoutProduct =  forwardRef(({id,title,price,rating,image},ref) => {
    const [{basket}, dispatch ] = useStateValue ()
    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
               
            }) 
    }
    return (
        <div ref={ref} className="checkoutProduct">
             <Hidden only={['xl', 'lg', 'md' ,'sm']}>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </Hidden>
            <img className="checkoutProduct_image" src={image} alt="" />
           

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=> (
                        <p style={{color:'orange'}}>&#x2605;</p>
                    ))
                }
                </div>

               <Hidden only={[ 'xs']}>
                    <button onClick={removeFromBasket}>Remove from basket</button>
                </Hidden>
            </div>
        </div>
    )
})

export default CheckoutProduct
