import './App.css';
import  {SideMenu} from './Components/SideMenu';

import NavbarRoutes from './Routes/NavbarRoutes';
import AddToCartPage from './Components/AddToCartPage';



function App() {
  return (
    <div className="App">
     <SideMenu/>
     <NavbarRoutes/>
      <AddToCartPage />

    </div>
  );
}

export default App;
