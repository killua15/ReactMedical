import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { createAppStore } from './components/States/Store/AppStore';
import { AppRouter } from './components/Routes/AppRoutes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import HomeComponent from './components/Home';
function App() {
  return (
    <div >
      <Provider store={createAppStore()}>
        <div >
          <AppRouter />
        </div>
      </Provider>
    </div>
  );
}

export default App;
