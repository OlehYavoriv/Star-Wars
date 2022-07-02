import { useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow-left.svg";
import styles from "./styles.module.scss";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.btn_back} onClick={() => navigate(-1)}>
      <img src={arrowBack} alt="Go Back" />
      Go back
    </button>
  );
};

export default PersonLinkBack;
