import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Bank from "../icons/bank";

export default function BankDetails() {
  return (
    <div>
      <Grid padding={"15px"}  >
        <Box
          sx={{
           
            minHeight: "25vh",
            width: "100%",
          }}
          className="cardBG"
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "25vh",
              padding: "10%",
            }}
          >
            <Grid item>
              <div className="bankNumber">*** *** ** 721</div>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Grid>
                <h4 className="headerMain"> Satyam Khandekar</h4>
              </Grid>
              <Grid
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Bank />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
