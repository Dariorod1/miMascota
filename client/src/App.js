import logo from './logo.svg';
import './styles.css';
import Pacientes from './components/Pacientes'
import PacienteNuevo from './components/PacienteNuevo/PacienteNuevo';
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

/*Botones del NavBar*/ 
import Services from "./components/NavBar/pages/Services";
import Products from "./components/NavBar/pages/Products";
import ContactUs from "./components/NavBar/pages/ContactUS";
import SignUp from "./components/NavBar/pages/SignUp";
import Home from "./components/NavBar/pages/Home";
import Marketing from "./components/NavBar/pages/Marketing";
import Consulting from "./components/NavBar/pages/Consulting";
/**/ 
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/services" exact component={Services} />
        <Route path="/pacientes"  element={<Pacientes/>} />
        <Route path="/alta"  element={<PacienteNuevo/>} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/marketing" exact component={Marketing} />
        <Route path="/consulting" exact component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;
