"use client"

import styles from "./navbar.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({href, children}) {

    const path = usePathname()
    return (
        <div>
            <Link
                href={href}
                className={path.startsWith(href) ? styles.active : undefined}>
                {children}
            </Link>
        </div>
    )
}

export default NavLink
