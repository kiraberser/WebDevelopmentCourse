import '../css/App.css'; // Asegúrate de que la ruta sea correcta
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter como Router
import CreatePage from './CreatePage' // Importa desde la carpeta pages
import Home from './Home'; // Importa desde la carpeta pages
import Header from './Header'; // Importa Header desde la carpeta components
import Footer from './footer'; // Importa Footer desde la carpeta components

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Header />} />
          <Route path='/create-task' element={<CreatePage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

