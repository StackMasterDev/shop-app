import Image from "next/image";
import styles from "./page.module.css";
import BigPicture from "@/components/BigPicture/BigPicture";
import Categories from "@/components/Categories/Categories";
import BestSellerProducts from "@/components/BestSellerProducts/BestSellerProducts";

export default function Home() {

  return (
    <div>
      <BigPicture />
      <Categories />
      <BestSellerProducts />
    </div>
  );
}
