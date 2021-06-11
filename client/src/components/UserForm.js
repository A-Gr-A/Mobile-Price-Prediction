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
// //         main: '#f9cec3',
// //       },
// //       text:{
// //           primary: '#f9cec3',
// //           secondary: 'rgba(249, 206, 195, 0.5)'         
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
import { FormControlLabel, ThemeProvider, InputAdornment } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
import CustomSlider from './CustomSlider.js'
const theme = createMuiTheme({
  palette: {
    primary: {
      main : "#f9cec3"
    }
  },
});

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#f9cec3 ',
    },
    
    '& label':{
      color: 'rgba(249, 206, 195, 0.5)'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    "& .MuiFilledInput-root":{
      color:"#f9cec3"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(249, 206, 195, 0.5)',
      },
      '&:hover fieldset': {
        borderColor: '#f9cec3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f9cec3',
      },
  
    },
    '& .MuiOutlinedInput-input': {
      color:'#f9cec3'      
    },

  },
})(TextField);

const MyCheckbox = withStyles({
  root:{
    color:'#f9cec3',
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
//   withoutLabel: {
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     width: '25ch',
//   },
// }));
export default function CustomizedInputs() {
  // const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });

  return (
    <>
    <form   noValidate>
      <CssTextField
        variant="outlined"
        style={{color: "#f9cec3 !important", marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Battery capacity"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >mAh</span></InputAdornment>,
        }}
      /> 
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Processor Clock speed"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >GHz</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Internal Memory"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >GB</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Primary Camera"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >mp</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Front Camera"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >mp</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Mobile Depth"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >cm</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Mobile Weight"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >g</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Pixel Resolution Height"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >px</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Pixel Resolution Width"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >px</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Screen Height"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >cm</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Screen Width"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >cm</span></InputAdornment>,
        }}
      />
      <CssTextField
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="Talk Time"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >h</span></InputAdornment>,
        }}
      />
      <CustomSlider/><br/>
      <FormControlLabel
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='blue'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Bluetooth</span>}
    />
    <FormControlLabel
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='dual_sim'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Dual Sim Support</span>}
    />
    <FormControlLabel
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='four_g'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>4G</span>}
    />
    <FormControlLabel
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='three_g'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>3G</span>}
    />
    <FormControlLabel
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='touch_screen'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>WiFi</span>}
    />
    <FormControlLabel
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='four_g'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Touch</span>}
    />
    </form>
    </>
  );
}
