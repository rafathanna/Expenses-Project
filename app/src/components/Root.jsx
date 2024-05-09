import ResponsiveDrawer from "./ResponsiveDrawer";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Box } from "@mui/material";

const Root = () => {
  const [mymode, setmymode] = useState(localStorage.getItem('currentMode'));
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: mymode,
    },
    secondary: {
      main: '#0d47a1',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
         <CssBaseline />
      <div>
        <ResponsiveDrawer 
// @ts-ignore
        setmymode={setmymode}/>
       <Box sx={{display:'flex', justifyContent:'center',flexDirection:'column', alignItems:'center'}}>
         <Outlet />
       </Box >
      </div>
    </ThemeProvider>
  );
};

export default Root;
