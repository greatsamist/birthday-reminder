import React from "react";
import Styles from "./List.module.scss";

function List() {
  return (
    <div className={Styles.list}>
      <div className={Styles["list__header"]}>
        <h3>5 birthdays today</h3>
      </div>
      <div className={Styles["list__profile"]}></div>

      <button className={Styles["list__clear"]}>clear</button>
    </div>
  );
}

export default List;
