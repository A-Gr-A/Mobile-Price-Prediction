// import React from 'react'
// import './../styles/UserForm.css'
// import {TextField} from '@material-ui/core'
// import {
//   fade,
//   ThemeProvider,
//   withStyles,
//   makeStyles,
//   createMuiTheme,
// } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import { green } from '@material-ui/core/colors';
// // const theme = createMuiTheme({
// //     palette: {
// //       primary: {
// //         // Purple and green play nicely together.
// //         main: '#ff8080',
// //       },
// //       text:{
// //           primary: '#ff8080',
// //           secondary: 'rgba(255, 128, 128, 0.5)'         
// //       }
// //     },
// //   });
// const CssTextField = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'red',
//       },
//       '&:hover fieldset': {
//         borderColor: 'yellow',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'green',
//       },
//     },
//   },
// })(TextField);

// export default function form(){
//     return(
//         <div className='form-container'>
//             {/* <ThemeProvider theme={theme}>
//             <TextField id="outlined-basic" label="Battery Capacity in mAh" className="text-fields" variant="outlined" />
//             </ThemeProvider>          */}
//             <CssTextField
//         className={classes.margin}
//         label="Custom CSS"
//         variant="outlined"
//         id="custom-css-outlined-input"
//          />
//         </div>
//     )
// }
import React from 'react';
import {
  withStyles,
} from '@material-ui/core/styles';
import CheckBox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';
import { FormControlLabel, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
import CustomSlider from './CustomSlider.js'
const theme = createMuiTheme({
  palette: {
    primary: {
      main : "#ff8080"
    }
  },
});

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ff8080 ',
    },
    
    '& label':{
      color: 'rgba(255, 128, 128, 0.5)'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 128, 128, 0.5)',
      },
      '&:hover fieldset': {
        borderColor: '#ff8080',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff8080',
      },
    },
    '& .MuiOutlinedInput-input': {
      color:'#ff8080'      
    },

  },
})(TextField);

const MyCheckbox = withStyles({
  root:{
    color:'#ff8080',
    "&$checked": {
      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4,
        top: 4,
        height: 15,
        width: 15,
        position: "absolute",
        backgroundColor: "lightgreen",
        zIndex: -1
      }
    }
  },
  
})(CheckBox);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

export default function CustomizedInputs() {
  // const classes = useStyles();

  return (
    <>
    <form   noValidate>
      <CssTextField
        variant="outlined"
        style={{color: "#ff8080 !important", marginTop:"10px",width:"500px"}}
        // className={classes.margin}
        label="Battery capacity in mAh"
        id="custom-css-outlined-input"
      /> <br/>
      <CssTextField
        style={{marginTop:"10px",width:"500px"}}
        // className={classes.margin}
        label="Processor Clock speed"
        variant="outlined"
        id="custom-css-outlined-input"
      /><br/>
      <CssTextField
        style={{marginTop:"10px",width:"500px"}}
        // className={classes.margin}
        label="Internal Memory in GB"
        variant="outlined"
        id="custom-css-outlined-input"
      /><br/>
      <CustomSlider/>
      <FormControlLabel
    style={{marginLeft:"20px"}}
    value='blue'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#ff8080"}}>Bluetooth</span>}
    />
    </form>
    </>
  );
}
