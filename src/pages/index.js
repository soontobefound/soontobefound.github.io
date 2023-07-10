import styles from "@/styles/Home.module.css";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Wrapper>
        <div className={styles.home_container}>
          <div className={styles.page_title}>
            <Image
              src="/logo.svg"
              width={250}
              height={50}
              alt="Picture of the author"
            ></Image>
          </div>
          Coming soon, Stay tuned!
        </div>
      </Wrapper>
    </>
  );
}
