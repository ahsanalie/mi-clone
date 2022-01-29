import "./App.css";
import Navbar from "./components/navBar/NavBar";
import PreNavbar from "./components/preNavbar/PreNavbar";
import NavOptios from './components/navBar/NavOptios.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./components/slider/Slider";
import data from "./data/data.json";
import Offers from "./components/offers/Offers";
import Heading from "./components/heading/Heading";
import StarProduct from "./components/starProduct/StarProduct";
import HotAccessoriesMenu from "./components/hotAccessories/HotAccessoriesMenu";
import HotAccessories from "./components/hotAccessories/HotAccessories.js";
import ProductReviews from './components/productReviews/ProductReviews'
import Videos from "./components/videos/Videos";
import Banner from './components/banner/Banner.js'
import Footer from './components/footer/Footer.js'
import NavCard from "./components/navBar/NavCard";
function App() {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar />
      {/* <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories} /> */}
      
      <Slider start={data.banner.start} />
      <Offers props={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />

        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />

        <Route
          path="/"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />

        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />

        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
<Videos videos={data.videos} />
<Heading text="IN THE PRESS" />
<Banner banner={data.banner} />
<Footer footer={data.footer} />
    </BrowserRouter>
  );
}

export default App;
