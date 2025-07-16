import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png"

import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <header className={styles.header}>
        <Link href="/" className={styles.logo}>
            <Image src={logoImg} alt="A plat with food on it" priority/>
            NextLevel Food
        </Link>

        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Browse Community</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar