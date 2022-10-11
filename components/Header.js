import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>Recipe App</h1>
    </header>
  );
}
