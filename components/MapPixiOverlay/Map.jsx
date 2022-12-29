import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-pixi-overlay';
import "leaflet/dist/leaflet.css";
import Style from "../../styles/Map.module.css"

function Map() {
    useEffect(() => {
        // Create a new Leaflet map
        const map = L.map('map').setView([51.505, -0.09], 13);

        // Add a base map tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © OpenStreetMap contributors'
        }).addTo(map);

        // Load the GJson file using axios
        fetch('https://nominatim.openstreetmap.org/search?city=Uruburetama&format=geojson&polygon_geojson=1')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                console.log(L.pixiOverlay)
                const pixiOverlay = L.pixiOverlay(data, {
                    style: {
                        fillColor: "red"
                    }
                });
                pixiOverlay.addTo(map)
            });
    }, []);

    return (
        <div id="map" className={Style.Map} />
    );
}

export default Map;