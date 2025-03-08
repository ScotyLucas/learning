
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import StyleCard from "./components/StyleCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";
import Prob from "./components/prob";
import ShoppingList from "./components/ShoppingList";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
import UseStateUseEffect from "./components/UseStateUseEffect";
import FetchDatauseEffect from "./components/FetchDatauseEffect";
import ComponentA from "./components/ComponentA";

import { createContext } from "react";
import ComponentB from "./components/ComponentB";
import Calculator from "./components/Calculator";

export const Anyu = createContext()
export const Anyu1 = createContext()
export const Anyu2 = createContext()
export const Anyu3 = createContext()

const App = () => {
// const name = "Máté";
// const age = 22;
// const year = 2003;
// const hobbi = "Reading";
return (
   <div>
{/* //     <Anyu2.Provider value={year}>
//     <Anyu1.Provider value={age}>
//     <Anyu.Provider value={name}>
//     <Anyu3.Provider value={hobbi}>
//     <ComponentA />
//     <ComponentB />
//     </Anyu3.Provider>
//     </Anyu.Provider>
//     </Anyu1.Provider>
//     </Anyu2.Provider> */}

    {/* <Header />

    <Main />

    <Footer />

    <StyleCard />

    <ProfileCard />

    <IconComponent />
    
    <Prob /> */}

    {/* <ShoppingList />

    <CopyInput />

    <Switcher />

    <UseStateUseEffect /> */}

    {/* <FetchDatauseEffect /> */}
    <Calculator />
  </div>

);

};

export default  App;
