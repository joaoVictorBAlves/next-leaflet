import { MapContainer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"
import countries from "../../data/countries.json"
import { useState } from "react";

const Map = () => {
    const [Lat, setLat] = useState()
    const [Lon, setLon] = useState()
    const [datas, setDatas] = useState([])

    const countriesStyle = {
        fillColor: "#2ec4b6",
        fillOpacity: 1,
        color: "#333",
        weight: 0.5,
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

    const onEachCountry = (location, layer) => {
        layer.on('click', async (e) => {
            const data = await fetch(`https://nominatim.openstreetmap.org/reverse?&format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}&polygon_geojson=1&addressdetails=1`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    return data;
                })
            console.log(data)
            setLat(data.lat)
            setLon(data.lon)
            setDatas([...datas, data])
        });
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
            <GeoJSON key={1} style={countriesStyle} data={countries} onEachFeature={onEachCountry} />
            {datas && datas.map((data) => (
                <GeoJSON key={data.place_id} style={(data.lat === Lat) ? geojsonStyle : blurStyle} data={data.geojson.type === "Polygon" ? data.geojson : undefined} />
            ))}
            {(Lat && Lon) && <Popup position={[Lat, Lon]} children={`${datas[datas.length - 1].address.town || datas[datas.length - 1].address.city || datas[datas.length - 1].address.state || datas[datas.length - 1].address.country}`}>
            </Popup>}
        </MapContainer >
    );
};

export default Map;