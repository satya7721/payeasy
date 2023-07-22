import { Button, Grid, Box } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import Qr from "../icons/qr"
import Rupee from "../icons/rupee"

const CustButton = styled(Button)({
    border : "1px black solid",
    bgcolor : "#0241E2 ",
    borderRadius : "0px",
    color: "black"
})
export default function PaymentBoard() {
  return (
    <Box
    padding={"15px"}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          bgcolor: "#FFFF",
          justifyContent: "space-between",
        paddingRight : "10px"
        }}
      >
        <Grid
            paddingLeft={"10px"}
            sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center !important"
            }}
        >
          <Grid >
            <p className="headerMain" >current Balance</p>
          <h3 className="amount">$24451</h3>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
            gap:"10px"
          }}
        >
          <CustButton><Rupee/>Blanace</CustButton>
          <CustButton className="headerMain"  sx={{
            backgroundColor:"#0241E2",
            color:"#FFFF",
            border:"none"
          }}><Qr/>Pay</CustButton>
        </Grid>
      </Grid>
    </Box>
  );
}
