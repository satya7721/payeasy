import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Box from "@mui/material/Box";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Avatar, Grid } from "@mui/material";

export default function RecentTrans() {
  return (
    <Box padding={"15px"}>
      <Grid>
        <h3 className="headerMain">Transactions </h3>
      </Grid>
      <Grid>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            paddingLeft: "5px",
          }}
        >
          {[1, 2, 3, 4].map((value) => (
            <ListItem key={value} disableGutters sx={{
                marginBottom:"6px",
    
            }}>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  padding: "9px",
                  alignItems: "center",
                  bgcolor : "#FFFF",
                }}
              >
                {value % 2 == 1 ? (
                  <>
                    <Grid>
                      <ListItemAvatar>
                        <Avatar>
                          <ArrowDownwardIcon
                            sx={{ color: "green"}}
                          />
                        </Avatar>
                      </ListItemAvatar>
                    </Grid>
                    <Grid>
                      <h3 className="headerMain">Recived ₹349 from Arbaj</h3>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid>
                      <ListItemAvatar>
                        <Avatar>
                          <ArrowUpwardIcon
                            sx={{ color: "red" }}
                          />
                        </Avatar>
                      </ListItemAvatar>
                    </Grid>
                    <Grid>
                      <h3 className="headerMain">sent ₹32 from Reshma</h3>
                    </Grid>
                  </>
                )}
              </Grid>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );
}
