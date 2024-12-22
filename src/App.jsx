import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useMatch,
} from "react-router-dom";
import Home from "../src/pages/Home";
import PageNotFound from "../src/pages/PageNotFound";
import AboutMe from "../src/pages/AboutMe";
import Projects from "../src/pages/Projects";
import HeaderMenu from "../src/features/Header/HeaderMenu";

function App() {
  return (
    <Router>
      <HeaderMenuWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

function HeaderMenuWrapper() {
  const notFoundMatch = useMatch("*");
  return !notFoundMatch && <HeaderMenu />;
}

export default App;
