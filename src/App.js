import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailsFillingPage from "./Pages/DetailsFillingPage";
import SelectedIdChecking from "./Components/SelectedIdChecking";
import AboutUsPage from "./Pages/AboutUsPage";
import MyResumesPage from "./Pages/MyResumesPage";
import Navbar from "./Components/Common/Navbar";

function App() {
  const [mode1,setMode1] = useState('light');
  // const [switchActive,setSwitchActive] = useState('');
  // const [btnText,setBtnText] = useState('text-dark');

  const togglemode = () =>{
    if(mode1==='light'){
      setMode1('dark')
      // setBtnText('text-light')
      document.body.style.backgroundColor='#084298'
      document.body.style.color='#fff'
      
      //showAlert("Dark mode has been enabled","success")
      //document.title='TextUtils-DarkMode'
    }
    else{
      setMode1('light')
      // setBtnText('text-dark')
      document.body.style.backgroundColor='#fff'
      document.body.style.color='black'
      
      //showAlert("Light mode has been enabled","success")
      //document.title='TextUtils-Home'
    }
  }
  return (
    <Router>
      <Navbar togglemode={togglemode} />
      <Routes>
        {/* Home Page Route */}
        <Route exact path="/" element={<HomePage />} />
        
        {/* Details Filling Page */}
        <Route
          exact
          path="/template/filldetails"      
          element={
            <SelectedIdChecking>
              <DetailsFillingPage />
            </SelectedIdChecking>
          }
        />
        
        {/* My Resumes Page */}                                               
        <Route exact path="/myresumes" element={<MyResumesPage />} />          
        
        {/* About Us Page */}
        <Route exact path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
