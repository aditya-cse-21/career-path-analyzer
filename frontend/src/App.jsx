import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareerGoalInput from './pages/CareerGoalInput';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CareerGoalInput />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

