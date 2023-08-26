import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useSearchParams, NavLink } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  
  const displayedCharacters = typeFilter 
    ? swCharacters.filter(char => char.type.toLowerCase() === typeFilter)
    : swCharacters
  
  const charEls = displayedCharacters
    .map(char => (
      <div key={char.name}>
        <h3
          style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
        >
          Name: {char.name}
        </h3>
        <p>Type: {char.type}</p>
        <hr />
      </div>
    ))
    
    const activeStyle={
      fontWeight:"40px",
      textDecoration:"none",
      color:"black"
    }

  return (
    <main>
      <h2>Home</h2>
      <div>
        <NavLink 
        to="?type=sith" 
        style={({isActive}) => isActive?activeStyle:null} >Sith</NavLink>
        
        <NavLink 
        to="?type=jedi" 
        style={({isActive}) => isActive?activeStyle:null} >Jedi</NavLink>
        
        <NavLink 
        to="." 
        style={({isActive}) => isActive?activeStyle:null} >Remove Filter</NavLink>
      </div>
      <hr />
      {charEls}
    </main>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)