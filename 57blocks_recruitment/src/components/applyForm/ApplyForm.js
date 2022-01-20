import React from "react";
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
          <IconButton size="large" edge="start" aria-label="apply"></IconButton>
          <Button style={{
            fontSize: 24,
            textTransform: 'capitalize',
          }}
            startIcon={<ArrowBackIcon fontSize="24px"  />}>
            Apply
          </Button>
        </Toolbar>
      </AppBar>
      <Container
        style={{
          width: "100vw",
          display: "flex",
          height: "100vh",
          paddingLeft: "0",
          paddingRight: "0",
          marginLeft: "0",
          marginRight: "0",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", bgcolor: "#3CDFF5" }}>
          <ValidationApplyForm />
        </Box>
      </Container>
    </>
  );
};
export default ApplyForm;
