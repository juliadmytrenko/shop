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
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  height: 230,
  minWidth: 150,
}));
const Image = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const Text = styled(Box)(({ theme }) => ({
  textAlign: "center",
  flex: 1,
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
      <ImageWrapper p={1}>
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
            size="small"
            icon={<AttachMoneyIcon />}
            label={<LineThrough>{product.price}</LineThrough>}
          />
        </Box>
        <Chip
          icon={<AttachMoneyIcon />}
          label={<Typography>{priceAfterDiscound}</Typography>}
        />

        <Typography mt={1} mb={5} sx={{height: 80, textOverflow: 'ellipsis',}}>{product.description}</Typography>

        <LeftInStock mt={1}>Left in stock: {product.stock}</LeftInStock>
      </Text>
    </Wrapper>
  );
}

export default Product;
