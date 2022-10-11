import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.main}>Hello World</h1>
      <p>This is my new NextJS project</p>
      <Link href="/Veggie">Veggie</Link>
      <Link href="/Dessert">Dessert</Link>
    </>
  );
}
