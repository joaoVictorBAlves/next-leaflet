import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import Style from "../../styles/Home.module.css"
import data from "../../data/fortaleza"

const Map = () => {
    return (
        <MapContainer className={Style.Map} center={[-3.728272, -38.526316]} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={data} />
        </MapContainer>
    );
}

export default Map
