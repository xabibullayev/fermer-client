import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";

export default function AddProduct() {
  return (
    <div className={styles.addProduct}>
      <Navbar />

      <Footer />
    </div>
  );
}
