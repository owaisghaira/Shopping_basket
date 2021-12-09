import React, { useEffect, useState } from "react";
import { Card, Cart, Header } from "../components";
import { Typography } from "antd";
import { INITIAL_STATE } from "../store/state";
import { ProductItem } from "../types";
import Item from "antd/lib/list/Item";
const { Title } = Typography;

const Home = () => {
  const [items, setItems] = useState<ProductItem[]>();

  useEffect(() => {
    setItems(INITIAL_STATE);
    console.log("==", items);
  }, [setItems]);

  return (
    <>
      <Header />
      <div style={{ margin: "30px", marginBottom: "80px" }}>
        <div className="row">
          <div className="col-lg-9 col-md-9 col-12">
            <Title level={2}>Fresh Recommendation</Title>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                flexWrap: "wrap",
              }}
            >
              {items?.map((item:ProductItem) => (
                <div >
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3 shadow text-center">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
