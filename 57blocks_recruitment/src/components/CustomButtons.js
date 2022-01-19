import { Button } from "@material-ui/core"
import React from "react"


const CustomButton = ({type,text}) => {
  return (
    <Button style={{borderRadius:"90px"}} type={type} variant="outlined" color="palette.primary.dark" size="large" >
     {text}
    </Button>
  )
}

export default CustomButton;

