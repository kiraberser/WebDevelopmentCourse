import Link from "next/link"
import NavLink from "./nav-link"

function MainHeader() {

    return (
        <header id='main-header'>
            <div id='logo'>
                <Link href={'/'}>Home</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href={'/news'} name='News' />
                    </li>
                    <li>
                        <NavLink href={'/archive'} name='Archive' />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
