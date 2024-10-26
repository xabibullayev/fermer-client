"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";
import { useSearchParams } from "next/navigation";

export default function AddProduct() {
  const searchParams = useSearchParams();
  let title = searchParams.get("title");
  let price = searchParams.get("price");
  let address = searchParams.get("address");
  let phone = searchParams.get("phone");
  let desc = searchParams.get("desc");
  let image = searchParams.get("image");

  console.log(title);

  return (
    <div className={styles.singleProduct}>
      <Navbar />

      <div className={styles.top}>
        <form onSubmit={handleSubmit}>
          <h1>Taza ónim qosiw</h1>

          <div className={styles.upload}>
            <label htmlFor="file">
              <img src="/upload.png" alt="" />
            </label>
            <input
              id="file"
              hidden
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className={styles.images}>
              <div>
                {image && (
                  <>
                    <img src={image} alt="Uploaded" width="150" />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div>
              <input
                type="text"
                placeholder="Onim"
                name="title"
                value={data.title}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Bahasi"
                name="price"
                value={data.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Manzil"
                name="address"
                value={data.address}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Telefon nomer"
                name="phone"
                value={data.phone}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              placeholder="Qosimsha..."
              name="desc"
              value={data.desc}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button>Saqlaw</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
