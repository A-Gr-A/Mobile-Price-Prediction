import React from 'react'
import Slider from "@material-ui/core/Slider"
import Typography from "@material-ui/core/Typography"
import { withStyles } from '@material-ui/core'
const MySlider = withStyles({
    root:{
        color:"#ff8080",
        height: 2,
    },
    track:{
        height:2,
    },
    rail:{
        height:2,
    },
    valueLabel: {
        // left: 'calc(-50% + 12px)',
        top: 20,
        '& *': {
          background: 'transparent',
          color: '#ff8080',
        },
    },
    mark:{
        backgroundColor:"#ff8080",
        height:8,
        width:1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
})(Slider)
const marks = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
        value: 5,
    },
    {
        value: 6,
    },
    {
        value: 7,
    },
    {
        value: 8,
    },
  ];

export default function CustomSlider(){
    return(
        <>
        <Typography  style={{marginTop:"20px"}} id="discrete-slider-small-steps" gutterBottom>
           <span style={{color:"#ff8080"}}>Number of CPU cores</span> 
        </Typography>
        <MySlider marks={marks} style={{width:"200px"}} min={1} defaultValue={1} max={8} valueLabelDisplay='auto'/>
        </>
    )
}