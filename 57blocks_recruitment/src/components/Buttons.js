import { Button } from "@material-ui/core"
import React from "react"


const SubmitButton = () => {
  return (
    <Button style={{borderRadius=10}} type="submit" variant="outlined" color="palette.primary.dark" size="large" >
      Submit
    </Button>
  )
}

export default SubmitButton;

