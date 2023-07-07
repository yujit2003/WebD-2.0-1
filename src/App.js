import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
