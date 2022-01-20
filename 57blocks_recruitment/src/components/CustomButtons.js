import React from "react";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";



const CustomButton = ({ type, text, func }) => {
  return (
    <Button
      style={{
        borderRadius: "90px",
        marginTop: "5rem",
        width: "100%",
        marginLeft: "50%",
        borderColor:"black",
        border: "2px solid #000000",
        backgroundColor:"#FFFFFF",
        marginBottom:"3rem",
        fontWeight: '600',
        textTransform: 'capitalize',
        fontSize: 24
      }}
      type={type}
      onClick={func}
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      size="large"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
