import React from 'react'
import './../styles/UserForm.css'
import {TextField} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#ff8080',
      },
      text:{
          primary: '#ff8080',
          secondary: 'rgba(255, 128, 128, 0.5)'         
      }
    },
  });

export default function form(){
    return(
        <div className='form-container'>
            <ThemeProvider theme={theme}>
            <TextField id="outlined-basic" label="Battery Capacity in mAh" className="text-fields" variant="outlined" />
            </ThemeProvider>         
        </div>
    )
}