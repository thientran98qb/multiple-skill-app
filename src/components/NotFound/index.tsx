import { Box, Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  errorContainer: {
    textAlign: "center",
    color: "black",
  },
  errorText: {
    color: theme.palette.primary.main,
  },
}));
const NotFound = () => {
  const classess = useStyles();
  return (
    <Box className={classess.root}>
      <Box className={classess.errorContainer}>
        <Typography
          className={classess.errorText}
          style={{ fontSize: "100px", fontWeight: "bold" }}
        >
          404
        </Typography>
        <Typography pb={2}>Not found this page</Typography>
        <Button variant="contained" color="primary">
          <Link to="/">Back to home</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
