// Material UI component for a Product component
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export const Wrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  minHeight: "10rem",
  height: "100%",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    height: 250,
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  height: 250,
  minWidth: 250,
  [theme.breakpoints.up("sm")]: {
    minWidth: 200,
  },
}));
export const Image = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

export const Text = styled(Box)(({ theme }) => ({
  minWidth: 250,
  textAlign: "center",
  flex: 1,
  marginLeft: theme.spacing(1),
}));

export const LineThrough = styled(Typography)(({ theme }) => ({
  textDecoration: "line-through",
}));

export const LeftInStock = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  position: "absolute",
  bottom: theme.spacing(1),
  color: theme.palette.primary.light,
}));
