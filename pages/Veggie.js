import Image from "next/image";
import Link from "next/link";
import pizza from "../public/images/pizza.jpg";

export default function Veggie() {
  return (
    <>
      <h2>Veggie</h2>
      <p>
        Some Dummy Text Some Dummy Text Some Dummy TextSome Dummy Tex Some Dummy
        TextSome Dummy TextSome Dummy Text Some Dummy Text Some Dummy Text Some
        Dummy Text Some Dummy Text Some Dummy Text Some Dummy Text Some Dummy
        Text Some Dummy Text Some Dummy Text Some Dummy Text Some Dummy Text
        Some Dummy TextSome Dummy Text
      </p>
      <Image
        src={pizza}
        alt="Picture of the pizza"
        width={400}
        height={250}
        // layout="responsive"
      />

      <Link href="/">Back To Home</Link>
    </>
  );
}
