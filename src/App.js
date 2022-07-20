import './App.css';
import AddToCartMiddleSection from './Components/AddToCartMiddleSection';
import AddToCartTopSection from './Components/AddToCartTopSection';
import CartNavbar from './Components/CartNavbar';


function App() {
  return (
    <div className="App">
      <CartNavbar />
      <AddToCartTopSection />
      <AddToCartMiddleSection />
    </div>
  );
}

export default App;
