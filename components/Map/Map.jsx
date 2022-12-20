import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"

const Map = ({ zoom, lat, lon, geojsons }) => {
    var color = "red"
    const factor = Math.random() * 100
    if (factor < 20) {
        color = "yellow"
    } else if (factor > 20 && factor < 40) {
        color = "blue"
    } else if (factor > 40 && factor < 80) {
        color = "green"
    } else {
        color = "red"
    }

    const citiesStyle = {
        fillColor: color,
        fillOpacity: 1,
        color: "black",
        weight: 1,
    };

    const handdleOnEachCity = (city, layer) => {
        var name = city.properties.display_name.split(",")
        var name = name[0]

        layer.bindPopup(name)

        // switch (value) {
        //     case 10:
        //         layer.options.fillColor = "orange"
        //         break;
        //     case 100:
        //         layer.options.fillColor = "red"
        //         break;
        //     default:
        //         break;
        // }
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
                <GeoJSON key={1} style={citiesStyle} data={geojson} onEachFeature={handdleOnEachCity} />
            ))}
        </MapContainer>
    );
};

export default Map;