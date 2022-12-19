import './App.css';
import Banner from './Pages/Banner/Banner';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>

      <div className=" mx-auto bg">
        <Banner></Banner>
      </div>

      <div className="bg">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
