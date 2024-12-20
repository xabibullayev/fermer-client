"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

export default function SingleProduct() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MyComponent />
    </Suspense>
  );
}

function MyComponent() {
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

      {title && (
        <div className={styles.main}>
          <div className={styles.left}>
            <img src={`http://45.138.158.174:5000/Images/${image}`} alt="" />
          </div>

          <div className={styles.right}>
            <p>{title}</p>
            <p>{price} SWM</p>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{desc}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
