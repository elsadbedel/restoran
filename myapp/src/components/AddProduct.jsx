import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { AddProductAction } from "../redux/actions/ProductActions";
import RenderIf from "./RenderIf";
import { v4 } from "uuid";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [photo, setPhoto] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  function SendProduct(e) {
    // Submit Add Form
    const newProduct = {
      id: v4(),
      name: name,
      type: type,
      price: price,
      info: info,
      image: preview,
    };
    dispatch(AddProductAction(newProduct));
    e.preventDefault();
  }

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    }
  }, [photo]);

  return (
    <aside>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="btn btn-outline-warning"
      >
        Add Product
      </button>
      <RenderIf condition={show}>
        <form className="form-group mt-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="productType"
              placeholder="Product Type"
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-dark"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Add photo
            </button>

            <input
              className="form-control"
              id="formFileSm"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              id="productInfo"
              placeholder="Product Info"
              rows="2"
              onChange={(e) => setInfo(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-block btn-outline-success"
            onClick={SendProduct}
          >
            Add Product
          </button>
        </form>
      </RenderIf>
    </aside>
  );
};

export default AddProduct;
