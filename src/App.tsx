import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import GlobalStyles from "./GlobalStyles";


function App() {
  return (
    <>
      <GlobalStyles/>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
