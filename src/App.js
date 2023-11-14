import './App.css';

import Accordion from './components/accordion';
import Button from './components/button';
import HotelCard from './components/cards/hotelCard';
import InputWithLabel from './components/input/inputWithLabel';
import NumberInput from './components/input/phoneNumberInput';
import Faq from './containers/faq';
import Footer from './containers/footer';

function App() {
  return (
    <div className='allWrapper'>
      <InputWithLabel
                placeholder="example@example.com"
                label="Email"
                type="email"
                name="email"
               
              
              />
              <InputWithLabel
                placeholder="example@example.com"
                label="Email"
                type="email"
                name="email"
              
              />
              <NumberInput
                placeholder="Phone number"
                label="Phone Number"
                name="phone"
                type="number"
                
              />
      <Faq/>
      <Button
      title ='book now'
      secondary/>
      <HotelCard/>
      
      
    </div>
  );
}

export default App;
