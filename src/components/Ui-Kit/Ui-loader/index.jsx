import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LoaderBlue from "./img/loader-blue.svg";
import LoaderRed from "./img/loader-red.svg";
import styles from "./styles.module.scss";

const UiLoader = ({ theme = "blue" }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case "blue":
        setLoaderIcon(LoaderBlue);
        break;
      case "red":
        setLoaderIcon(LoaderRed);
        break;

      default:
        setLoaderIcon(LoaderBlue);
    }
  }, []);

  return <img className={styles.loader} src={loaderIcon} alt="Loader" />;
};

UiLoader.propTypes = {
  theme: PropTypes.string,
};

export default UiLoader;
