import React from "react";
import ReferFormValidation from "./referFormValidation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ReferForm = () => {
  return (
    <>
      <ArrowBackIcon>
        <h3>Refer</h3>
      </ArrowBackIcon>
      <ReferFormValidation />
    </>
  )
}
export default ReferForm;