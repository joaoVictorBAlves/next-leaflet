import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>NextJS & Leaflet</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/ceara">Ceará</Link>
        </nav>
    );
}
 
export default Navbar;