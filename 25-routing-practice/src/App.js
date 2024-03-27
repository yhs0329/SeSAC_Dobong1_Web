import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import "./styles/styles.scss";
import MainPage from "./pages/MainPage";
import NewPage from "./pages/NewPage";
import NotFound from "./pages/NotFound";

// const MyLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:name" element={<NewPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
