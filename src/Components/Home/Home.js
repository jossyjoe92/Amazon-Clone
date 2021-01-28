import React from 'react'
import amazonclone from '../../Assets/amazonclone.jpg'
import './Home.css'
import Product from '../Products/Product'
import leanstartup from '../../Assets/leanstartup.jpg'
import Apple11 from '../../Assets/Apple11.jpg'
import canvas from '../../Assets/canvas.jpg'
import samsungtv from '../../Assets/samsuntv.jpg'
import smartwatch from '../../Assets/smartwatch.jpg'
import earpiece from '../../Assets/earpiece.jpg'
import infinix from "../../Assets/infinix.png"
import electronics from "../../Assets/electronics.png"
import amazonban from "../../Assets/Amazonban.jpg"
import beauty from '../../Assets/beauty.jpg'
import Slider from 'react-animated-slider';
import computer from "../../Assets/computers.png"
import household from "../../Assets/household.jpg"
import amazonpic from "../../Assets/amazonpic.jpg"
import amazonbeauty from "../../Assets/amazonbeauty.jpg"
import watch from "../../Assets/watch.jpg"
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
import Categories from '../Categories/Categories'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import amazonbanner from '../../Assets/amazonbanner.jpg'



const content =  [
	{
		
        image: `${amazonpic}`,
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
    },
    {
    
        image: `${amazonbeauty}`,
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
	},
	
	{
		
        image: `${amazonban}`,
		user: 'Michael',
		userProfile: 'https://s7.postimg.cc/6exjimijv/3_3x.png',
	},

	{
		title: 'Discover Amazon',
		description:
			'Get best shoping experience at at amazing prices.',
		button: 'Buy now',
        image: `${amazonclone}`,
       
		user: 'Katerina',
		userProfile: 'https://s7.postimg.cc/hsk2th5tn/6_3x.png',
	},
];

function Home() {
    

    return (
        <div className="home">
            {/*
            <img 
            className="home_image"
            src={amazonclone}
            alt=""
            />
            */}
           
            <Slider className="slider-wrapper" autoplay={10000}>
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') `}}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					
					</div>
					
				</div>
			))}
		</Slider>
       
    <div className='home_grid'>
        <Grid container spacing={0}>
            <Grid className='home_grid_item' item xs={6} sm={4} md={3}>
                <Categories  image={beauty} header='Beauty Products'/>
            </Grid>
            <Grid className='home_grid_item' item xs={6} sm={4} md={3}>
                <Categories image={electronics} header='Electronics' />
            </Grid>
            <Hidden only={['sm', 'xs']}>
            <Grid className='home_grid_item' item xs={2} sm={4} md={3}>
                <Categories image={computer} header='Computers and Accessories' />
            </Grid>
            </Hidden>
            <Grid className='home_grid_item' item xs={6} sm={4} md={3}>
                 <Categories image={watch} header='Smart Watch'  />
                </Grid>
           
            <Hidden only={['sm', 'xs']}>
            <Grid className='home_grid_item' item xs={6} sm={4} md={3}>
                <Categories image={beauty} header='Toys and Games' />
            </Grid>
            </Hidden> 
            <Grid className='home_grid_item' item  xs={6} sm={4} md={3}>
                <Categories image={infinix}  header='Smart Phones' />
            </Grid>
        
            <Grid className='home_grid_item' item xs={6} sm={4} md={3}>
                <Categories image={canvas} header='Shoes and foot Wears' />
            </Grid>
            <Grid className='home_grid_item' item xs={6} sm={4} md={3}>
                <Categories image={household} header='Household Appliances' />
            </Grid>
                               
            </Grid>
        </div>
        <div className='home_centerBanner'>
            <img 
                src={amazonbanner}
                alt=""
                />
        </div>
        <div className='home_trending'>
            <h1>Most Trending Products</h1>
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

export default Home
