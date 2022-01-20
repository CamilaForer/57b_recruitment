import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import CustomButton from "../CustomButtons.js";
import { Box, TextField } from "@material-ui/core";



const validateForm = Yup.object().shape({
  yourName: Yup.string()
    .required("Name is required")
    .min(7, "Name is required")
    .max(20, "Name is required"),
  yourEmail: Yup.string()
    .required("Email is required")
    .email("Invalid email"),
  candidateName: Yup.string()
    .required("Name is required")
    .min(7, "Name is required")
    .max(20, "Name is required"),
  candidateEmail: Yup.string()
    .required("Email is required")
    .email("Invalid email")
});
const ReferFormValidation = () => {
  const formik = useFormik({
    initialValues: {
      yourName: "",
      yourEmail: "",
      candidateName: "",
      candidateEmail: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validateForm,
  });
  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: "9.5rem",
        flexDirection: "column",
        width: "50%",
        m: "2",
        p: "2",
        paddingLeft: "5%",

      }}
    >
      <form style={{ marginTop: "5rem" }} onSubmit={formik.handleSubmit}>
        <TextField
          style={{ width: "70%", fontSize: 24 }}
          id="yourName"
          type="text"
          name="yourName"
          label="Your Name"
          color="dark"
          value={formik.values.yourName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.yourName && Boolean(formik.errors.yourName)}
          helperText={formik.touched.yourName && formik.errors.yourName}
        />
        <TextField
          style={{ width: "70%" }}
          id="yourEmail"
          type="text"
          name="yourEmail"
          label="Your Email"
          color="dark"
          value={formik.values.yourEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.yourEmail && Boolean(formik.errors.yourEmail)}
          helperText={formik.touched.yourEmail && formik.errors.yourEmail}
        />
        <TextField
          style={{ width: "70%" }}
          id="candidateName"
          type="text"
          name="candidateName"
          label="Candidate's Name"
          color="dark"
          value={formik.values.candidateName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.candidateName && Boolean(formik.errors.candidateName)}
          helperText={formik.touched.candidateName && formik.errors.candidateName}
        />

        <TextField
          style={{ width: "70%" }}
          id="candidateEmail"
          type="email"
          name="candidateEmail"
          label="Candidate's Email"
          margin="normal"
          color="dark"
          value={formik.values.candidateEmail}
          onChange={formik.handleChange}
          error={formik.touched.candidateEmail && Boolean(formik.errors.candidateEmail)}
          helperText={formik.touched.candidateEmail && formik.errors.candidateEmail}
        />
        <div style={{ width: "70%" }}>
          {"If the candidate you referred ends successfully in the application process, you will have a bonus of $100.000 COP"}
          </div>
        <CustomButton type="submit" text="Submit Referral" />
      </form>
    </Box>
  )
};
export default ReferFormValidation
