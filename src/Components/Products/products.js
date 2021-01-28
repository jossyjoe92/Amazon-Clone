import React from 'react'

import '../Home/Home.css'
import Product from '../Products/Product'
import leanstartup from '../../Assets/leanstartup.jpg'
import Apple11 from '../../Assets/Apple11.jpg'
import canvas from '../../Assets/canvas.jpg'
import samsungtv from '../../Assets/samsuntv.jpg'
import smartwatch from '../../Assets/smartwatch.jpg'
import earpiece from '../../Assets/earpiece.jpg'
import infinix from "../../Assets/infinix.png"

import watch from "../../Assets/watch.jpg"
import productsBan from "../../Assets/productsBan.jpg"

import Hidden from '@material-ui/core/Hidden';





function Products() {
    

    return (
        <div className="home">
       
        <div className='home_centerBanner productsBan'>
            <img 
            style={{backgroundColor:"white"}}
                src={productsBan}
                alt=""
                />
        </div>
        
            <div className="home_row">
                <Product 
                id="123141"
                title="the Lean Startup: How Constant Innovation Creates Successful Business"
                price={11.96}
                rating={5}
                image={leanstartup}  
                />
                  <Product 
                id="1232140"
                title="Male Canvas: Quality airavata canvas., delivery is nationwide... make your order"
                price={15.66}
                rating={3}
                image={canvas}  
                />
                 <Hidden only={['sm', 'xs']}>
                 <Product 
                id="123741"
                title="M3 Bluetooth Smart Watch:HD display watch"
                price={7.96}
                rating={5}
                image={watch}  
                />
                </Hidden>
            </div>
            <div className="home_row">
                <Product 
                id="1232142"
                title="HUAWEI FreeBuds 3:wireless stereo earphones.."
                price={5.90}
                rating={4}
                image={earpiece}  
                />
                  <Product 
                id="1232145"
                title="Apple I-Phone 11: Sleek design and Longer battery life"
                price={11.96}
                rating={5}
                image={Apple11}  
                />
                <Hidden only={['sm', 'xs']}>
                   <Product 
                id="1232547"
                title="M4 Bluetooth Smart Watch: Brand"
                price={14.96}
                rating={2}
                image={smartwatch}  
                />
                </Hidden>
            </div>
            <div className="home_row">
                <Product 
                id="1232249"
                title="SAM-65UHD: Samsung SMART 40 inch Full HD"
                price={55.96}
                rating={4}
                image={samsungtv}  
                />
                  <Hidden only={['sm', 'xs']}>
                   <Product 
                id="1232547"
                title="M4 Bluetooth Smart Watch: Brand"
                price={14.96}
                rating={2}
                image={smartwatch}  
                />
                </Hidden>
                 <Product 
                id="1232749"
                title="Infinix Hot 10: Infinix Hot 10 inch Full HD"
                price={23.96}
                rating={5}
                image={infinix}  
                />
               
                
            </div>
           
        </div>
    )
}

export default Products
