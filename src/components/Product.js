import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import {
  Wrapper,
  ImageWrapper,
  Image,
  Text,
  LineThrough,
  LeftInStock,
} from "./Product_mui";
import { truncateText } from "./../utils";

function Product({ product }) {
  const priceAfterDiscound = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <Wrapper elevation={0} variant="outlined">
      <ImageWrapper>
        <Image src={product.thumbnail} alt={product.title} variant="rounded" />
      </ImageWrapper>
      <Text p={1}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}></Box>
          {product.discountPercentage && product.discountPercentage > 0 && (
            <Chip
              icon={<LoyaltyIcon />}
              label={`-${product.discountPercentage}%`}
              color="success"
            />
          )}
        </Box>
        <Typography variant="h6">{product.title}</Typography>

        <Box mr={1} component="span">
          <Chip
            variant="outlined"
            icon={<AttachMoneyIcon />}
            label={<LineThrough>{product.price}</LineThrough>}
            color="error"
          />
        </Box>
        <Chip
          variant="outlined"
          icon={<AttachMoneyIcon />}
          label={<Typography>{priceAfterDiscound}</Typography>}
        />

        <Box sx={{ textAlign: "left" }}>
          <Box sx={{ fontSize: 13 }}>
            <Typography
              sx={{ fontSize: 13, fontWeight: 700, display: "inline" }}
            >
              brand:
            </Typography>{" "}
            {product.brand}
          </Box>
          <Box sx={{ fontSize: 13 }}>
            <Typography
              sx={{ fontSize: 13, fontWeight: 700, display: "inline" }}
            >
              category:
            </Typography>{" "}
            {product.category}
          </Box>
        </Box>

        <Typography mt={1} mb={5} sx={{ textAlign: "left" }}>
          {truncateText(product.description)}
        </Typography>

        <LeftInStock mt={1} sx={{ fontSize: 14 }}>
          Left in stock: {product.stock}
        </LeftInStock>
      </Text>
    </Wrapper>
  );
}

export default Product;
