import { useState } from "react";
import styles from "./TourCard.module.scss";
import { NavLink, useNavigate } from "react-router-dom";

function TourCard({ mainImage, name, shortDesc, duration, type }) {
  function tourClicked(e) {
    console.log(e.target.value);
  }

  return (
    <div className={styles.container}>
      <img src={mainImage} className={styles.picture} />
      <p className={styles.title}>{name}</p>
      <p className={styles.description}>{shortDesc}</p>
      <div className={styles.extras}>
        <p>Duration: {duration} </p>
        <p>Type: {type}</p>
      </div>
      <NavLink className={styles.button} onClick={tourClicked} value={type}>
        Let's go to Japan!
      </NavLink>
    </div>
  );
}

export default TourCard;
