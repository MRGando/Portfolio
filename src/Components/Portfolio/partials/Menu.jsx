import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/Utils/MaterialUITheme";

export default function IconMenu() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        sx={{
          width: 320,
          maxWidth: "100%",
          position: "absolute",
          top: "6em",
        }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <FormatQuoteOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>رزومه</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LayersOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>نمونه کار</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ViewQuiltOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>وبلاگ</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <ArrowOutwardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>صحبت کنیم</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </ThemeProvider>
  );
}
