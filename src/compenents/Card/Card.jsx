import React from "react";
import styles from "./Card.module.css";
const Card = ({ namesList, type, deleteFun }) => {
  return (
    <div>
      {namesList.map(({ name, age, address, phone }, index) => (
        <div
          className={styles.cardWrapper}
          key={index}
          style={{ backgroundColor: type === "men" ? "blue" : "pink" }}
        >
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Address: {address}</div>
          <div>Phone: {phone}</div>
          <div
            className={styles.deleteBtn}
            onClick={(e) => deleteFun(e, index)}
          >
            X
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
