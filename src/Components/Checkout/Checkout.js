import React, { forwardRef } from 'react'
import "./Checkout.css"
import amazonbanner from '../../Assets/amazonbanner.jpg'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from "./Subtotal"
import FlipMove from 'react-flip-move';



function Checkout() {
    const [{basket, user} ] = useStateValue ()

    return (
        <div className="checkout">
           <div className="checkout_left">

            <img className="checkout_ad"
                src={amazonbanner}
                alt=""
                />
                {(basket.length===0) ?(
                    <div>
                        {user?<h2>Hello {user.email}</h2>:<h2>Hello Guest</h2>}
                        <h2>Your Shoping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more products
                            click on "Add to basket" next to the item. 
                        </p>
                    </div>
                ) : (
                    <div>
                        {user?<h2>Hello {user.email}</h2>:<h2>Hello Guest</h2>}
                        <h2 className="checkout_title">Your Shopping Basket</h2>
                        <FlipMove   staggerDelayBy={50}
                                appearAnimation="accordionVertical"
                                enterAnimation="fade"
                                
                                >
                                {basket.map((item,i) => (
                                    <CheckoutProduct key={i}
                                    ref={forwardRef}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                        />
                            ))}
                        </FlipMove>
                    </div>
                )}
            </div>
            {basket.length > 0 && (
            <div className="Checkout_right">
                <Subtotal />
              </div>
                )}
         
            
        </div>
    )
}

export default Checkout
