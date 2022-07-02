import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const CenterContent = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const Products = ({
  products,
  limit,
  handleShowMoreImages,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <CenterContent
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <CircularProgress color="secondary" sx={{ display: "block" }} />
      </CenterContent>
    );
  }
  if (products.length <= 0) {
    return (
      <CenterContent
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Alert severity="info">No products found.</Alert>
      </CenterContent>
    );
  }

  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {products.length > 0 &&
        products.slice(0, limit).map((product, index) => (
          <Grid item xs={12} key={index}>
            <Product product={product}></Product>
          </Grid>
        ))}
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        {limit < products.length && (
          <Box marginTop={1}>
            <Button onClick={handleShowMoreImages} variant="contained">
              Load more
            </Button>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
