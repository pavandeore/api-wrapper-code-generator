import React from "react";
import Header from "./Components/Header";
import InputBox from "./Components/InputBox";
import OutputBox from "./Components/OutputBox";
import Selector from "./Components/Selector";
import {Helmet} from "react-helmet";

import {
  RecoilRoot
} from 'recoil';


const App = () => {

  return (
    <RecoilRoot>
      <Helmet>
          <meta charSet="utf-8" />
          <title>API wrapper code creator</title>
          <meta name="description" content="API wrapper code creator using gemini-pro AI model" />
          <meta name="keywords" content="API, code generation, gemini-pro, AI code generator, pawan deore" />
          <meta name="author" content="Pawan Deore" />
      </Helmet>
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
