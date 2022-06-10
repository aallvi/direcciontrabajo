import React from 'react'

import { Provider } from "react-redux";
import { Homescreen } from './screens/Homescreen';
import store from './store'

import './styles/styles.scss'


function App() {

 


  return (
    <Provider store={store} >

    <Homescreen/>

    </Provider>

  );
}

export default App;
