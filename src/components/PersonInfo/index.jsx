import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.container}>
      <ul>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className={styles.list__item} key={title}>
                <span className={styles.list__item_title}>{title}</span>: {data}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
