import { useState, useEffect } from "react";
import { makeConcurrentRequest, changeHTTP } from "@utils/network";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsName(response);
    })();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <ul>
          {filmsName
            .sort((a, z) => a.episode_id - z.episode_id)
            .map(({ title, episode_id, director }) => (
              <li className={styles.list__item} key={episode_id}>
                <span className={styles.list__item_episide}>
                  Episode {episode_id}
                </span>
                <span className={styles.list__item_colon}> : </span>
                <span className={styles.list__item_title}>{title}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;
