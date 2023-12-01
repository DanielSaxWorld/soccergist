import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage/Home";
import News from "./pages/Newspage/News";
import Messi from "./pages/Messipage/Messi";
import NoPage from "./pages/NoPage/Nopage";
import Kitsbazaar from "./pages/Kitsbazaarpage/Kitsbazaar";
import Premierleaguekits from "./pages/Premierleaguekits/Premierleaguekits";
import Mycart from "./pages/Mycartpage/Mycart";
import Order from "./pages/Orderpage/Order";
import Paymentpage from "./pages/Paymentpage/Paymentpage";
import Thankyou from "./pages/Thankyoupage/Thankyou";
import Polls from "./pages/Pollspage/Polls";
import Laliga from "./pages/Laligapage/Laliga";
import Italian from "./pages/Italianpage/Italian";
import German from "./pages/Germanpage/German";
import French from "./pages/Frenchpage/French";
import Nigerian from "./pages/Nigerianpage/Nigerian";
import National from "./pages/Nationalpage/National";
import Otherkits from "./pages/Otherkitspage/Otherkits";
import Livescore from "./pages/Livescorepage/Livescore";
import Profile from "./pages/Profilepage/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/messi" element={<Messi />} />
          <Route path="/kitsbazaar" element={<Kitsbazaar />} />
          <Route path="/mycart" element={<Mycart />} />
          <Route path="/premierleaguekits" element={<Premierleaguekits />} />
          <Route path="/order" element={<Order />} />
          <Route path="/paymentpage" element={<Paymentpage />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/polls" element={<Polls />} />
          <Route path="/laliga" element={<Laliga />} />
          <Route path="/italian" element={<Italian />} />
          <Route path="/german" element={<German />} />
          <Route path="/french" element={<French />} />
          <Route path="/nigerian" element={<Nigerian />} />
          <Route path="/national" element={<National />} />
          <Route path="/otherkits" element={<Otherkits />} />
          <Route path="/livescore" element={<Livescore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
