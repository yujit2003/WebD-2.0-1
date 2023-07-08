import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/home.jsx';


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
