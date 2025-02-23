import './App.css';
import {ThemeProvider } from '@mui/material/styles'
import Theme from "../src/theme"

import { store } from './store'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../src/Components/nav"
import Stocks from "../src/Components/stocks"
import Home from "../src/Components/home"
import StockDetail from './Components/stockDetail';
import NotFound from './Components/notFound';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <div className="App">
        
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/stocks/:id" element={<StockDetail/>} />
            <Route path="*" element={<NotFound/>} /> {/* 404 Page */}
          </Routes>
        </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
