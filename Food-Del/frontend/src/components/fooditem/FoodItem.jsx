import React, { useContext } from "react";
import "./fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, description, image, price }) => {

  const {cartItems , addToCart , removeToCart , url } = useContext(StoreContext)

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={url + "/images/" + image} alt="Item_Image" className="food-item-img" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeToCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">$ {price}.00</p>
      </div>
    </div>
  );
};

export default FoodItem;
