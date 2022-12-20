import Map from "../components/Map";;
import Style from "../styles/Home.module.css"
import SearchForm from "../components/SearchForm"
import { useEffect, useState } from "react";

const Home = () => {
  const [geojsons, setGeojsons] = useState([])

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
    setGeojsons([...geojsons, data])
  }

  return (
    <div className={Style.Container}>
      <SearchForm handleForm={handleForm} />
      <Map zoom={1} lat={-5.2} lon={-39} geojsons={geojsons} />
    </div>
  );
}

export default Home;