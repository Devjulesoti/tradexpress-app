import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import GetStarted from '../src/Pages/GetStarted'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import Business from "./Pages/Business";
import Instantsell from "./Pages/Instantsell";
import Login from "./Pages/Login";
import Instantbuy from "./Pages/Instantbuy";
import Verifymail from './Pages/Verifymail'

function App() {
  const [data, setData] = useState({ rates: [] });
  useEffect(() => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let fetched = await response.json();
      console.log(fetched);
      setData({ ...data, rates: fetched.data });
    };
    fetchData("https://api.coinlore.net/api/tickers/?start=0&limit=5");
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage rate = {data.rates} />} />
          <Route path="/getstarted" element={<GetStarted/>}/>
          <Route path="/instantbuy" element={<Instantbuy/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/instantsell" element={<Instantsell/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/verifymail" element={<Verifymail/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
