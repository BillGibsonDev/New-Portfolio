// sections
import About from '../sections/About';
import Contact from '../sections/Contact';
import Skills from "../sections/Skills";
import Landing from "../sections/Landing";
import Projects from '../sections/Projects';

// components
import HomeBackgroundImage from '../components/HomebackgroundImage';

export default function HomePage() {
    return (
        <>
            <HomeBackgroundImage/>
            <Landing />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </>
    )
}
