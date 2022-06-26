import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Product from "./components/Product";
import Button from "@mui/material/Button";
import Filtering from "./components/Filtering.js";

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

function App() {
  const defaultLimit = 5;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [limit, setLimit] = useState(defaultLimit);

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchProducts = (URL) => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLimit(defaultLimit);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (brand && category) {
      fetchProducts(
        `http://localhost:3000/products?brand=${brand}&category=${category}`
      );
    } else if (brand) {
      fetchProducts(`http://localhost:3000/products?brand=${brand}`);
    } else if (category) {
      fetchProducts(`http://localhost:3000/products?category=${category}`);
    } else {
      fetchAllProducts();
    }
  }, [brand, category]);

  const fetchAllProducts = () => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLimit(defaultLimit);
        const categories = [
          ...new Set([...json].map((product) => product.category)),
        ];
        setCategories(categories);
        const brands = [...new Set([...json].map((product) => product.brand))];
        setBrands(brands);
      })
      .catch((err) => console.log(err));
  };

  const handleShowMoreImages = () => {
    setLimit(limit + defaultLimit);
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
            <Filtering
              categories={categories}
              category={category}
              handleCategoryChange={handleCategoryChange}
              brands={brands}
              brand={brand}
              handleBrandChange={handleBrandChange}
            ></Filtering>
          </Grid>
          {products.length > 0 &&
            products.slice(0, limit).map((product, index) => (
              <Grid item xs={12} key={index}>
                <Product product={product}></Product>
              </Grid>
            ))}
          <Grid item xs={12} sx={{ textAlign: "center" }}>
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
