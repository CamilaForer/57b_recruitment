import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import React from "react";
import { MenuItem } from "@material-ui/core";
import level from "./englishLevel.js";
import CustomButton from "../CustomButtons.js";
// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const urlRegExp =
//   /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
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
  englishLevel:Yup.string().required("Select an option")
});
const ValidationApplyForm = () => {
  const formik = useFormik({
    initialValues: {
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      candidateLinkedIn: "",
      englishLevel:""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validateForm,
  });

  return (
    <div className="candidateForm">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="candidateName"
          type="text"
          name="candidateName"
          label="Name"
          color="dark"
          value={formik.values.candidateName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.candidateName && Boolean(formik.errors.candidateName)}
          helperText={formik.touched.candidateName && formik.errors.candidateName}
        />

        <TextField
          id="candidateEmail"
          type="email"
          name="candidateEmail"
          label="Email"
          margin="normal"
          color="dark"
          value={formik.values.candidateEmail}
          onChange={formik.handleChange}
          error={formik.touched.candidateEmail && Boolean(formik.errors.candidateEmail)}
          helperText={formik.touched.candidateEmail && formik.errors.candidateEmail}
        />
        <TextField
          id="candidatePhone"
          type="tel"
          name="candidatePhone"
          label="Phone"
          margin="normal"
          color="dark"
          value={formik.values.candidatePhone}
          onChange={formik.handleChange}
          error={formik.touched.candidatePhone && Boolean(formik.errors.candidatePhone)}
          helperText={formik.touched.candidatePhone && formik.errors.candidatePhone}
        />
        <TextField
          id="candidateLinkedIn"
          type="url"
          name="candidateLinkedIn"
          label="LinkedIn"
          margin="normal"
          color="dark"
          value={formik.values.candidateLinkedIn}
          onChange={formik.handleChange}
          error={formik.touched.candidateLinkedIn && Boolean(formik.errors.candidateLinkedIn)}
          helperText={formik.touched.candidateLinkedIn && formik.errors.candidateLinkedIn}
        />
        <TextField
          id="englishLevel"
          select
          label="English Level"
          onChange={formik.handleChange}
          error={formik.touched.englishLevel && Boolean(formik.errors.englishLevel)}
          helperText={formik.touched.englishLevel && formik.errors.englishLevel}
        >
          {level.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <CustomButton type="submit" text="Submit"/>
      </form>
      
    </div>
  );
};
export default ValidationApplyForm;
