import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ContractsPage from './pages/ContractsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContractsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;