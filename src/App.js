import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminStudents from './Layouts/adminstudents/Adminstudents';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/adminstudents' exact element={<AdminStudents />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App; 