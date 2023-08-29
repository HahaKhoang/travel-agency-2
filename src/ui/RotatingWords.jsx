import styles from "./RotatingWords.module.scss";

function RotatingWords() {
  return (
    <>
      <div className={styles.container}>
        <p>We're here to help you</p>
        <div className={styles.words}>
          <span>travel</span>
          <span>explore</span>
          <span>relax</span>
          <span>play</span>
          <span>eat</span>
          <span>drink</span>
          <span>party</span>
          <span>shop</span>
        </div>
      </div>
      <p>the way you want</p>
    </>
  );
}

export default RotatingWords;
