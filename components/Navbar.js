import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div href="/" className="logo">
            <Link href="/"><a><Image src="/logo.png" alt="" width={128} height={77}/></a></Link>
            </div>{' '}
            <Link href="/"><a>Home</a></Link>{' '}
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>Users List</a></Link>
        </nav>
    );
}

export default Navbar;