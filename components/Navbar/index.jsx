import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>NextJS & Leaflet</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/map-geojson">Geojsons</Link>
            <Link href="/map-marker">Marcadores</Link>
        </nav>
    );
}
 
export default Navbar;