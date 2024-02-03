import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlertComp from './components/AlertComp';
import BerandaPage from './pages/BerandaPage';
import NavbarComp from './components/NavbarComp';
import NotificationPage from './pages/NotificationPage';

function App() {
  return (
    <div className="App">
      <AlertComp />
      <BrowserRouter>
        {/* <HeaderComp /> */}
        <Routes>
            <Route path="/" element={<BerandaPage />} />
            <Route path="notification" element={<NotificationPage />} />
        </Routes>
      {/* <SummaryComp /> */}
      </BrowserRouter>
      <NavbarComp />
    </div>
  );
}

export default App;
