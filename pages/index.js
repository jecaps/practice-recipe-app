import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Hello World</h1>
      <div className="">
        <Link href="/Veggie">Veggie</Link>
        <Link href="/Dessert">Dessert</Link>
      </div>
    </>
  );
}
