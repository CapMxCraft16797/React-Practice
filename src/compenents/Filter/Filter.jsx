import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ filteration }) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    filteration(name);

    name.length > 10 && alert("lgjdf");
  };
  return (
    <div className={styles.mt}>
      <input
        type="text"
        placeholder="filter by name"
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
