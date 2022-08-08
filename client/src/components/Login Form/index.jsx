import React from "react";
import { Formik, Field, Form } from "formik";
import Box from "@mui/material/Box";

const Basic = () => (
  <Box
    component="span"
    sx={{
      width: 300,
      height: 300,
      backgroundColor: "primary",
    }}
  >
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field id="userName" name="userName" placeholder="USERNAME" />
          <Field id="password" name="password" placeholder="PASSWORD" />

          <button type="submit">LOGIN</button>
        </Form>
      </Formik>
    </div>
  </Box>
);

export default Basic;
