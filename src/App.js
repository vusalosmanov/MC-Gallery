import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Kampaniyalar from "./pages/Kampaniyalar";
import Brendler from "./pages/Brendler";
import Filiallar from "./pages/Filiallar";
import Əlaqə from "./pages/Əlaqə"
import Like from "./pages/Like";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Səsucaldan from "./pages/Səsucaldan";
import Whatsapp from "./components/Whatsapp";
import Paltaryuyan from "./pages/Paltaryuyan";
import Aiwa from "./pages/Aiwa";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/kampaniyalar" element={<Kampaniyalar />} />
        <Route path="/brendler" element={<Brendler />} />
        <Route path="/filiallar" element={<Filiallar />} />
        <Route path="/əlaqə" element={<Əlaqə />} />
        <Route path="/like" element={<Like />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/səsucaldan" element={<Səsucaldan />} />
        <Route path="/paltaryuyan" element={<Paltaryuyan />} />
        <Route path="/aiwa" element={<Aiwa />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Whatsapp/>
      <Footer />
    </>
  )
}
export default App;
