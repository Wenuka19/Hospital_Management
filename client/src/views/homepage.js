import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import background from "../photos/Hospital_BG.jpg";
import logo from "../photos/Logo.svg";
import LoginForm from "../components/Login Form";
import { PropTypes } from "prop-types";
import { useState } from "react";

export default function HomePage({ setToken }) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          height: "100vh",
          backgroundColor: "rgba(255,255,255,0.5",
          backgroundSize: "100% 100%",
        }}
      >
        <Grid xs={12}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={2}>
              <Button>
                {" "}
                <img
                  style={{
                    marginInlineStart: "10px",
                    marginTop: "0px",
                    width: "300px",
                    height: "200px",
                  }}
                  src={logo}
                  alt=""
                />{" "}
              </Button>
            </Grid>
            <Grid container xs={2} align="center" alignContent="center">
              <Button
                variant="contained"
                style={{ bottom: "30px", marginInlineEnd: "10px" }}
              >
                {" "}
                <Typography fontFamily={"Poppins"}>
                  {" "}
                  Create Account
                </Typography>{" "}
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            xs={12}
            justifyContent="space-between"
            rowSpacing={{ xs: 10, lg: 5 }}
          >
            <Grid container item xs={12} lg={6} paddingLeft={7}>
              <Grid item xs={12}>
                <Typography
                  fontFamily={"Poppins"}
                  fontSize={60}
                  fontWeight="Bold"
                  color={"#283856"}
                >
                  Serving Your Health <br /> Needs Is Our <br /> Priority
                </Typography>
              </Grid>
              <Grid item xs={12} paddingTop={3}>
                <Typography
                  fontFamily={"Poppins"}
                  fontSize={24}
                  fontWeight="Regular"
                  color={"#283856"}
                >
                  ipsum as it is sometimes known, is dummy text used in laying
                  out print, graphic or web designs. The passage is attributed
                  to an unknown typesetter in the 15th century who is thought to
                  have
                </Typography>
              </Grid>
            </Grid>

            <Grid container item xs={12} lg={6}>
              <Grid container xs={3} lg={4}></Grid>
              <LoginForm setToken={setToken} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
