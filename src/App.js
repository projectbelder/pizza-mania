import './App.css';
import Banner from './Pages/Banner/Banner';
import Home from './Pages/Home/Home';
import Reservation from './Pages/Reservation/Reservation';
import Footer from './share/Footer/Footer';

function App() {
  return (
    <div>

      <div className=" mx-auto bg">
        <Banner></Banner>
      </div>

      <div className="bg">
        <Home></Home>
      </div>
      <div>
        <Reservation></Reservation>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
