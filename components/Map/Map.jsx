import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"

const Map = ({ zoom, lat, lon, geojsons }) => {

    const citiesStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 1,
    };

    const handdleOnEachCity = (city, layer) => {
        const name = city.properties.name
        const value = city.properties.value

        layer.bindPopup(name + " - " + value)

        switch (value) {
            case 10:
                layer.options.fillColor = "orange"
                break;
            case 100:
                layer.options.fillColor = "red"
                break;
            default:
                break;
        }
    }

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
            {geojsons.map((geojson) => (
                <GeoJSON style={citiesStyle} data={geojson} onEachFeature={handdleOnEachCity} />
            ))}
        </MapContainer>
    );
};

export default Map;