import Styles from "./List.module.scss";

function List({ people }) {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className={Styles.list} key={id}>
            <div className={Styles["list__image"]}>
              <img src={image} className={Styles["list__img"]} alt="" />
            </div>
            <div className={Styles["list__person"]}>
              <h4 className={Styles["list__h4"]}>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
