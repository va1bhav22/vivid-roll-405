import "./App.css";
import Navbar from "./Components/Navbar";

import { SideMenu } from "./Components/SideMenu";
import NavbarRoutes from "./Routes/NavbarRoutes";
// import AddToCartPage from './Components/AddToCartPage';

// import MenLandingPage from "./Pages/MenLandingPage";

function App() {
  return (
    <div className="App">
      {/* <SideMenu /> */}
      <Navbar/>
      <NavbarRoutes />
      {/* <AddToCartPage /> */}
    </div>
  );
}

export default App;
