import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveOrder } from "../redux/actions/ProductActions";
import RenderIf from "./RenderIf";
const OrderDisplay = () => {
  const orders = useSelector((state) => state.ordersItems.map((e) => e.item));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  function showHandle(e) {
    setShow(!show);
    e.preventDefault();
  }

  return (
    <aside className="col-md-12">
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={showHandle}
      >
        {orders.length} {show ? "Show Order List" : "Hide Order List"}
      </button>
      <ul className="Orders" >
        <RenderIf condition={show}>
          {orders.map(({ name, id }) => (
            <li key={id}>
              <div>
                <div className="alert alert-success" role="alert">
                  {name}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(RemoveOrder(name))}
                >
                  delete order
                </button>
              </div>
            </li>
          ))}
        </RenderIf>
      </ul>
    </aside>
  );
};

export default OrderDisplay;
