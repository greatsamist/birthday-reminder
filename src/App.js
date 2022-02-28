import List from "./components/List";
import Styles from "./App.module.scss";
import Data from "./components/Birthdays";
import { useState } from "react";

function App() {
  const [birthday, setBirthday] = useState(Data);

  return (
    <div className={Styles.app}>
      <div className={Styles["app__list"]}>
        <div className={Styles["app__header"]}>
          <p>{birthday.length} birthday(s) today</p>
        </div>
        <List people={birthday} />

        <button
          className={Styles["app__clear"]}
          onClick={() => setBirthday([])}
        >
          clear all
        </button>
      </div>
    </div>
  );
}

export default App;
