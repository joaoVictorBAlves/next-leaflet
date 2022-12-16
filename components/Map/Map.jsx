import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Home.module.css"
import ceara from "../../data/ceara.json"
import bairros from "../../data/fortaleza-bairros.json"
import municipios from "../../data/municipios.json"
import limites from "../../data/limites-sensitarios.json"

const Map = () => {
    return (
        <MapContainer
            className={Style.Map}
            zoom={6.5} // initial zoom required
            preferCanvas
            maxZoom={20} // required
            minZoom={3} // required
            center={[-5.2, -38.5434]}
        // Other map props...
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <GeoJSON data={ceara} />
             {/* <GeoJSON data={bairros} /> */}
             <GeoJSON data={municipios} />
             <GeoJSON data={limites} />
        </MapContainer>
    );
};

export default Map;