import styles from "./Slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <img src="/slider.jpg" alt="" />
      </div>

      <div className={styles.menu}>
        <div className={styles.item}>
          <div>
            <img src="/vegetables.png" />
          </div>
          <h2>Paliz o'nimleri</h2>
        </div>
        <div className={styles.item}>
          <div>
            <img src="/fruits.png" />
          </div>
          <h2>Miyweler</h2>
        </div>
        <div className={styles.item}>
          <div>
            <img src="/seeds.png" />
          </div>
          <h2>Danli o'nimler</h2>
        </div>
      </div>
    </div>
  );
}