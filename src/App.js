import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/reduxStore';
import FiltersContainer from './Components/Filters/FiltersContainer';
import MainBlockContainer from './Components/MainBlock/MainBlockContainer';

function App() {
  return (
    <div className={"wrapper"}>
      <Provider store={store}>
        <FiltersContainer />
        <MainBlockContainer />
      </Provider>
    </div>
  );
}

export default App;
