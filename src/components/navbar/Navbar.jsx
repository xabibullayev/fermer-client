import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="" />
          <h1>FERMER-SHOP</h1>
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="Tekst..." />
          <button>Izlew</button>
        </div>

        <div className={styles.auth}>
          <Link href="/login">Kiriw</Link>
          <Link href="/register">Registraciya</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <ul>
          <li className={styles.active}>
            <Link href="/">Bas bet</Link>
          </li>
          <li>
            <Link href="/">Biz haqqimizda</Link>
          </li>
          <li>
            <Link href="/">Baylanis</Link>
          </li>
          <li>
            <Link href="/">Qollanba</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
