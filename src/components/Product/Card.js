import React, { useState, useContext, useEffect } from "react";
import "./Card.css";
import star from '../../Icons/5star.svg';
import MyContext from '../../Context'

const Card = () => {
  const { data, setData } = useContext(MyContext);
  const addCartHandler = () => {
    setData(data + 1)
  }
  const userData = [];
  const [res, setRes] = useState([]);
  useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (const dataItem in data) {
          userData.push({
            id: data[dataItem].id,
            newPrice: data[dataItem].newPrice,
            oldPrice: data[dataItem].oldPrice,
            productImage: data[dataItem].productImage,
            productName: data[dataItem].productName,
          });
          setRes(userData);
        }
      });

  }, [])
  return (
    <div className="card-container">
      {res &&
        res.map((item) => {
          return (

            <div className="card">
              <img src={item.productImage} alt="" className="productImage" />
              <div className="productName">{item.productName}</div>
              <div className="star-price">
                <img src={star} alt="" />

                <div>
                  <span className="oldPrice">{item.oldPrice}/-</span>
                  <span className="newPrice">{item.newPrice}/-</span>
                </div>
              </div>
              <div className="btn-align-center">
                <button className="btn-primary btn-width" onClick={addCartHandler}>Add to cart</button>
              </div>
            </div>

          );
        })}
    </div>
  );
};

export default Card;
