import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './components/Welcome.jsx'
import Greetings from './components/Greetings.jsx'
import Products from './components/Products.jsx'
import MoodTracker from './components/moodTracker.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Welcome></Welcome> */}
    <Welcome></Welcome>
    <Welcome />
    <Greetings greet={"Good Morning"} name={"Phitron"} isLogedIn ={true}/>
    {<Greetings 
    greet={"Good Evening"} 
    name={"Meta"} 
    isLogedIn ={true} 
    specialMessege={"somethong"}/>}

    <MoodTracker/>
    <Products />

  </StrictMode>,
) 