import { Link } from 'react-router-dom'
import React,{useState} from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import './Payment.css'
import { useElements, useStripe,CardElement} from '@stripe/react-stripe-js'
import {getBasketTotal} from '../../reducer'
import CurrencyFormat from "react-currency-format"
import FlipMove from 'react-flip-move';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const handleChange =(event) =>{
        setDisabled(event.empty);
        setError(event.error  ? event.error.message : '')
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setProcessing(true)
       
    }
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{/*user?.email*/}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className='payment_section'>
                     <div className='payment_title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                    <FlipMove   staggerDelayBy={50}
                                appearAnimation="accordionVertical"
                                enterAnimation="fade"
                                
                                >
                        {basket.map((item,i)=>(
                            <CheckoutProduct
                            key={i} 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />

                        ))}
                    </FlipMove>
                    </div>
                    
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                            {/*stripe magic will go */}
                            <h4>Card Details</h4>
                            <form>
                                <CardElement onChange={handleChange}/>

                                <div className='payment_priceContainer'>
                                <CurrencyFormat
                                        renderText={(value)=> (
                                            <>
                                                <h3>
                                                    Order Total: {value}
                                                </h3>
                                               
                                                </>
                                        )

                                        }
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"} 
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Payment
