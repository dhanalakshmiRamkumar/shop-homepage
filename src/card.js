import React ,  {useEffect, useState} from 'react';

import Card from '@mui/material/Card';
import {CardActions , CardMedia , CardActionArea , Rating } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  PropTypes  from 'prop-types';



export default function BasicCard(props) {
 
    const [render , setRender] = useState(true);

    useEffect(() => {
      return() => {
        console.log("Triggered at unmounting phase");
      }
  
    }, []);
  
  
    
  return (
    <Card sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                      <CardMedia
                       component="img"
                       width="450"
                       height="300"
                       image="https://assets.vogue.com/photos/6258393df4d32274a826fb0f/1:1/w_2667,h_2667,c_limit/slide_7.jpg"
                       alt="baby dress image"
                      />
                      <CardContent>
                       <Typography gutterBottom variant="h5"  >
                        {props.subheading}
                       </Typography>
                       <Rating value={props.title} />
                    <Typography> <s>{props.title}</s></Typography>
                       <Typography>
                         {props.heading}
                       </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                     <Button  style={{border:'1px solid black'}}>
                      {props.buttonName}
                     </Button>
                    </CardActions>
                  </Card>
  );
}


BasicCard.proptype = {
  subheadings: PropTypes.string.isRequired,
  rating: PropTypes.number,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  
  buttonName: PropTypes.string,

}