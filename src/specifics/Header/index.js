import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Component from "../../components";

const useStyles = makeStyles(theme => ({
 menuBtn: {
  marginRight: theme.spacing(2)
 }
}));

const Header = () => {
 const styles = useStyles();
 return (
  <Component.Appbar position="fixed">
   <Component.Toolbar>
    <IconButton edge="start" color="inherit" className={styles.menuBtn}>
     <Menu />
    </IconButton>
   </Component.Toolbar>
  </Component.Appbar>
 );
};

export default Header;
