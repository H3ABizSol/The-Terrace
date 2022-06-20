import backgroundImg from './image/backgroundImg.png'
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import GalleryPage from "./pages/GalleryPage";
import AboutUsPage from "./pages/AboutUsPage";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ContactUsPage from './pages/ContactUsPage';
import ThankYou from './pages/ThankYou';




function App() {

  


  return (
  <div className="blackBackground"  >
    <Router>
    <img src={backgroundImg} alt="" className="blackBackgroundimg" />
    <Header />
    <main>
        <Routes>
        <Route path="*" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/sitting" element={<ReservationPage title={'SITTING'}/>} />
        <Route path="/banquet" element={<ReservationPage title={'BANQUET HALL'}/>} />
        <Route path="/openterrace" element={<ReservationPage title={'OPEN TERRACE'}/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactUsPage/> } />
        <Route path="/thankyou" element={<ThankYou/>  } />
        </Routes>
    </main>
    {/* <Homepage /> */}
    <Footer />
    </Router>
  </div>
  );
}

export default App;
