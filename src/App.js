import React, { useState , useEffect } from "react";
import "./App.css";
import axios from "axios";
import Photo from "./components/Photo";

function App() {
  const [photoData, setPhotoData] = useState([])
  
  useEffect(() => {
    axios.get(process.env.REACT_APP_URL).then((res) => setPhotoData(res.data));
  }, [])

  return <div className="gallery">
    {photoData.map((data) => {
      return (
        <Photo data = {data} />
      )
    })}
  </div>;
}

export default App;
