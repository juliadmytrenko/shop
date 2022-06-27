import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Avatar from "@mui/material/Avatar";

const Wrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  minHeight: "10rem",
  height: "100%",
  position: "relative",
  height: 250,
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  height: 250,
  minWidth: 200,
  [theme.breakpoints.up("sm")]: {
    minWidth: 200,
  },
}));
const Image = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const Text = styled(Box)(({ theme }) => ({
  textAlign: "center",
  flex: 1,
  marginLeft: theme.spacing(1)
}));

const LineThrough = styled(Typography)(({ theme }) => ({
  textDecoration: "line-through",
}));

const LeftInStock = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  position: "absolute",
  bottom: theme.spacing(1),
  color: theme.palette.primary.light,
}));

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
          {product.description}
        </Typography>

        <LeftInStock mt={1} sx={{ fontSize: 14 }}>
          Left in stock: {product.stock}
        </LeftInStock>
      </Text>
    </Wrapper>
  );
}

export default Product;
