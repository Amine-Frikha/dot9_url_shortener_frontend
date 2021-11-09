import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React, {Component} from 'react';


class App extends Component {
  constructor(){
    super()
  }
  
  render(){
    return( 
      <div className="App">
        <header className="App-header">
          <form onSubmit={} style={{ display: 'flex',flexDirection: 'column'}}>
            <TextField value={} onChange={}
            style={{ marginBottom: 22 }} className="textfield" id="outlined-basic" 
            label="Please Input Your Link" variant="outlined" />
            <Button style={{
            marginBottom: 22,
            backgroundColor: "#47597E",
            padding: "10px 20px",
            fontSize: "18px"}} 
            variant="contained" type= 'Submit'>Shorten</Button>
          </form>
          Your Shortened URL : 
          <Box component="span" sx={{ p: 2, border: '0.5px dashed grey' }}>
            <a href={}> {} </a>
          </Box>
        </header>
      </div>)
   
  }
}


export default App;
