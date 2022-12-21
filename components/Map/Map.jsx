import { TileLayer, MapContainer, GeoJSON, Marker, Popup } from "react-leaflet";
import L from "leaflet"
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"
import { addRequestMeta } from "next/dist/server/request-meta";

const Map = ({ zoom, lat, lon, geojsons, address }) => {

    const citiesStyle = {
        fillColor: "blue",
        fillOpacity: 1,
        color: "black",
        weight: 1,
    };

    const markerIcon = new L.Icon({
        iconUrl: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png",
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    return (
        <MapContainer
            className={Style.Map}
            zoom={zoom} // initial zoom required
            preferCanvas
            maxZoom={20} // required
            minZoom={1} // required
            center={[lat, lon]}
        // Other map props...
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {(lat != 0 && lon != 0) && <Marker position={[lat, lon]} icon={markerIcon}>
                <Popup>
                    <b>{address.stret || address.city || address.town || address.state || address.country}</b>
                </Popup>
            </Marker>}
            {geojsons.map((geojson) => (
                <GeoJSON key={1} style={citiesStyle} data={geojson} />
            ))}
        </MapContainer>
    );
};

export default Map;