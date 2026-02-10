import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ContractsPage from './pages/ContractsPage';
import ContractDetailPage from './pages/ContractDetailPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contracts" element={<ContractsPage/>} />
        <Route path='/contracts/:id' element={<ContractDetailPage/>}/>

        <Route path="*" element={<Navigate to="/contracts" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;