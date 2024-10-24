import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";

export default function SingleProduct() {
  return (
    <div className={styles.singleProduct}>
      <Navbar />

      <Footer />
    </div>
  );
}
