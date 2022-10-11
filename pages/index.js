import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Veggie from "./Veggie";

export default function Home() {
  return (
    <>
      <h1 className={styles.main}>Hello World</h1>
      <Veggie />
    </>
  );
}
