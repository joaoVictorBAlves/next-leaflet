import { MapContainer, GeoJSON, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"
import Bairros from "../../data/POLIGONAIS.json"
import Nomes from "../../data/NOMES.json"

const onEachFeature = (a, b) => {
    console.log(a, b)
}

const Map = () => {
    return (
        <MapContainer
            className={Style.Map}
            zoom={12}
            preferCanvas
            maxZoom={20}
            minZoom={2}
            center={[-3.7304512, -38.5217989]}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON key={0} data={Bairros} />
        </MapContainer>
    );
};

export default Map;