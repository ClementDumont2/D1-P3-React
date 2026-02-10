import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ContractsPage from './pages/ContractsPage';
import ContractDetailPage from './pages/ContractDetailPage';
import ContractFormPage from './pages/contractForm/ContractCreateFormPage';
import ContractUpdateFormPage from './pages/contractForm/ContractUpdateFormPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contracts" element={<ContractsPage/>} />
        <Route path='/contracts/:id' element={<ContractDetailPage/>}/>
        <Route path='/contracts/create' element={<ContractFormPage/>}></Route>
        <Route path='/contracts/update/:id' element={<ContractUpdateFormPage/>}></Route>

        <Route path="*" element={<Navigate to="/contracts" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;