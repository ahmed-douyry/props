import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListeEtudiant } from './ListeEtudiant';
import { Modifier } from './Modifier';
import { Add } from './Ajouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListeEtudiant />} />
        <Route path='/modifier/:id' element={<Modifier />} />
        <Route path='/ajouter' element={<Add />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
