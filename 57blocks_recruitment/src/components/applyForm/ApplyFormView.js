import React from "react";
import { Link } from 'react-router-dom';
import ValidationApplyForm from "./ValidationApplyForm.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container, IconButton } from "@material-ui/core";
import { AppBar, Toolbar } from "@mui/material";





const ApplyForm = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            minHeight: "5rem",
            bgcolor: "#FAFAFA",
            paddingRight: "0",
            paddingLeft: "0",
          }}
        >
          <IconButton size="medium" edge="start" aria-label="apply"></IconButton>
          <Button style={{
            fontSize: 24,
            textTransform: 'capitalize',
          }}
            startIcon={<ArrowBackIcon fontSize="24px" />}>
            
              Apply
          </Button>
        </Toolbar>
      </AppBar>
      <Container
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "columns",
          alignItems:'center'
        }}
      >
        <Box sx={{ display: "flex",flexDirection: "columns", bgcolor: "#3CDFF5" }}>
          <ValidationApplyForm />
         
        </Box>
      </Container>
    </>
  );
};
export default ApplyForm;
