import './App.css';
import Header from './Header';
import CharacterTable  from './CharacterTable';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const hash = "b4b5a72344f284a95293f19bba122cfa"


function App() {
  const[items, setItems] = useState([])
  const[isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async() => {
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=72583f87ea912e95ff10ee5722492b0c&hash=${hash}`)
      console.log(result.data.data.results)
      setItems(result.data.data.results)
      setLoading(false)

    }

    fetch()
  }, [])

  return (
    <div className="App">
      <Header />
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
