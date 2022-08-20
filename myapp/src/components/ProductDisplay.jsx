import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddOrder, SingleProduct } from "../redux/actions/ProductActions";
import NavBar from "../components/NavBar";

// --material--
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// --material--

const ProductDisplay = ({ setShow }) => {
  const [type, setType] = useState("all");
  const products = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const showHandle = () => {
    setShow((prev) => !prev);
  };

  const handleSetType = (childType) => {
    setType(childType);
  };

  return (
    <div id="Foods" className="row ">
      {/* Nav Bar */}
      <div className="pizza col-md-12">
        <NavBar setType={handleSetType} />
      </div>

      {
      products
        .filter((e) => type === "all" || e.type === type)
        .map((item, index) => (
          
          // Single Product
          <div key={index} className="col-md-3 my-2">
            <Card
              style={{ fontfamily: "Sofia" }}
              sx={{ maxWidth: 345, minHeight: 350 }}
            >
              <CardMedia
                component="img"
                height="170"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {item.info.length > 60
                    ? item.info.substring(0, 60) + "..."
                    : item.info}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  disabled
                  color="success"
                  size="small"
                >
                  {item.price} ₼
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(SingleProduct(item));
                    showHandle();
                  }}
                  size="small"
                >
                  Detail
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  onClick={() => {
                    dispatch(AddOrder(item));
                  }}
                >
                  Add
                </Button>
              </CardActions>
            </Card>
          </div>
          // single product
        ))}
    </div>
  );
};

export default ProductDisplay;
