import './App.css';


 import  {SideMenu} from './Components/SideMenu'; 
 import NavbarRoutes from './Routes/NavbarRoutes';
// import AddToCartPage from './Components/AddToCartPage';

import MenLandingPage from './Pages/MenLandingPage';





function App() {
  return (
   
    <div className="App">

     <SideMenu/>
     <NavbarRoutes/>
      {/* <AddToCartPage /> */}


    
     <MenLandingPage/>
     


    </div>
   
  );
}

export default App;
