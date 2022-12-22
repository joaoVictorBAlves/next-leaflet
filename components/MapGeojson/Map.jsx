import { MapContainer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"
import countries from "../../data/countries.json"

const Map = ({ datas, current_id }) => {
    console.log(datas, current_id)

    const countriesStyle = {
        fillColor: "#2ec4b6",
        fillOpacity: 1,
        color: "#333",
        weight: 0.5
    };

    const geojsonStyle = {
        fillColor: "yellow",
        fillOpacity: 1,
        color: "#333",
        weight: 0.5
    };

    const blurStyle = {
        fillOpacity: 0,
        weight: 0
    }

    const onEachPlace = (place, layer) => {
        console.log(place);
    }

    return (
        <MapContainer
            className={Style.Map}
            zoom={2}
            preferCanvas
            maxZoom={20}
            minZoom={2}
            center={[0, 0]}
        >
            <GeoJSON style={countriesStyle} data={countries} />

            {datas != undefined && datas.map((data) => (
                <GeoJSON key={data.place_id} style={(current_id == data.place_id) ? geojsonStyle : blurStyle} data={data.geojson} />
            ))}
            {/* {datas && <Popup position={[datas.lat, datas[-1].lon]}>{datas[-1].address.city || datas[-1].address.town || datas[-1].address.state || datas[-1].address.country}</Popup>} */}
        </MapContainer>
    );
};

export default Map;