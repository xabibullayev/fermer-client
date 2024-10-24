import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.login}>
      <Navbar />

      <form className={styles.form}>
        <h1>Registraciya</h1>
        <input type="text" placeholder="Telefon nomer" />
        <input type="text" placeholder="Login" />
        <input type="text" placeholder="Parol" />
        <input type="text" placeholder="Paroldi tastiyqlaw" />

        <button>Registraciya</button>

        <Link href="/login">Kiriw</Link>
      </form>

      <Footer />
    </div>
  );
}
