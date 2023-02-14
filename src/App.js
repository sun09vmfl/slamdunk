import Home from './pages/Home';
import Questions from './pages/Questions';
import Result from './pages/Result';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qustions" element={<Questions />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
