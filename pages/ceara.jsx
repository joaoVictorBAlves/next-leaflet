import Map from "../components/Map";
import municipiosCeara from "../data/municipios.json"
import Style from "../styles/Home.module.css"

const Ceara = () => {
    return (
        <div className={Style.Container}>
            <h2>Municípios do Ceará</h2>
            <Map zoom={6.5} lat={-5.2} lon={-39} geojsons={[municipiosCeara]} />
        </div>

    );
}

export default Ceara
