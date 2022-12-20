import Map from "../components/Map";;
import Style from "../styles/Home.module.css"
import SearchForm from "../components/SearchForm"
import { useState } from "react";

const Home = () => {
  const [geojsons, setGeojsons] = useState([])

  // const handleForm = async (event) => {
  //   event.preventDefault();
  //   const obj = {
  //     "country": event.target[0].value,
  //     "state": event.target[1].value,
  //     "city": event.target[2].value,
  //     "street": event.target[4].value
  //   }
  // }

  return (
    <div className={Style.Container}>
      <SearchForm />
      <Map zoom={1} lat={-5.2} lon={-39} geojsons={geojsons} />
    </div>
  );
}

export default Home;