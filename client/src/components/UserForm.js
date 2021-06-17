import React from 'react';
import {useState} from 'react'
import {
  withStyles,
} from '@material-ui/core/styles';
import CheckBox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';
import { FormControlLabel,ThemeProvider,Button,InputAdornment, Typography,CircularProgress} from  '@material-ui/core';
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

const [battery_power,setBatCap] = useState(0)
const [blue,setBlu]=useState(false)
const [clock_speed,setClkspeed] = useState(0)
const [dual_sim,setDsim]=useState(false)
const [fc,setFc] = useState(0)
const [four_g,setFourg]=useState(false)
const [int_memory,setIntMem] = useState(0)
const [m_dep,setMobDepth] = useState(0)
const [mobile_wt,setMobWeight] = useState(0)
const [n_cores,setCpuCores] = useState(1)
const [pc,setPc] = useState(0)
const [px_height,setPxh] = useState(0)
const [px_width,setPxw] = useState(0)
const [ram,setRam] = useState(0)
const [sc_h,setSh] = useState(0)
const [sc_w,setSw] = useState(0)
const [talk_time,setTt] = useState(0)
const [three_g,setThreeg]=useState(false)
const [touch_screen,setTou]=useState(false)
const [wifi,setWif]=useState(false) 
const [display,setDisplay]=useState(0);
const [result,setResult]=useState();

let myObj ={
battery_power,
blue,
clock_speed,
dual_sim,
fc,
four_g,
int_memory,
m_dep,
mobile_wt,
n_cores,
pc,
px_height,
px_width,
ram,
sc_h,
sc_w,
talk_time,
three_g,
touch_screen,
wifi
}
async function btnhandler(){
  console.log(myObj);
  setDisplay(1);
  try{
     await fetch('/api',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
      },
      body: JSON.stringify(myObj)
    }).then(
      (response)=>response.json()
    ).then(
      (responseJson)=>{
        setResult(responseJson.result);
        setDisplay(2);
        console.log(result)}
    );
  }catch(e){
    setDisplay(3)
    console.log(e)
  }
}

  return (
    <>
    <Button onClick={()=>btnhandler()} variant="contained" type="submit" style={{backgroundColor:'#f9cec3'}}>Click to Predict
      </Button>
      <Typography style={{color:'#f9cec3',display:'inline-block',marginLeft:'20px'}}> {display===0?"":display===1? <CircularProgress style={{'color': '#f9cec3'}} size={20}/> :display===2?`${result}`:'SOME VALUES MISSING IN ENTRY'} </Typography>
    <form   noValidate>
      <CssTextField
        required
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
        onChange={event => setClkspeed(event.target.value)}
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
        type="number"
        autoComplete="off"
        onChange={event => setRam(event.target.value)}
        style={{marginTop:"10px",width:"300px", marginRight:"10px", marginLeft:"0px"}}
        // className={classes.margin}
        label="RAM"
        variant="outlined"
        id="custom-css-outlined-input"
        InputProps={{
          endAdornment: <InputAdornment position="end"><span style={{color:"rgba(249, 206, 195, 0.5)"}} >GB</span></InputAdornment>,
        }}
      />
      <CssTextField
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
        onChange={event => setMobDepth(event.target.value)}
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
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
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
        type="number"
        autoComplete="off"
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
      <CustomSlider updateVal={(nomb)=>{setCpuCores(nomb)}}/><br/>
    <FormControlLabel   style={{marginTop:"10px", marginLeft:"0px"}}
    value='blue'
    control={<ThemeProvider theme={theme}><MyCheckbox onChange={(event)=>{setBlu(event.target.checked)}} color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Bluetooth</span>}
    />
    <FormControlLabel   style={{marginTop:"10px", marginLeft:"0px"}}
    value=''
    control={<ThemeProvider theme={theme}><MyCheckbox onChange={(event)=>{setDsim(event.target.checked)}} color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Dual Sim support</span>}
    />
    <FormControlLabel
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='four_g'
    control={<ThemeProvider theme={theme}><MyCheckbox onChange={(event)=>{setFourg(event.target.checked)}} color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>4G</span>}
    />
    <FormControlLabel
    style={{marginTop:"10px", marginLeft:"0px"}}
    value='three_g'
    control={<ThemeProvider theme={theme}><MyCheckbox onChange={(event)=>{setThreeg(event.target.checked)}} color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>3G</span>}
    />
    <FormControlLabel   style={{marginTop:"10px", marginLeft:"0px"}}
    value='touch_screen'
    control={<ThemeProvider theme={theme}><MyCheckbox onChange={(event)=>{setWif(event.target.checked)}} color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>WiFi</span>}
    />
    <FormControlLabel   style={{marginTop:"10px", marginLeft:"0px"}}
    value='four_g'
    control={<ThemeProvider theme={theme}><MyCheckbox onChange={(event)=>{setTou(event.target.checked)}} color="primary"/></ThemeProvider>}
    label={<span style={{color:"#f9cec3"}}>Touch</span>}
    />
    </form>
    </>
  );
}
