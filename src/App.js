import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import UseCityName from "./components/UseCityName";

const App = () => {

  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(res => {
      // console.log(res.coords.longitude);
      setLat(res.coords.latitude);
      setLon(res.coords.longitude);
    })
  }, [lon]);

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home lon={lon} lat={lat}/> } />
        <Route path='/name' element={ <UseCityName/> }/>
        
      </Routes>
    </>
  )
}

export default App;