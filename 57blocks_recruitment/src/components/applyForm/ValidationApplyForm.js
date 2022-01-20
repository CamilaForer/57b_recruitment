import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import level from "./englishLevel.js";
import CustomButton from "../CustomButtons.js";
import { Box, TextField } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

const validateForm = Yup.object().shape({
  candidateName: Yup.string()
    .required("Name is required")
    .min(7, "Name is required")
    .max(20, "Name is required"),
  candidateEmail: Yup.string()
    .required("Email is required")
    .email("Invalid email"),
  candidatePhone: Yup.string().required("Phone number is not valid"),
  candidateLinkedIn: Yup.string().required("Enter a valid url"),
  englishLevel: Yup.string().required("Select an option"),
});
const ValidationApplyForm = () => {
  const formik = useFormik({
    initialValues: {
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      candidateLinkedIn: "",
      englishLevel: "",
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
          style={{ width: "80%",fontSize:24}}
          id="candidateName"
          type="text"
          name="candidateName"
          label="Name"
          value={formik.values.candidateName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.candidateName && Boolean(formik.errors.candidateName)
          }
          helperText={
            formik.touched.candidateName && formik.errors.candidateName
          }
        />

        <TextField
          style={{ width: "80%" }}
          id="candidateEmail"
          type="email"
          name="candidateEmail"
          label="Email"
          margin="normal"
          color="dark"
          value={formik.values.candidateEmail}
          onChange={formik.handleChange}
          error={
            formik.touched.candidateEmail &&
            Boolean(formik.errors.candidateEmail)
          }
          helperText={
            formik.touched.candidateEmail && formik.errors.candidateEmail
          }
        />
        <TextField
          style={{ width: "80%" }}
          id="candidatePhone"
          type="tel"
          name="candidatePhone"
          label="Phone"
          margin="normal"
          color="dark"
          value={formik.values.candidatePhone}
          onChange={formik.handleChange}
          error={
            formik.touched.candidatePhone &&
            Boolean(formik.errors.candidatePhone)
          }
          helperText={
            formik.touched.candidatePhone && formik.errors.candidatePhone
          }
        />
        <TextField
          style={{ width: "80%" }}
          id="candidateLinkedIn"
          type="url"
          name="candidateLinkedIn"
          label="LinkedIn"
          margin="normal"
          color="dark"
          value={formik.values.candidateLinkedIn}
          onChange={formik.handleChange}
          error={
            formik.touched.candidateLinkedIn &&
            Boolean(formik.errors.candidateLinkedIn)
          }
          helperText={
            formik.touched.candidateLinkedIn && formik.errors.candidateLinkedIn
          }
        />
        <TextField
          style={{ marginTop: "7%", width: "80%" }}
          id="englishLevel"
          select
          type="text"
          name="englishLevel"
          label="English Level"
          onChange={formik.handleChange}
          error={
            formik.touched.englishLevel && Boolean(formik.errors.englishLevel)
          }
          helperText={formik.touched.englishLevel && formik.errors.englishLevel}
        >
          {level.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <CustomButton type="submit" text="Submit Application" />
      </form>
    </Box>
  );
};
export default ValidationApplyForm;
