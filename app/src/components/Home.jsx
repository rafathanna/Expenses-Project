import { Close } from "@mui/icons-material";
import { Paper, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setmydata(data);
      })
      .catch((error) => console.log(error));
  },); // empty dependency array to ensure useEffect runs only once
  
  let totalPrice = 0;
  
  // Use MUI's useMediaQuery hook to detect screen size
  // @ts-ignore
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      {mydata.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ml: isSmallScreen ? "0" : "240px", // Adjust margin for small screens
              mt: "5px",
              width: isSmallScreen ? "100%" : "30%", // Adjust width for small screens
              position: "relative",
              padding: "7px",
            }}
            className="paper"
          >
            <Typography variant="h6" color="secondary" sx={{ mt: "13px" }}>
              {item.title}
            </Typography>
            <Typography variant="h6" color="secondary" sx={{ mt: "13px" }}>
              {item.price} $
            </Typography>
            <IconButton
              size="small"
              sx={{ position: "absolute", top: "0px", right: "5px" }}
              onClick={() => {
                fetch(`http://localhost:3100/posts/${item.id}`, {
                  method: "DELETE",
                });
              }}
            >
              <Close sx={{ fontSize: "18px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography variant="h6" color="secondary" sx={{ mt: "13px" }}>
        &#128073; you spend {totalPrice} 💲
      </Typography>
    </>
  );
};

export default Home;
