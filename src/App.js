import React from 'react';
import {Header} from "./components/Header";
import {VideoSlider} from "./components/VideoSlider";
import {Body1} from "./components/Body1";
import {Body2} from "./components/Body2";

import './App.css';


const App = () => {
  return (
    <>
            <Header />
            <VideoSlider /> 
            <Body1 />
            <Body2 />
        </>
  );
}

export default App;
