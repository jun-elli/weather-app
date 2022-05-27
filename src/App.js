import './App.css';
import SideNav from './components/SideNav';
import Search from './components/Search';
import Today from './components/Today';
import FiveDays from './components/FiveDays';
import { useState } from 'react';

function App() {
  const [isToday, setIsToday] = useState(true);
  
  const handleSet = (boolean) => {
    setIsToday(boolean)
  };
  
  return (
    <div className="bg-light text-align">
      <SideNav isToday={isToday} setIsToday={handleSet} />
      <Search />
      <Today isToday={isToday} />
      <FiveDays isToday={isToday} />
    </div>
  );
}

export default App;
