import { useState } from "react";
import Map from "../components/MapGeojson";
import SearchForm from "../components/SearchForm"
import Style from "../styles/Home.module.css";

const MapGeojson = () => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null)
  const [current_id, setCurrentID] = useState()

  const searchPlace = async (event) => {
    event.preventDefault();
    const fetchData = await fetch("api/search", {
      method: "POST", body: JSON.stringify({
        country: (event.target[0].value != "") ? event.target[0].value : undefined,
        state: (event.target[1].value != "") ? event.target[1].value : undefined,
        city: (event.target[2].value != "") ? event.target[2].value : undefined,
      })
    })
      .then(response => {
        return response.json();
      }).then(data => {
        return data;
      }).catch((fetchError) => {
        setError(fetchError)
      });
    setCurrentID(fetchData[0].place_id)
    setDatas([...datas, fetchData[0]]);
  }

  return (
    <div className={Style.Container}>
      {error && <p>Ocorreu um problema: {error}</p>}
      <SearchForm searchPlace={searchPlace} />
      <Map datas={datas} current_id={current_id} />
    </div>
  );
}

export default MapGeojson;