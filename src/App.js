import './App.css';
import Home from './Pages/Home/Home';
import Banner from './Pages/Banner/Banner';

function App() {
  return (
  <div>
  <div className="bg">
      <Home></Home>
      </div>
    <div className=" mx-auto bg">
    
      <p>Pizza mania</p>
      <Banner></Banner>
      </div>
      </div>
  );
}

export default App;
