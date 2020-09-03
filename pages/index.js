import Head from "next/head";
import Router from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const xxx = () => {
    Router.push("/posts/firstPost");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} onClick={xxx}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
