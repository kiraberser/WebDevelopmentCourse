import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png"

import styles from "./navbar.module.css"
import NavLink from "./NavLink";

const Navbar = () => {

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={logoImg} alt="A plat with food on it" priority />
                NextLevel Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>
                            Browse Meals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>
                            Foodies Community
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar