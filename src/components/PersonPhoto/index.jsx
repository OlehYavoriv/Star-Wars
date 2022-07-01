import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const PersonPhoto = ({ personPhoto, personName }) => {
  return (
    <div className={styles.img__container}>
      <img className={styles.photo} src={personPhoto} alt={personName} />
    </div>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
};

export default PersonPhoto;
