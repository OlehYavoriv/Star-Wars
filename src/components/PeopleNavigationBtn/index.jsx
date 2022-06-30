import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const PeopleNavigationBtn = ({
  getResource,
  prevPage,
  nextPage,
  counterPage,
}) => {
  const handleChangeNext = () => {
    getResource(nextPage);
  };
  const handleChangePrev = () => {
    getResource(prevPage);
  };

  return (
    <div className={styles.btns__container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
        <button onClick={handleChangePrev} disabled={!prevPage}>
          Previous
        </button>
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
        <button onClick={handleChangeNext} disabled={!nextPage}>
          Next
        </button>
      </Link>
    </div>
  );
};

PeopleNavigationBtn.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigationBtn;
