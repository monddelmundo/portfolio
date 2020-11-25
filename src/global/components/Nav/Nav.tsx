import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Drawer, IconButton, MenuItem, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Routes from "../../../Routes";

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      background: "#43cea2",
      color: "white",
      width: 150,
    },
    primary: {
      color: "white",
    },
  })
);

const Nav = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useStyles();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      (event as React.KeyboardEvent).key === "Tab"
    ) {
      return;
    }

    setIsOpen(open);
  };

  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  };

  return (
    <div className="nav-container">
      <div className="left-side">
        <h3 className="text-title">Edmond Paul Del Mundo</h3>
        <h4 className="text-subtitle">Web Developer</h4>
      </div>
      <div className="right-side-mobile">
        <IconButton
          edge="start"
          className="nav-btn-icon"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          className="nav-drawer"
          classes={{ paper: styles.paper }}
          open={isOpen}
          anchor="right"
          onClose={toggleDrawer(false)}
        >
          {Routes.map((route, index) => (
            <NavLink
              onClick={toggleDrawer(false)}
              style={{ textDecoration: "none" }}
              exact={index === 0 ? true : false}
              key={index}
              to={route.path}
            >
              <MenuItem selected={activeRoute(route.path)}>
                <ListItemText
                  classes={{ primary: styles.primary }}
                  primary={route.sidebarName}
                />
              </MenuItem>
            </NavLink>
          ))}
        </Drawer>
      </div>
      <div className="right-side">
        {Routes.map((route, index) => (
          <NavLink
            activeClassName="nav-link-active"
            className="nav-link"
            key={index}
            exact={index === 0 ? true : false}
            to={route.path}
          >
            {route.sidebarName}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Nav);
