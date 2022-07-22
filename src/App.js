import "./App.css";
import Navbar from "./Components/Navbar";

import { SideMenu } from "./Components/SideMenu";
import NavbarRoutes from "./Routes/NavbarRoutes";
// import AddToCartPage from './Components/AddToCartPage';
import STshirt from './Pages/STshirt'
// import MenLandingPage from "./Pages/MenLandingPage";

function App() {
  return (
    <div className="App">
      {/* <SideMenu /> */}
      <Navbar/>
      <NavbarRoutes />
      {/* <AddToCartPage /> */}
      {/* <STshirt/> */}
    </div>
  );
}

export default App;
