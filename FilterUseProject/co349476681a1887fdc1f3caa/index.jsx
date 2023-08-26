import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

function HomePage() {
  const [showFilter,setShowFilter]=React.useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get("type"))
  
  const charEls = (showFilter)?showFilter
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
    )):swCharacters
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
    
    function handleSubmit(e,text){
      e.preventDefault();
      const showAfterFilter=swCharacters.filter((chr) => chr.type===text)
      setShowFilter(showAfterFilter)
    }
  
    function handleChange(){
      setShowFilter(swCharacters)
    }
    
  return (
    <main>
      <button onClick={(e) => handleSubmit(e,"Sith")}>Sith</button>
      <button onClick={(e) => handleSubmit(e,"Jedi")}>Jedi</button>
      <h2>Home</h2>
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