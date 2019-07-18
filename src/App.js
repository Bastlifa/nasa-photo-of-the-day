import React, { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
import "./App.scss";
import axios from 'axios'

import Media from './components/Media/Media'
// import { Container } from 'semantic-ui-react'
import HeaderSection from './components/HeaderSection/HeaderSection';
import Button from './components/Button/Button'

function App() {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`

  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  // const apiKey = "DEMO_KEY"

  const [date, setDate] = useState(today)
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
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span className="App-logo" role="img" aria-label="what?">🚀</span>!
      </p> */}
      
      <HeaderSection date={date} setDate={setDate} today={today}/>
      <div className={`media-container`}>
        <Button 
          date={date}
          setDate={setDate}
          textContent={`<`}
        />
        <Media 
          key={mediaURL} 
          mediaURL={mediaURL} 
          mediaType={mediaType} 
          mediaTitle={mediaTitle} 
          mediaP={mediaP}
          today={today}
        />
        <Button 
          date={date}
          setDate={setDate}
          textContent={`>`}
        />
      </div>
      
    </div>
  );
}

export default App;
