import React, { useState, useEffect } from 'react'
import "./App.scss";
import axios from 'axios'

import Header from './components/Header/Header'
import Media from './components/Media/Media'
// const dotEnv = require("dotenv");
// dotEnv.config();

function App() {

  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  // const apiKey = "DEMO_KEY"

  // const [copyRight, setCopyRight] = useState('')
  const [date, setDate] = useState('2019-07-15')
  const [mediaTitle, setMediaTitle] = useState('')
  const [mediaType, setMediaType] = useState('image')
  const [mediaURL, setMediaURL] = useState('')
  const [mediaP, setMediaP] = useState('')
  useEffect( _ => 
    {
      
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
      .then(response => 
      {
        // console.log(response)
        setMediaURL(response.data.url)
        setMediaType(response.data.media_type)
        setMediaTitle(response.data.title)
        setMediaP(response.data.explanation)
      })
      .catch(err => console.log(err))
    }, [mediaURL, date, apiKey, mediaP])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span className="App-logo" role="img" aria-label="what?">🚀</span>!
      </p>
      <Header date={date} setDate={setDate}/>
      <Media 
        key={mediaURL} 
        mediaURL={mediaURL} 
        mediaType={mediaType} 
        mediaTitle={mediaTitle} 
        mediaP={mediaP}
      />
    </div>
  );
}

export default App;
