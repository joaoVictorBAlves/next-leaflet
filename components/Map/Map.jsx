import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"
import ceara from "../../data/ceara.json"
import bairros from "../../data/fortaleza-bairros.json"
import municipios from "../../data/municipios.json"
import limites from "../../data/limites-sensitarios.json"

const Map = () => {
    const citiesStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 1,
    };
    const onCityClick = (event) => {
        event.target.setStyle({
            fillColor: "yellow"
        });
    }

    const changeCityColor = (event) => {
        event.target.setStyle({
            fillColor: "yellow"
        });
    }

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

        // layer.on({
        //     click: changeCityColor,
        // })

    }

    return (
        <MapContainer
            className={Style.Map}
            zoom={6.5} // initial zoom required
            preferCanvas
            maxZoom={20} // required
            minZoom={1} // required
            center={[-5.2, -39]}
        // Other map props...
        >
            {/* <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
            {/* <GeoJSON data={bairros} /> */}
            {/* <GeoJSON  data={ceara} /> */}
            <GeoJSON style={citiesStyle} data={municipios} onEachFeature={handdleOnEachCity} />
            {/* <GeoJSON data={limites} /> */}
        </MapContainer>
    );
};

export default Map;