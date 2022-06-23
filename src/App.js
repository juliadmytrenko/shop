import { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Product from "./components/Product";
import Button from "@mui/material/Button";

const Wrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Window = styled(Box)(({ theme }) => ({
  width: "50vw",
  padding: theme.spacing(5),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  backgroundColor: "ghostwhite",
}));

const Filtering = styled(Paper)(({ theme }) => ({
  minHeight: "10rem",
}));

function App() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Fetch Data
  const fetchAllProducts = () => {
    // Call the API
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((err) => console.log(err));
  };

  const handleShowMoreImages = () => {
    setLimit(limit + 5);
  };

  return (
    <Wrapper className="App">
      <Window>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12}>
            <Filtering elevation={0} variant="outlined"></Filtering>
          </Grid>
          {products.slice(0, limit).map((product) => (
            <Grid item xs={12}>
              <Product product={product}></Product>
            </Grid>
          ))}
          <Grid item xs={12}>
            {limit < products.length && (
              <Button onClick={handleShowMoreImages} variant="contained">
                Load more
              </Button>
            )}
          </Grid>
        </Grid>
      </Window>
    </Wrapper>
  );
}

export default App;