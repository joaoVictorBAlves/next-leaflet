import Map from "../components/Map";;
import Style from "../styles/Home.module.css"
import SearchForm from "../components/SearchForm"
import { useEffect, useState } from "react";

const Home = () => {
  const [geojsons, setGeojsons] = useState([])
  const [position, setPosition] = useState([0, 0])
  const [address, setAddress] = useState("")
  const [zoom, setZoom] = useState(1)

  const handleForm = async (event) => {
    event.preventDefault();
    var obj = {
      country: (event.target[0].value != "") ? event.target[0].value : undefined,
      state: (event.target[1].value != "") ? event.target[1].value : undefined,
      city: (event.target[2].value != "") ? event.target[2].value : undefined,
      street: (event.target[3].value != "") ? event.target[3].value : undefined
    }


    const data = await fetch("/api/search", { method: "POST", body: JSON.stringify(obj) })
      .then(response => {
        return response.json()
      }).then(data => {

        return data;
      })
    if (data) {
      setGeojsons([...geojsons, data[0].geojson])
      setPosition([data[0].lat, data[0].lon])
      setAddress(data[0].address)
      if (data[0].address.country)
        setZoom(5)
      if (data[0].address.state)
        setZoom(10)
      if (data[0].address.city || data[0].address.town)
        setZoom(15)
      if (data[0].address.street)
        setZoom(20)
    }
  }

  return (
    <div className={Style.Container}>
      <SearchForm handleForm={handleForm} />
      <Map zoom={zoom} lat={position[0]} lon={position[1]} geojsons={geojsons} address={address} />
    </div>
  );
}

export default Home;