import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer.jsx";
import Home from './pages/Home.jsx';


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
