import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import NotFound from "../../assets/icons/not-found.jpg";

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <>
      <div className={styles.not_found__container}>
        <p className={styles.not_found__msg}>Not Found</p>
        <img className={styles.not_found__img} src={NotFound} alt="NotFound" />
        <p className={styles.not_found__no_match}>
          No match for : &nbsp; <span>{location.pathname}</span> , &nbsp;{" "}
          <Link to="/">go back home</Link>{" "}
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
