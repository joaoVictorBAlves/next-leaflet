import { MapContainer, GeoJSON, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"
import L from "leaflet"
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
        fillColor: "#16A697",
        fillOpacity: 1,
        color: "#333",
        weight: 0.5
    };

    const blurStyle = {
        fillOpacity: 0,
        weight: 0
    }

    const icon = new L.Icon({
        iconUrl: 'https://www.irmasclarissas.org.br/wp-content/uploads/2015/08/Map-Marker-PNG-File.png',
        iconSize: [25, 25],
        iconAnchor: [10, 10]
    })

    const iconBlur = new L.Icon({
        iconUrl: 'https://www.irmasclarissas.org.br/wp-content/uploads/2015/08/Map-Marker-PNG-File.png',
        iconSize: [0, 0]
    })

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
            {datas != undefined && datas.map((data) => (
                <Marker key={data.place_id + "pin"} position={[data.lat, data.lon]} icon={(current_id == data.place_id) ? icon : iconBlur} />
            ))}
            {/* {datas && <Popup position={[datas.lat, datas[-1].lon]}>{datas[-1].address.city || datas[-1].address.town || datas[-1].address.state || datas[-1].address.country}</Popup>} */}
        </MapContainer>
    );
};

export default Map;