import React from "react";
import { Card, Button } from "antd";
import { ProductItem } from "../types";
import { add } from "../store";
import { useDispatch } from "react-redux";
const { Meta } = Card;

interface props {
    item:ProductItem
}

const CardItem: React.FC<props> = ({ item }) => {
    const dispatch = useDispatch();
  return (
    <span>
      <Card
        hoverable
        style={{ width: 240, margin: "25px" }}
        cover={
          <img
            alt="example"
            height='200px'
            src={item.imageUrl}
          />
        }
      >
        <Meta title={item.title} description={item.price} />
        <Button onClick={()=>dispatch(add(item))} style={{ marginTop: 10 }}>Add To Cart</Button>
      </Card>
    </span>
  );
};

export default CardItem;
