import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Navbar';
import HomeScreen from '../src/screen/HomeScreen';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <HomeScreen/>
    </div>
  );
}

export default App;
