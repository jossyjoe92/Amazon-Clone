import React from 'react'
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import './Categories.css'



function Categories(props) {
    let history = useHistory();

    return (
        <div className='card'>
             <Card >
       
        <CardContent>
            <Typography  className='card_title' component="h2">
                {props.header}
            </Typography>
            </CardContent>
            <Link to = "/products">
                <CardMedia
                    className='card_image'
                    image={props.image}
                    title="Contemplative Reptile"
                    />
            </Link>
                <CardActions>
            
                <Button onClick={()=>history.push('./products') } size="small" color="primary">
                    Shop Now
                </Button>
                
                </CardActions>
           
            </Card>
        </div>
    )
}

export default Categories
