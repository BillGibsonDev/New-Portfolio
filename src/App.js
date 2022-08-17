// styles
import GlobalStyles from "./GlobalStyles";

// components
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// pages
import HomePage from "./pages/HomePage";
import ProjectPage from './pages/ProjectPage';

// router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
        <Routes>
          <Route path='/' exact element={<HomePage />} /> 
          <Route path="/project/:linkTitle/:id" element={<ProjectPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
