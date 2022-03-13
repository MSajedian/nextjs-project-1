import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo"><h1>Name List</h1></div><br />
            <Link href="/"><a>Home</a></Link><br />
            <Link href="/about"><a>About</a></Link><br />
        </nav>
    );
}

export default Navbar;