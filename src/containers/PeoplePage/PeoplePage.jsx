import { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
// import styles from "./styles.module.scss";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }) => {
      return {
        name,
        url,
      };
    });
    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      {people && (
        <ul>
          {people.map(({ name, url }) => (
            <li key={name}>
              {name}
              <p>{url}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PeoplePage;
