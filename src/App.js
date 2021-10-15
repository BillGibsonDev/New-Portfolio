
// styles
import GlobalStyles from "./GlobalStyles";

// components
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// pages
import HomePage from "./pages/HomePage";
import ProjectPage from './pages/ProjectPage';

// router
import { HashRouter, Switch , Route } from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
          <Nav />
          <Switch>

          <Route path={'/'} exact>
                <HomePage />
              </Route> 

              <Route path={["/project/:projectTitle/:id", "/"]}>
                <ProjectPage />
              </Route>
          </Switch>
          <Footer />
      </HashRouter>
    </>
  );
}

export default App;
