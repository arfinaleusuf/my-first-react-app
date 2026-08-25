import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './welcome.jsx'
import Greetings from './Greetings.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Welcome></Welcome> */}
    <Welcome></Welcome>
    <Welcome />
    <Greetings greet={"Good Morning"} name={"Phitron"}/>
    <Greetings greet={"Good Evening"} name={"Meta"}/>
  </StrictMode>,
)
