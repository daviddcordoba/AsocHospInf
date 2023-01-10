
import Inicio from './routes/Inicio';
import Contacto from './routes/Contacto';
import Nosotros from './routes/Nosotros';
import Proyectos from './routes/Proyectos';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes> 
        <Route path='/' element={<Inicio/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/' element={<Inicio/>}/>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
