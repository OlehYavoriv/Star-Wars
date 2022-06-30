import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getApiResource, changeHTTP } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@services/getPeopleData";
import PeopleList from "@components/PeopleList";
import withErrorApi from "@hoc/withErrorApi";
import PeopleNavigationBtn from "@components/PeopleNavigationBtn";
// import styles from "./styles.module.scss";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setcounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setcounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <h2 className="title">Star Wars characters</h2>
      {people && <PeopleList people={people} />}
      <PeopleNavigationBtn
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
