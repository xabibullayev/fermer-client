import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.login}>
      <Navbar />

      <form className={styles.form}>
        <h1>Kiriw</h1>
        <input type="text" placeholder="Login" />
        <input type="text" placeholder="Parol" />

        <button>Kiriw</button>

        <Link href="/register">Registraciya</Link>
      </form>

      <Footer />
    </div>
  );
}
