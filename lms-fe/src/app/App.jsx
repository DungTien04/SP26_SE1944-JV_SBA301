import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import PublicHomePage from "../features/public-site/pages/PublicHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<PublicHomePage />}></Route>
      </Routes>
    </BrowserRouter>

    //  <PublicHomePage />
  );
}

export default App;
