import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Section from "./components/Section";
import carne1 from "./assets/carne1.png"
import carne2 from "./assets/carne2.png"
import carne3 from "./assets/carne3.png"

const products1 = [
    {
        img: carne1,
        nome: "Item 1",
        peso: 1,
        preco: 0,
        color:"#F00"
    },
    {
        img: carne2,
        nome: "Item 2",
        peso: 1,
        preco: 0,
        color:"#F00"
    },
    {
        img: carne3,
        nome: "Item 3",
        peso: 1,
        preco: 0,
        color:"#F00"
    }
]


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Section products={products1} title={"CLIENTE+"} type={"promo"} color={"#F00"}/>
    <Section products={products1} title={"OUTROS"} type={"sudável"} color={"#008000"}/>
  </StrictMode>,
)
