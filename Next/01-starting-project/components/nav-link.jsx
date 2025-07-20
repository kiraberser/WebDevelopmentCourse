'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

const NavLink = ({ href, name }) => {
    const path = usePathname()

    return (
        <Link
            href={`${href}`}
            className={path.startsWith(href) ? 'active' : undefined}
        >
            {name}
        </Link>
    )
}

export default NavLink