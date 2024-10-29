import React from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <div id="contact" className="box1">
      <h1>Contact Me</h1>
      <Box
        component="form"
        sx={{
          width:"50%",
          display: "flex",
          flexDirection: "column",
          
          marginTop:"10px",
          "& > :not(style)": { margin: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          fullWidth
          required
          multiline
          id="outlined-basic"
          label="Message"
          rows={4}
          variant="outlined"
        />

        <Button size="medium" variant="contained">Submit</Button>
      </Box>
    </div>
  );
};

export default Contact;
