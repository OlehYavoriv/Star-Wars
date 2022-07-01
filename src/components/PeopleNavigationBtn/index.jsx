import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UiButton from "@ui/Ui-button";
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
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
        <UiButton
          text="Next"
          onClick={handleChangeNext}
          disabled={!nextPage}
        />
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
