import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FirstPage from './pages/FirstPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;