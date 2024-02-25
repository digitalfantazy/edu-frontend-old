import { HashRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SingUpPage from "./pages/SingUpPage";
import SimsPage from "./pages/SimsPage";
import ProffesorPage from "./pages/ProffesorPage";
import StudentPage from "./pages/StudentPage";


import Header from "./components/header/Header";
import Catalog from "./components/catalog/Catalog";
import Intro from "./components/introBlock/Intro";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/*" element={<MainPage />} />
          <Route
            path="/:labId/*"
            element={
              <>
                <Intro />
                <Catalog />
              </>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/reg" element={<SingUpPage />} />
          <Route path="/sims-page" element={<SimsPage />} />

          <Route path="/proffesors" element={<ProffesorPage />} />
          <Route path="/student" element={<StudentPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
