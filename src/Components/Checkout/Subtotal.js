import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../StateProvider';
import {getBasketTotal} from '../../reducer'
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{basket, user} ] = useStateValue ()

    const proceedCheckout = (e)=>{
        e.preventDefault();
        if(user){
            history.push('./payment')
        }else{
            history.push('./login')
        }
    }
    return (
        <div className="subtotal">
            {/*price */}
            <CurrencyFormat
                renderText={(value)=> (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift?
                        </small>
                        </>
                )

                }
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeperator={true}
               prefix={"$"} 
            />
            <button onClick={proceedCheckout}>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
