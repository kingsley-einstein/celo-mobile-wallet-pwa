import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Components from "../../components";

const useStyles = makeStyles(theme => ({
 flex: {
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2em"
 },
 typo: {
  padding: 4,
  textAlign: "center",
  margin: 4
 },
 createBtn: {
  marginTop: 3
 }
}));

const Landing = props => {
 const styles = useStyles();
 return (
  <div className={styles.flex}>
   <Typography className={styles.typo} variant="h6">
    Cross-platform mobile wallet suited for those who love both web and native
    apps. Accesses the Celo blockchain using third party libraries tailored for
    that need.
   </Typography>
   <div>
    <Components.Button
     className={styles.createBtn}
     href="/create"
     variant="contained"
     color="primary"
     size="large"
    >
     Create Wallet
    </Components.Button>
   </div>
  </div>
 );
};

export default Landing;
