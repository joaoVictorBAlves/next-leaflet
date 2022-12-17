import Footer from "../components/Footer";
import Map from "../components/Map"
import Style from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={Style.Container}>
      <h1>Municípios do Ceará</h1>
      <Map />
      <Footer />
    </div>
  );
}

export default Home;