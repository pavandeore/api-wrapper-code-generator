import React from "react";
import Header from "./Components/Header";
import InputBox from "./Components/InputBox";
import OutputBox from "./Components/OutputBox";
import Selector from "./Components/Selector";

import {
  RecoilRoot
} from 'recoil';


const App = () => {

  return (
    <RecoilRoot>
    <div className="max-w-4xl mx-auto mt-5">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-x-5">
        <InputBox />
        <OutputBox />
      </div>
      <Selector />
    </div>
    </RecoilRoot>
  );
};

export default App;
