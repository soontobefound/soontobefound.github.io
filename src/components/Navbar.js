import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className={styles.nav_container}>
        <Image
          src="/logo.svg"
          width={250}
          height={50}
          alt="Picture of the author"
        ></Image>
        <div className={styles.menu} onClick={handleClick}>
          {click ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.34767 13.3111L17.4012 13.3111L10.8245 19.743C10.2989 20.257 10.2989 21.1005 10.8245 21.6146C10.9492 21.7367 11.0973 21.8337 11.2603 21.8998C11.4234 21.966 11.5981 22 11.7746 22C11.9511 22 12.1259 21.966 12.2889 21.8998C12.452 21.8337 12.6001 21.7367 12.7247 21.6146L21.6059 12.9289C21.7308 12.807 21.8299 12.6621 21.8976 12.5027C21.9652 12.3433 22 12.1723 22 11.9997C22 11.8271 21.9652 11.6562 21.8976 11.4967C21.8299 11.3373 21.7308 11.1925 21.6059 11.0705L12.7247 2.38488C12.6 2.26286 12.4518 2.16607 12.2888 2.10003C12.1258 2.03399 11.9511 2 11.7746 2C11.5982 2 11.4235 2.03399 11.2604 2.10003C11.0974 2.16607 10.9493 2.26286 10.8245 2.38488C10.6997 2.50691 10.6008 2.65177 10.5333 2.8112C10.4657 2.97063 10.431 3.14151 10.431 3.31408C10.431 3.48664 10.4657 3.65752 10.5333 3.81695C10.6008 3.97638 10.6997 4.12125 10.8245 4.24327L17.4012 10.6751L2.34767 10.6751C1.60645 10.6751 1 11.2682 1 11.9931C1 12.718 1.60645 13.3111 2.34767 13.3111Z"
                fill="#F5F5F5"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00008 9.99883C0.734845 9.99883 0.48047 9.89347 0.292918 9.70592C0.105366 9.51836 0 9.26399 0 8.99875V1.00008C0 0.734845 0.105366 0.48047 0.292918 0.292918C0.48047 0.105366 0.734845 0 1.00008 0H9.00075C9.26599 0 9.52036 0.105366 9.70792 0.292918C9.89547 0.48047 10.0008 0.734845 10.0008 1.00008V8.99875C10.0008 9.26399 9.89547 9.51836 9.70792 9.70592C9.52036 9.89347 9.26599 9.99883 9.00075 9.99883H1.00008ZM15.0012 9.99883C14.736 9.99883 14.4816 9.89347 14.2941 9.70592C14.1065 9.51836 14.0012 9.26399 14.0012 8.99875V1.00008C14.0012 0.734845 14.1065 0.48047 14.2941 0.292918C14.4816 0.105366 14.736 0 15.0012 0H22.9999C23.2652 0 23.5195 0.105366 23.7071 0.292918C23.8946 0.48047 24 0.734845 24 1.00008V8.99875C24 9.26399 23.8946 9.51836 23.7071 9.70592C23.5195 9.89347 23.2652 9.99883 22.9999 9.99883H15.0012ZM1.00008 24C0.734845 24 0.48047 23.8946 0.292918 23.7071C0.105366 23.5195 0 23.2652 0 22.9999V14.9992C0 14.734 0.105366 14.4796 0.292918 14.2921C0.48047 14.1045 0.734845 13.9992 1.00008 13.9992H9.00075C9.26599 13.9992 9.52036 14.1045 9.70792 14.2921C9.89547 14.4796 10.0008 14.734 10.0008 14.9992V22.9999C10.0008 23.2652 9.89547 23.5195 9.70792 23.7071C9.52036 23.8946 9.26599 24 9.00075 24H1.00008ZM15.0012 24C14.736 24 14.4816 23.8946 14.2941 23.7071C14.1065 23.5195 14.0012 23.2652 14.0012 22.9999V14.9992C14.0012 14.734 14.1065 14.4796 14.2941 14.2921C14.4816 14.1045 14.736 13.9992 15.0012 13.9992H22.9999C23.2652 13.9992 23.5195 14.1045 23.7071 14.2921C23.8946 14.4796 24 14.734 24 14.9992V22.9999C24 23.2652 23.8946 23.5195 23.7071 23.7071C23.5195 23.8946 23.2652 24 22.9999 24H15.0012Z"
                fill="#F5F5F5"
                fillOpacity="0.960784"
              />
            </svg>
          )}
        </div>
        <div
          className={
            click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`
          }
        >
          <div className={styles.nav_item}>Strategy</div>
          <div className={styles.nav_item}>Funds</div>
          <div className={styles.nav_item}>Investments</div>
          <div className={styles.nav_item}>Company</div>
          <div className={styles.nav_item}>Media</div>
          <div className={styles.nav_item}>Contact</div>
        </div>
      </div>
    </>
  );
}