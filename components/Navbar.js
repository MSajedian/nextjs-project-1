import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <Link href="/" className="logo"><a>WebsiteName</a></Link>{' '}
            <Link href="/about"><a>About</a></Link>
            <Link href="/notabout"><a>Not About</a></Link>
        </nav>
    );
}

export default Navbar;