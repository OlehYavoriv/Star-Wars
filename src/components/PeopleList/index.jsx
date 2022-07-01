import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, img }) => (
        <li className={styles.list__item} key={id}>
          <Link to={`/people/${id}`}>
            <img className={styles.person__photo} src={img} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
