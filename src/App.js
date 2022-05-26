import './App.css';
import SideNav from './components/SideNav';
import Search from './components/Search';
import Today from './components/Today';
import FiveDays from './components/FiveDays';

function App() {
  return (
    <div className="bg-light text-align">
      <SideNav />
      <Search />
      <Today />
      <FiveDays />
    </div>
  );
}

export default App;
