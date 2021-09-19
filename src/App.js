import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useEffect} from 'react';
import Sort from './Sort';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCars, setCars } from './redux/actions/CarsAction';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const state = useSelector(state => state)

  return (
    <div className="App">
      <Sort items = {state.cars.items}/>
    </div>
  );
}

export default App;
