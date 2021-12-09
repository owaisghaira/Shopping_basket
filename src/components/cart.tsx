import React from "react";
import { Divider, Button, Space, Layout } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "../types";
import { less, delet, add } from "../store";
// import { removeAllCartItems, removeItem, subtractQuantity, addToCart } from '../redux/actions/cartAction'

const Cart = () => {
  const dispatch = useDispatch();
  const basketitems = useSelector((state: any) => {
    console.log(state.basket[0].id);
    return state.basket;
  });
  const calculateTotal = (items:ProductItem[]) => {
      let total = items.map((val:ProductItem) => val.quantity * val.price).reduce((a:number, b:number) => a + b, 0)
      console.log(total)
      return total
  }

  return (
    <div>
      <h5 className="mt-3">Your Cart</h5>
      {basketitems.lenght === 0 && <p>Start adding items to your cart.</p>}
      <Divider />
      <div>
        
        {basketitems[0].id !== undefined ? null :
        basketitems?.map((val: ProductItem) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "left",
                margin: "8px",
              }}
            >
              <div>
                <h5>{val.title}</h5>
                <div>RS.{val.price}</div>
                <Space>
                  {val.quantity === 1 ? (
                    <Button onClick={() => dispatch(delet(val))}>
                      <DeleteOutlined />
                    </Button>
                  ) : (
                    <Button onClick={() => dispatch(less(val))}>-</Button>
                  )}
                  <span> {val.quantity} </span>
                  <Button onClick={() => dispatch(add(val))}>+</Button>
                </Space>
                <Divider />
              </div>
              <div>
                <img
                  width="80"
                  height="80"
                  style={{ objectFit: "cover" }}
                  src={val.imageUrl}
                  alt="pic"
                />
              </div>
            </div>
          );
        })}
      </div>
      <Divider />
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Subtotal</div>
          <div>{calculateTotal(basketitems)}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Delivery Fee</div>
          <div>50</div>
        </div>
        <Divider style={{ margin: "5px" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Total Price</div>
          <div>{calculateTotal(basketitems) + 50}</div>
        </div>

        <div>
          <Button
            style={{
              background: "#303d4e",
              color: "#fff",
              width: "90%",
              margin: "15px",
            }}
          >
            Go To CheckOut
          </Button>
          <Button
            style={{
              background: "#303d4e",
              color: "#fff",
              width: "90%",
              margin: "15px",
            }}
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
