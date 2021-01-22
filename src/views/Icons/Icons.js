import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <div>

      <h1>this is Icons screen</h1>

      <h1>TODO</h1>

      <h1>set you code here.....</h1>
    </div>
  );
}
