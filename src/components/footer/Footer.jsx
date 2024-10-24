import styles from "./Footer.module.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.right}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="" />
          <h1>FERMER-SHOP</h1>
        </div>
        <div className={styles.link}>
          <LocalPhoneIcon />
          +998 99 488 97 98
        </div>
        <div className={styles.link}>
          <MailIcon />
          nurilla.gulimbetov@gmail.com
        </div>
      </div>
    </div>
  );
}
