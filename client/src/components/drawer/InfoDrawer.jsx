import React, { useState } from "react";
import { Drawer, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowBack } from "@mui/icons-material";

//components
import Profile from "./Profile";

const useStyles = makeStyles({
  drawer: {
    minWidth: "21rem",
  },
  header: {
    background: "#00bfa5",
    height: 98,
    color: "#FFFFFF",
    display: "flex",
    "& > *": {
      marginTop: "auto",
      padding: 15,
      fontWeight: 600,
    },
  },
  component: {
    background: "#ededed",
    height: "85%",
  },
});

const InfoDrawer = ({ open, setOpen, profile }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onClose={handleClose} className={classes.drawer}>
      <Box className={classes.header}>
        <ArrowBack onClick={handleClose} />
        <Typography>Profile</Typography>
      </Box>
      <Box className={classes.component}>{profile && <Profile />}</Box>
    </Drawer>
  );
};

export default InfoDrawer;
