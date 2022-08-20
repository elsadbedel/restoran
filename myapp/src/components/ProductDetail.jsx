import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
const ProductDetail = ({ setShow }) => {
  const detail = useSelector((detail) => detail.productDetail);
  function showHandle(e) {
    setShow((prevValue) => !prevValue);

    e.preventDefault();
  }
  return (
    <div className="ProductContainer">
      <div className="ProductDetail">
        {detail.map((item) => (
          <span key={item.name}>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <h5>{item.info}</h5>
          </span>
        ))}

        <Button
          variant="contained"
          color="success"
          size="small"
          className="myButton"
          onClick={showHandle}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
