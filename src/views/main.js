import { Grid } from "@mui/material";
import React from "react";
import HeaderBar from "../components/headerBar";
import BankDetails from "../components/bankDetails";
import PaymentBoard from '../components/paymentBoard';
import RecentTrans from '../components/recentTrans';

export default function Main() {
  return (
    <div>
      <Grid>
        <Grid flexDirection={"row"}>
          <HeaderBar />
        </Grid>
        <Grid>
          <BankDetails></BankDetails>
        </Grid>
        <Grid>
          <PaymentBoard></PaymentBoard>
        </Grid>
        <Grid>
        <RecentTrans></RecentTrans>
        </Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
}
