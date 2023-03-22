import React, { useState, useEffect } from "react";
import './index.css'
import Register from './components/register/index';
import Card from "./components/cards/cards";
import Axios from "axios";

function App() {
  const [listGames, setListGames] = useState();

  useEffect(()=>{
      Axios.get("http://localhost:4000/games").then((res)  => {
          setListGames(res.data)
      })
  })

  return (
    <div>
      <Register />
      {typeof listGames != "undefined" && 
        listGames.map((value) => {
          return (
            <Card 
              key={value.id}
              listCard={listGames}
              name={value.name}
              year={value.year}
              developedBy={value.developedBy}
              description={value.description}
              genre={value.genre}
              id={value.id}
            ></Card>
          )
      })}     
    </div>
  );
}

export default App;
