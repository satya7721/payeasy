import { Box, Grid, Typography, Avatar } from "@mui/material";
import React from "react";

export default function HeaderBar() {
  return (
    <Box sx={{
      padding:"15px 15px 0 15px "
    }}>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        width={"100%"}
        padding={"20px"}
        sx={{
          justifyContent:"space-between",
          bgcolor:"#e9f5f0"
        }}
      >
        <Grid item  >
          <Grid>
            <Typography variant="h4" className="headerMain">
              Hello Satyam
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="subtitle1" className="headerSub">
              Make Payment with Ease
            </Typography>
          </Grid>
        </Grid>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Avatar>
            <img width={"100%"}src={"https://media.licdn.com/dms/image/D4D03AQGwN4r1ASHhdg/profile-displayphoto-shrink_400_400/0/1677090483349?e=1695254400&v=beta&t=v9A85GmCuA4Ni3Zf84CtLt68av3gmHa74N_kPZZtkx0"}/>
          </Avatar>
        </Grid>
      </Grid>
    </Box>
  );
}
