import React, { useState, useRef } from "react";
import upload from "../../images/upload.svg";

const DragAndDrop = ({ pdfFile }) => {
  const [file, setfile] = useState("");
  const [errors, setErrors] = useState({
    thisFile: "",
    title: "",
    selectCatg: "",
  });
  const [btnDisable, setBtnDisable] = useState(true);
  const [classDrag, setClassDrag] = useState("drag_file");
  const refInputFile = useRef(null);
  const selectfile = () => {
    refInputFile.current.click();
  };
  const addfile = (e) => {
    e.preventDefault();

    refInputFile.current.files = e.dataTransfer.files;
    const file = refInputFile.current.files[0];
    showfile(file);
  };

  const expresiones = {
    link: /^(ftp|http|https):\/\/[^ "]+$/,
    typeFile: /(.pdf)$/i,
  };
  const showfile = (file) => {
    pdfFile = file;
    const fileReader = new FileReader();
    console.log(file);
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
      setfile(e.target.result);
    });
  };
  const onChangeFile = (e) => {
    setfile(e.target.value);
    let validar = expresiones.fileFile.test(e.target.value);
    if (validar) {
      setErrors({ ...errors, fileFile: "", fileFileClass: "valid_form" });
    } else {
      setErrors({
        ...errors,
        fileFile: "Invalid extension, upload a pdf format",
        fileFileClass: "error_form",
      });
      setBtnDisable(true);
    }
    const file = e.target.files[0];
    showfile(file);
  };
  return (
    
      <div
        style={{
          height: "50vh",
          width: "37vw",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          border: "2px dashed #000000",
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          alignItems: "flex-start",
        }}
      >
        <input
          className={`int_form ${errors.fileClass}`}
          ref={refInputFile}
          type="file"
          name="file"
          accept=".pdf"
          // value={file}
          onChange={onChangeFile}
          onDrop={addfile}
          required
          style={{
            zIndex: "20",
            position: "absolute",
            top: "59vh",
            right: "22vw",
          }}
        />
        <img
          src={upload}
          style={{
            position: "absolute",
            top: "35vh",
            right: "30vw",
            fontWeight: "500",
          }}
          alt=""
        />
        <h3
          style={{
            position: "absolute",
            top: "40vh",
            right: "25vw",
            fontWeight: "500",
          }}
        >
          Drag & Drop files here
        </h3>
        <br />
        <br />
        <h5
          style={{
            position: "absolute",
            top: "48vh",
            right: "31vw",
            fontWeight: "500",
            color: "rgba(0, 0, 0, 0.3)",
          }}
        >
          or
        </h5>
        <button
          type="submit"
          className="btn2"
          disabled={btnDisable}
          style={{ display: "none" }}
        ></button>
        <div
          className={classDrag}
          id="divfile"
          onDragOver={(e) => {
            e.preventDefault();
            setClassDrag("drag__file active");
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setClassDrag("drag__file");
          }}
          onDrop={addfile}
          onClick={selectfile}
        >
          <img
            width="500px"
            height="311px"
            style={{
              zIndex: "10",
              border: "none",
              borderRadius: "24px",
              backgroundColor: "#FFFFFF",
              opacity: "0",
            }}
            src={upload}
            alt=""
          />
        </div>
      </div>
  );
};
export default DragAndDrop;
