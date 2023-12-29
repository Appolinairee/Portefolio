import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="px-8 py-5 bg-light w-full flex items-center justify-between">
        <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Contacts</Link>
            <Link href="/articles">Articles</Link>
        </div>

        <div>
            Logo
        </div>

        <div>
            <Link>T</Link>
            <Link>T</Link>
            <Link>T</Link>
            <Link>T</Link>
            <Link>T</Link>
        </div>
    </nav>
  )
}

export default NavBar;