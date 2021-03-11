import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterComponent from './router.component';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
