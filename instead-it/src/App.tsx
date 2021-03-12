import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterComponent from './components/router.component';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
