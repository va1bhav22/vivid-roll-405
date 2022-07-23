import './App.css';
import { SSideMenuFilter } from './Components/SSideMenuFilter';
import STshirt from './Pages/STshirt';
// import AddToCartPage from './Components/AddToCartPage';

import NavbarRoutes from './Routes/NavbarRoutes';


function App() {
  return (
    <div className="App">
       <NavbarRoutes/>
      {/* <SSideMenuFilter/>
      <STshirt/> */}
    </div>
  );
}

export default App;
