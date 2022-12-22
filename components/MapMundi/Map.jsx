import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"
import countries from "../../data/countries.json"
import { useState } from "react";

const Map = () => {
    const countriesStyle = {
        fillColor: "#2ec4b6",
        fillOpacity: 1,
        color: "#333",
        weight: 0.5,
        background: "blue"
    };

    const onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN
        layer.bindPopup(countryName)
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
        </MapContainer>
    );
};

export default Map;