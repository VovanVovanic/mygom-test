import React from "react";
import { Dropdown } from "./components/Dropdown";
import { useValidator } from "./utils/hooks";

const App = () => {
  const data = [{ author: "stephen king", genre: "horror", book: "carrie" }, { author: "stephen king", genre: "horror", book: "It" }, { author: "stephen king", genre: "horror", book: "dark Tower" }, { author: "stephen king", genre: "horror", book: "The Regulators" }, { author: "robert mccamon", genre: "horror", book: "stinger" }, { author: "robert mccamon", genre: "horror", book: "cardinal black" }, { author: "clive barker", genre: "horror", book: "abarat" }, { author: "clive barker", genre: "horror", book: "imajica" }, { author: "isaac asimov", genre: "fantastic", book: "foundation" }, { author: "isaac asimov", genre: "fantastic", book: "nemesis" }, { author: "isaac asimov", genre: "fantastic", book: "the positronic man" }, { author: "james cory", genre: "fantastic", book: "calibans war" }, { author: "james cory", genre: "fantastic", book: "nemesis games" }, { author: "dan brown", genre: "detective", book: "inferno" }, { author: "dan brown", genre: "detective", book: "angels and demons" }, { author: "dan brown", genre: "detective", book: "the da vinci code" }, { author: "robert ludlum", genre: "detective", book: "the aquitaine progression" }, { author: "robert ludlum", genre: "detective", book: "the matlock paper" }]


  return (
    <div>
      <Dropdown data={data} theme ='book'/>
    </div>
  );
}

export default App;
