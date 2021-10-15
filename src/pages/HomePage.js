// sections
import About from '../sections/About';
import Contact from '../sections/Contact';
import Skills from "../sections/Skills";
import Landing from "../sections/Landing";
import Projects from '../sections/Projects';


export default function HomePage() {
    return (
        <>
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}
