// styles
import GlobalStyles from "./GlobalStyles";

// components
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// pages
import HomePage from "./pages/HomePage";
import ProjectPage from './pages/ProjectPage';
import BlogPage from "./pages/BlogPage";
import PostPage from './pages/PostPage';
import FilteredPage from './pages/FilteredPage';

// router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
        <Routes>
          <Route path='/' exact element={<HomePage />} /> 
          <Route path='/blog' element={<BlogPage />} /> 
          <Route path="/blog/post/:postId" element={<PostPage />} />
          <Route path="/blog/:tag" element={<FilteredPage />} />
          <Route path="/project/:linkTitle/:id" element={<ProjectPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
