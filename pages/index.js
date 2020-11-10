import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        alt="Picture of the author"
        loading="lazy"
        width={500}
        height={500}
      ></Image>
      <Image
        src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        alt="Picture of the author"
        loading="eager"
        width={500}
        height={500}
      ></Image>
      <Image
        src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        alt="Picture of the author"
        loading="lazy"
        width={500}
        height={500}
      ></Image>
    </div>
  );
}
