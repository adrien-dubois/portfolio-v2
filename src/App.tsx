import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portfolio/Portfolio";
import GlobalStyles from "./GlobalStyles";
import CustomSwitch from "./utils/CustomSwitch/CustomSwitch";


function App() {

  return (
    <>
      <GlobalStyles/>
      
      <CustomSwitch>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="projects" element={<Portfolio/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </CustomSwitch>
    </>
  );
}

export default App;
