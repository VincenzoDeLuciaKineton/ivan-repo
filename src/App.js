import './App.css';
import React from 'react'
import { ConfigProvider } from './models/ConfigContext'
import AppController from './controllers/app-controller'

function App() {

  return (
    <ConfigProvider>
      <AppController />
    </ConfigProvider>
  );
}

export default App;
