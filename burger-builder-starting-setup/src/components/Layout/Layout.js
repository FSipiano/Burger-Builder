import React from "react";
import classes from "./Layout.css"
const layout = (props) => (
  <div>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </div>
);


export default layout;