import React from 'react'
import Slider from "@material-ui/core/Slider"
import Typography from "@material-ui/core/Typography"
import { withStyles } from '@material-ui/core'
const mySlider = withStyles({
    root:{
        color:"#ff8080",
        height: 2,
    },
    track:{
        height:2,
    },
    rail:{
        height:2,
    }
})(Slider)

export default function CustomSlider(){
    return(
        <>
        <Typography id="discrete-slider-small-steps" gutterBottom>
           <span style={{color:"#ff8080", marginTop:"20px"}}>Number of CPU cores</span> 
        </Typography>
        <mySlider />
        </>
    )
}