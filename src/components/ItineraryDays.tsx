import styles from "./ItineraryDays.module.scss";

type ItineraryDaysProps = {
  img1: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  img6?: string;
  img7?: string;
  day1Title: string;
  day1Desc: string;
  day2Title?: string;
  day2Desc?: string;
  day3Title?: string;
  day3Desc?: string;
  day4Title?: string;
  day4Desc?: string;
  day5Title?: string;
  day5Desc?: string;
  day6Title?: string;
  day6Desc?: string;
  day7Title?: string;
  day7Desc?: string;
  day8Title?: string;
  day8Desc?: string;
  day9Title?: string;
  day9Desc?: string;
  day10Title?: string;
  day10Desc?: string;
  day11Title?: string;
  day11Desc?: string;
  day12Title?: string;
  day12Desc?: string;
  day13Title?: string;
  day13Desc?: string;
  day14Title?: string;
  day14Desc?: string;
  day15Title?: string;
  day15Desc?: string;
};

function ItineraryDays(props: ItineraryDaysProps) {
  const container6 = props.day7Title
    ? `${styles["container-6-7"]}`
    : `${styles["container-small-6-7"]}`;

  const container11 = props.day12Title
    ? `${styles["container-11-12"]}`
    : `${styles["container-small-11-12"]}`;

  return (
    <>
      <div className={styles["container-1-2"]}>
        <div className={styles["day-container-1-2"]}>
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 1</h3>
            <p className={styles.text}>{props.day1Title}</p>
            <p className={styles.text}>{props.day1Desc}</p>
          </div>
          {props.day2Title && (
            <div className={styles.day}>
              <h3 className={styles["number-day"]}>Day 2</h3>
              <p className={styles.text}>{props.day2Title}</p>
              <p className={styles.text}>{props.day2Desc}</p>
            </div>
          )}
        </div>
        <div className={styles["picture-container-1-2"]}>
          <img src={props.img1} className={styles.picture} />
        </div>
      </div>
      {props.day3Title && (
        <div className={styles["container-3-5"]}>
          {!props.day5Title ? (
            <div className={styles["picture-container-small-3-5"]}>
              <img src={props.img2} className={styles.picture} />
            </div>
          ) : (
            <div className={styles["picture-container-3-5"]}>
              <img src={props.img2} className={styles.picture} />
            </div>
          )}
          <div className={styles["day-container-3-5"]}>
            <div className={styles.day}>
              <h3 className={styles["number-day"]}>Day 3</h3>
              <p className={styles.text}>{props.day3Title}</p>
              <p className={styles.text}>{props.day3Desc}</p>
            </div>
            {props.day4Title && (
              <div className={styles.day}>
                <h3 className={styles["number-day"]}>Day 4</h3>
                <p className={styles.text}>{props.day4Title}</p>
                <p className={styles.text}>{props.day4Desc}</p>
              </div>
            )}
            {props.day5Title && (
              <div className={styles.day}>
                <h3 className={styles["number-day"]}>Day 5</h3>
                <p className={styles.text}>{props.day5Title}</p>
                <p className={styles.text}>{props.day5Desc}</p>
              </div>
            )}
          </div>
        </div>
      )}
      {props.day6Title && (
        <div className={container6}>
          <div className={styles["container-top"]}>
            <div className={styles["day-6"]}>
              <div className={styles.day}>
                <h3 className={styles["number-day"]}>Day 6</h3>
                <p className={styles.text}>{props.day6Title}</p>
                <p className={styles.text}>{props.day6Desc}</p>
              </div>
            </div>
            <div className={styles["picture-container-top"]}>
              <img src={props.img3} className={styles.picture} />
            </div>
          </div>
          {props.day7Title && (
            <div className={styles["container-bottom"]}>
              <div className={styles["picture-container-bottom"]}>
                <img src={props.img4} className={styles.picture} />
              </div>
              <div className={styles["day-7"]}>
                <div className={styles.day}>
                  <h3 className={styles["number-day"]}>Day 7</h3>
                  <p className={styles.text}>{props.day7Title}</p>
                  <p className={styles.text}>{props.day7Desc}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {props.day8Title && (
        <div className={styles["container-8-10"]}>
          <div className={styles["day-container-8-10"]}>
            <div className={styles.day}>
              <h3 className={styles["number-day"]}>Day 8</h3>
              <p className={styles.text}>{props.day8Title}</p>
              <p className={styles.text}>{props.day8Desc}</p>
            </div>
            {props.day9Title && (
              <div className={styles.day}>
                <h3 className={styles["number-day"]}>Day 9</h3>
                <p className={styles.text}>{props.day9Title}</p>
                <p className={styles.text}>{props.day9Desc}</p>
              </div>
            )}
            {props.day10Title && (
              <div className={styles.day}>
                <h3 className={styles["number-day"]}>Day 10</h3>
                <p className={styles.text}>{props.day10Title}</p>
                <p className={styles.text}>{props.day10Desc}</p>
              </div>
            )}
          </div>
          {!props.day10Title ? (
            <div className={styles["picture-container-small-8-10"]}>
              <img src={props.img5} className={styles.picture} />
            </div>
          ) : (
            <div className={styles["picture-container-8-10"]}>
              <img src={props.img5} className={styles.picture} />
            </div>
          )}
        </div>
      )}
      {props.day11Title && (
        <div className={container11}>
          <div className={styles["container-top"]}>
            <div className={styles["picture-container-top"]}>
              <img src={props.img6} className={styles.picture} />
            </div>
            <div className={styles["day-11"]}>
              <div className={styles.day}>
                <h3 className={styles["number-day"]}>Day 11</h3>
                <p className={styles.text}>{props.day11Title}</p>
                <p className={styles.text}>{props.day11Desc}</p>
              </div>
            </div>
          </div>
          {props.day12Title && (
            <div className={styles["container-bottom"]}>
              <div className={styles["day-12"]}>
                <div className={styles.day}>
                  <h3 className={styles["number-day"]}>Day 12</h3>
                  <p className={styles.text}>{props.day12Title}</p>
                  <p className={styles.text}>{props.day12Desc}</p>
                </div>
              </div>
              <div className={styles["picture-container-bottom"]}>
                <img src={props.img6} className={styles.picture} />
              </div>
            </div>
          )}
        </div>
      )}

      {props.day13Title && (
        <div className={styles["container-13-15"]}>
          {!props.day15Title ? (
            <div className={styles["picture-container-small-13-15"]}>
              <img src={props.img7} className={styles.picture} />
            </div>
          ) : (
            <div className={styles["picture-container-13-15"]}>
              <img src={props.img6} className={styles.picture} />
            </div>
          )}
          <div className={styles["day-container-13-15"]}>
            <div className={styles.day}>
              <h3 className={styles["number-day"]}>Day 13</h3>
              <p className={styles.text}>{props.day13Title}</p>
              <p className={styles.text}>{props.day13Desc}</p>
            </div>
            {props.day14Title && (
              <div className={styles.day}>
                <h3 className={styles["number-day"]}>Day 14</h3>
                <p className={styles.text}>{props.day14Title}</p>
                <p className={styles.text}>{props.day14Desc}</p>
              </div>
            )}
            {props.day15Title && (
              <div className={styles.day}>
                <h3 className={styles["number-day"]}>Day 15</h3>
                <p className={styles.text}>{props.day15Title}</p>
                <p className={styles.text}>{props.day15Desc}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ItineraryDays;
