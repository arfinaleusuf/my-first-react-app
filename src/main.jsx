import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './components/Welcome.jsx'
import Greetings from './components/Greetings.jsx'
import ProductCart from './components/ProductCart.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Welcome></Welcome> */}
    <Welcome></Welcome>
    <Welcome />
    <Greetings greet={"Good Morning"} name={"Phitron"} isLogedIn ={true}/>
    {5>4 && <Greetings greet={"Good Evening"} name={"Meta"} isLogedIn ={true} specialMessege={"somethong"}/>}
    <ProductCart title={"leptop"} price={45000} isStock={true}/>
    <ProductCart title={"Phone"} price={25000} isStock={false}/>
  </StrictMode>,
)