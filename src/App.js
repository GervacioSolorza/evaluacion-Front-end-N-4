import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddContactPage from './components/AddContactPage';
import Header from './components/Header';
import Lista from './components/Lista'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/agregar" element={<AddContactPage />} />
        <Route path="/" element={<Lista />} />
      </Routes>
    </Router>
  );
}

export default App;
