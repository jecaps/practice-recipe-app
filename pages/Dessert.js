import Image from "next/image";
import Link from "next/link";

export default function Dessert() {
  const photoUrl =
    "https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400";

  return (
    <>
      <h2>Dessert</h2>
      <p>
        Some Dummy Text Some Dummy Text Some Dummy TextSome Dummy Tex Some Dummy
        TextSome Dummy TextSome Dummy Text Some Dummy Text Some Dummy Text Some
        Dummy Text Some Dummy Text Some Dummy Text Some Dummy Text Some Dummy
        Text Some Dummy Text Some Dummy Text Some Dummy Text Some Dummy Text
        Some Dummy TextSome Dummy Text
      </p>
      <Image
        src={photoUrl}
        alt="Picture of the pizza"
        width={400}
        height={250}
      />

      <Link href="/">Back To Home</Link>
    </>
  );
}
