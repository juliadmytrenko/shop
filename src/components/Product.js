import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Avatar from "@mui/material/Avatar";

const Wrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  width: "100%",
  minHeight: "10rem",
  height: "100%",
  position: "relative",
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
}));
const Image = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const Text = styled(Box)(({ theme }) => ({
  flex: 1,
}));

function Product({ product }) {
  return (
    <Wrapper elevation={0} variant="outlined">
      <ImageWrapper p={1}>
        <Image src={product.thumbnail} alt={product.title} variant="rounded" />
      </ImageWrapper>
      <Text p={1}>
        <Typography variant="h6">{product.title}</Typography>
        <Chip icon={<AttachMoneyIcon />} label={product.price} />
        <Typography>{product.description}</Typography>
      </Text>
    </Wrapper>
  );
}

export default Product;
