import './App.css';

import Accordion from './components/accordion';
import ActiveNav from './components/activeNav';
import Button from './components/button';
import HotelCard from './components/cards/hotelCard';
import InputWithLabel from './components/input/inputWithLabel';
import NumberInput from './components/input/phoneNumberInput';
import Faq from './containers/faq';
import Footer from './containers/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/header';
import MainBackground from './containers/mainBackground';
import LandingPageLayout from './containers/layouts/mainPage';
import AppRouter from './routes/appRouter';

function App() {
  return (
    
    
      <div className="app-container">
    
    <AppRouter />
    
    
        
      </div>
  
  );
}

export default App;
