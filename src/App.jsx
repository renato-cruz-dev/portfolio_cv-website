import {useState} from 'react'
import data from "./data.json";
import './App.css'

import Header from "./components/header/Header"
import MainSection from './components/main_section/MainSection';

function App() {
  const [navFilter, setNavFilter] = useState("all");

  return (
    <div className='app'>
      <Header filter={navFilter} setFilter={setNavFilter} />
      <MainSection filter={navFilter} data={data} />
    </div>
  )
}

export default App
