import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from '../../StateProvider';
import { useHistory } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';

function Header() {
    const [{basket,user}, dispatch ] = useStateValue ()
    let history = useHistory();
   
    const signOut = (e)=>{
        e.preventDefault()

        dispatch({
            type: "Set_USER",
            user:null
        })
        history.push("/")
    }
    return (
        <nav className="header">
            {/* logo on d left */}
            <Link to = "/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt="" /> 
            </Link>
            {/*search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/*header nav */}
            <div className="header_nav">
                {/* 1st link */}
                {!user ? 
                <Link to="/login" className="header_link">
                
                <div className="header_option">
                  <span className="header_optionLine1">hello Guest</span>
                    <span className="header_optionLine2">Sign in</span>
                </div>
                 </Link>:
                 <div className='header_link'>
                    <div className="header_option" onClick={signOut}>
                        <span className="header_optionLine1">hello {user.email}</span>
                        <span className="header_optionLine2">Sign Out</span>
                    </div>  
                </div>
                }  
               

            {/* 2nd link */}
            <Hidden only={['sm', 'xs']}>
                <Link to="/login" className="header_link">
                <div className="header_option">
                    <span className="header_optionLine1">Returns</span>
                    <span className="header_optionLine2"> & Orders</span>
                </div>  
                </Link>
               
                {/* 3rd link */}
                <Link to="/login" className="header_link">
                <div className="header_option">
                    <span className="header_optionLine1">Your</span>
                    <span className="header_optionLine2">Prime</span>
                </div>  
                </Link>
                </Hidden>
                {/*checkout */}

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingCartOutlinedIcon />
                        <span className="header_optionLine2 header_basketCount">{basket.length}</span>
                    </div>
                </Link>
                
            </div>
    
        </nav>
    )
}

export default Header
