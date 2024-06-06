import React, { useEffect, useState, useRef } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();

  const finalPrice = qty * parseInt(options[size]);

  const handleAddToCart = async () => {
    const foodItem = data.find(item => item.id === props.foodItem._id && item.size === size);

    if (foodItem) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: finalPrice,
        qty: foodItem.qty + qty,
        size: size
      });
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: props.foodItem.img
      });
    }
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div className="p-1">
      <div className="border border-light border-1">
        <div className="card mt-3 bg-dark text-white p-2" style={{ width: "100%", maxWidth: "360px", maxHeight: "360px" }}>
          <img
            className="card-img-top"
            src={props.foodItem.img}
            alt="Card image cap"
            style={{ height: '120px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100"></div>
            <select className="m-2 h-100 text-white bg-success rounded" onChange={(e) => setQty(Number(e.target.value))}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>
            
            <select className="m-2 h-100 text-white bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            
            <div className="d-inline h-100">₹{finalPrice}</div>
          </div>
        </div>
        <hr />
        <button className="btn btn-success justify-center ms-3 mb-3" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
