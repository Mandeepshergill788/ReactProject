import React, { useState } from 'react'

const ProductDisplay = ({item}) => {
    console.log(item)
    const {name, id, price, seller, ratingsCount} = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

  return (
    <div>
      <div></div>
    </div>
  )
}

export default ProductDisplay