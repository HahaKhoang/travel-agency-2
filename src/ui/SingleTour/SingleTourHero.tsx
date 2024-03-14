import styles from "./SingleTourHero.module.scss";

type SingleTourHeroProps = {
  img: string;
  title: string;
  text: string;
};

function SingleTourHero({ img, title, text }: SingleTourHeroProps) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.196),
      rgba(40, 40, 40, 0.243)),url(${img})`,
      }}
    >
      <div className={styles.box}>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.text}>{text}</h4>
      </div>
    </div>
  );
}

export default SingleTourHero;
