import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GlobalStyles from "./GlobalStyles";


function App() {
  return (
    <>
      <GlobalStyles/>
      
      <Routes>
        <Route path="/" element={<Layout/>} />
      </Routes>
    </>
  );
}

export default App;
