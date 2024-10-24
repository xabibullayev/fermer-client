import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <Navbar />

      <Footer />
    </div>
  );
}
