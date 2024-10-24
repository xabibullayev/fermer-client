import styles from "./Products.module.scss";

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.filter}>
        <div className={styles.price}>
          <div>
            <input type="checkbox" />
            Eń arzan
          </div>
          <div>
            <input type="checkbox" />
            Eń qimbat
          </div>
          <button>Qollaw</button>
        </div>

        <div className={styles.price}>
          <div>
            <input type="checkbox" />
            Paliz ónimleri
          </div>
          <div>
            <input type="checkbox" />
            Miyweler
          </div>
          <div>
            <input type="checkbox" />
            Dán ónimleri
          </div>
          <div>
            <input type="checkbox" />
            Qaqlanǵan ónimler
          </div>
          <div>
            <input type="checkbox" />
            Dárilik ósimlikler
          </div>
          <button>Qollaw</button>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.dark}>
          <img src="/logo.png" alt="" />

          <p>Siz izlegen ónimler</p>
        </div>
        <div className={styles.row}>
          <div className={styles.item}>
            <img src="/kartoshka.jpg" alt="" />
            <h1>Kartoshka</h1>
            <p>100 kg</p>
            <span>5000 SWM</span>
            <button>Toliq ko'riw</button>
          </div>
          <div className={styles.item}>
            <img src="/makke.jpg" alt="" />
            <h1>Kartoshka</h1>
            <p>100 kg</p>
            <span>5000 SWM</span>
            <button>Toliq ko'riw</button>
          </div>
          <div className={styles.item}>
            <img src="/juzim.jpg" alt="" />
            <h1>Juzim</h1>
            <p>100 kg</p>
            <span>5000 SWM</span>
            <button>Toliq ko'riw</button>
          </div>
        </div>
      </div>
    </div>
  );
}
