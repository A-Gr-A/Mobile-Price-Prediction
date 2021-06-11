import React from 'react';
import {useState} from 'react'
import {
  withStyles,
} from '@material-ui/core/styles';
import CheckBox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';
import { FormControlLabel, ThemeProvider, InputAdornment,Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
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
export default function CustomizedInputs() {

const [batCap,setBatCap] = useState(0)
const [clkSpeed,setClkspeed] = useState(0)
const [intMem,setIntMem] = useState(0)
const [pc,setPc] = useState(0)
const [fc,setFc] = useState(0)
const [mobDepth,setMobDepth] = useState(0)
const [mobWeight,setMobWeight] = useState(0)
const [pxh,setPxh] = useState(0)
const [pxw,setPxw] = useState(0)
const [sh,setSh] = useState(0)
const [sw,setSw] = useState(0)
const [tt,setTt] = useState(0)
const [cpuCores,setCpuCores] = useState(1)
const [blu,setBlu]=useState(false)
const [dsim,setDsim]=useState(false)
const [fourg,setFourg]=useState(false)
const [threeg,setThreeg]=useState(false)
const [wif,setWif]=useState(false)
const [tou,setTou]=useState(false) 
let myObj ={
  batCap,
  clkSpeed,
  intMem,
  pc,
  fc,
  mobDepth,
  mobWeight,
  pxh,
  pxw,
  sh,
  sw,
  tt,
  cpuCores,
  blu,
  dsim,
  fourg,
  threeg,
  wif,
  tou
}

  return (
    <>
    <Button onClick={()=>{console.log(myObj)}} variant="contained" style={{backgroundColor:'#f9cec3'}}>Click to Predict
      </Button>
    <form   noValidate>
      <CssTextField
        onChange={event => setBatCap(event.target.value)}
        onChange={event => setBatCap(event.target.value)}
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
        onChange={event => setBatCap(event.target.value)}
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
        onChange={event => setIntMem(event.target.value)}
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
        onChange={event => setPc(event.target.value)}
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
        onChange={event => setFc(event.target.value)}
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
        onChange={event => setMobWeight(event.target.value)}
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
        onChange={event => setMobWeight(event.target.value)}
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
        onChange={event => setPxh(event.target.value)}
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
        onChange={event => setPxw(event.target.value)}
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
        onChange={event => setSh(event.target.value)}
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
        onChange={event => setSw(event.target.value)}
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
        onChange={event => setTt(event.target.value)}
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
    onChange={event=> setBlu(event.target.value)}
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='blue'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Bluetooth</span>}
    />
    <FormControlLabel
    onChange={event=> setDsim(event.target.value)}
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='dual_sim'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Dual Sim Support</span>}
    />
    <FormControlLabel
    onChange={event=> setFourg(event.target.value)}
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='four_g'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>4G</span>}
    />
    <FormControlLabel
    onChange={event=> setThreeg(event.target.value)}
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='three_g'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>3G</span>}
    />
    <FormControlLabel
    onChange={event=> setWif(event.target.value)}
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='touch_screen'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>WiFi</span>}
    />
    <FormControlLabel
    onChange={event=> setTou(event.target.value)}
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='four_g'
    control={<ThemeProvider theme={theme}><MyCheckbox color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Touch</span>}
    />
    </form>
    </>
  );
}
