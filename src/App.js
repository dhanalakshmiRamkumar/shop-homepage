import React,  {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import {  MenuItem ,IconButton,  Grid,  Table, TableHead, TableRow, TableCell , Divider } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Container } from '@mui/system';
import BasicCard from './card'
import CounterComponent from './CounterComponent';
import Button from './Button';

function App(props){
  const [render , setRender] = useState(true);
  const [counter,setCounter] = useState(0);


  // first param: callback functions, second param : dependency array
  useEffect(() => {
    console.log("Mounting Phase")
  }, [])

  useEffect(() => {
    console.log("Updating Phase")
  }, [counter , render])

 
  const toggleComponent = (render) => {
    setRender(!render)
  }

  return(
    <div>
   <AppBar style={{backgroundColor:'white'}}>
    <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
      <IconButton>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>shop
        <ArrowDropDownIcon/>
        <MenuItem >
          
          Popular Arival
        </MenuItem>
        
        <Divider sx={{ my: 0.5 }} />
        <MenuItem >
          
          Special Item
        </MenuItem>
        
       </MenuItem>
      </IconButton>

      <IconButton style={{border:'1px solid black'}}>
        <MenuItem>
        
        <CounterComponent/>Cart
        </MenuItem>
      </IconButton>
    </Toolbar>
   </AppBar>

      <img src='https://www.loveandlavender.com/wp-content/uploads/2017/11/affordable-wedding-dress-shop-example.jpg'
      alt='dress image' width='1365' height='300'
      />
      <br/> <br/> <br/> <br/> 
      
      <Grid >
      <Container fixed>
         <Table>
          <TableHead>
            <TableRow>
             <TableCell>
             <BasicCard subheading='Fancy Item' heading='$60-100' buttonName='view product'/>
             </TableCell> 
             
             <TableCell>
             <BasicCard subheading='Sales Item' heading='$90-100' buttonName='add cart'/>
             </TableCell> 
             
             <TableCell>
             <BasicCard subheading='Special Item' title='$100' heading='$80'  rating='{4}' buttonName='add cart'/>
             </TableCell> 

             <TableCell>
             <BasicCard subheading='Popular Item' heading='$150' rating='four' buttonName='add cart'/>
             </TableCell> 
             
            </TableRow>


            <TableRow>
             <TableCell>
             <BasicCard subheading='Fancy Item' heading='$60-100' buttonName='view product'/>
             </TableCell> 
             
             <TableCell>
             <BasicCard subheading='Sales Item' heading='$100-100' buttonName='add cart'/>
             </TableCell> 
             
             <TableCell>
             <BasicCard subheading='Special Item' title='$150' heading='$100' rating='{4}' buttonName='add cart'/>
             </TableCell> 

             <TableCell>
             <BasicCard subheading='Popular Item' heading='$60' rating='{4}' buttonName='add cart'/>
             </TableCell> 
             
            </TableRow>
          </TableHead>
         </Table>
      </Container>
    </Grid>
    
    </div>
  )
}




export default App;