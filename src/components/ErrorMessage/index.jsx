import styles from "./styles.module.scss";
import video from "../../assets/bg/error-video.mp4";

const ErrorMessage = () => {
  return (
    <>
      <div className={styles.error__container}>
        <p className={styles.error__message}>
          The dark side of the force has won.
          <br />
          We cannot display data.
          <br />
          Come back when we fix everything
        </p>
        <video
          className={styles.error__video}
          autoPlay
          loop
          muted
          alt="Error :("
          src={video}
        />
      </div>
    </>
  );
};

export default ErrorMessage;
