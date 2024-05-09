// @ts-nocheck
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CottageIcon from "@mui/icons-material/Cottage";
import LogoutIcon from "@mui/icons-material/Logout";
// import SettingsIcon from "@mui/icons-material/Settings";
// import PersonIcon from "@mui/icons-material/Person";
import Create from "@mui/icons-material/Create";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
   let location = useLocation();
   console.log(location);
   
  const theme = useTheme();
  // eslint-disable-next-line react/prop-types
  const { window, setmymode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      {localStorage.setItem("currentMode", theme.palette.mode)}
      <IconButton
        sx={{ ml: 12, mt: 2, paddingBottom: 2 }}
        onClick={() => {
          setmymode(
            localStorage.getItem("currentMode") == "light" ? "dark" : "light"
          );
        }}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <Divider />

   
        <ListItemButton component="a" href="home" sx={{bgcolor:location.pathname=='/home' ? theme.secondary.main:''}}>
          <ListItemIcon>
            <CottageIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
     

      <Divider />
      <ListItemButton component="a" href="create" sx={{bgcolor:location.pathname=='/create' ? theme.secondary.main:''}}>
        <ListItemIcon>
          <Create color="primary" />
        </ListItemIcon>
        <ListItemText primary="Create" />
      </ListItemButton>

      <Divider />

      <ListItemButton component="a" href="/" sx={{bgcolor:location.pathname=='/' ? theme.secondary.main:''}}>
        <ListItemIcon>
          <LogoutIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Log-out" />
      </ListItemButton>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            My expenses 💰
          </Typography>

          <Avatar
            alt="Rafat"
            src="https://mui.com/static/images/avatar/2"
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
