import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificationPage from './pages/NotificationPage';
import AlertComp from './components/AlertComp';
import HeaderComp from './components/HeaderComp';
import SummaryComp from './components/SummaryComp';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AlertComp />
        <HeaderComp />
        <SummaryComp />
        <NavbarComp />
        <Routes>
          <Route>
            <Route path="/" element={<App />} />
            <Route path="/notification" element={<NotificationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
