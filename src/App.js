import React from 'react';

//Screens
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';
import Skills from './Screens/Skills';
import Portfolio from './Screens/Portfolio';
import Contact from './Screens/Contact';

// Components
import Appbar from './Components/Appbar';
import Footer from './Components/Footer';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {
  const [headerType, setHeaderType] = React.useState('static');

  const HomeRef = React.useRef(null);
  const AboutRef = React.useRef(null);
  const ServicesRef = React.useRef(null);
  const SkillsRef = React.useRef(null);
  // const PortfoliRef = React.useRef(null);
  const ContactRef = React.useRef(null);

  const executeScrollToHome = () => scrollToRef(HomeRef);
  const executeScrollToAbout = () => scrollToRef(AboutRef);
  const executeScrollToServices = () => scrollToRef(ServicesRef);
  const executeScrollToSkills = () => scrollToRef(SkillsRef);
  // const executeScrollToPortfolio = () => scrollToRef(PortfoliRef);
  const executeScrollToContact = () => scrollToRef(ContactRef);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > HomeRef.current.clientHeight) {
      setHeaderType('fixed');
    }

    if (window.pageYOffset < HomeRef.current.clientHeight) {
      setHeaderType('static');
    }
  }

  return (
    <div>
      <div ref={HomeRef}>
        <Home executeScrollToServices={executeScrollToServices} />
      </div>
      <Appbar
        executeScrollToHome={executeScrollToHome}
        executeScrollToAbout={executeScrollToAbout}
        executeScrollToServices={executeScrollToServices}
        executeScrollToSkills={executeScrollToSkills}
        // executeScrollToPortfolio={executeScrollToPortfolio}
        executeScrollToContact={executeScrollToContact}
        headerType={headerType}
      />
      <div style={{ height: 50 }} />
      <div ref={AboutRef}>
        <About />
      </div>
      <div style={{ height: 50 }} />
      <div ref={ServicesRef}>
        <Services />
      </div>
      <div style={{ height: 50 }} />
      <div ref={SkillsRef}>
        <Skills />
      </div>
      <div style={{ height: 50 }} />
      {/* <div ref={PortfoliRef}>
        <Portfolio />
      </div> */}
      <div style={{ height: 50 }} />
      <div ref={ContactRef}>
        <Contact />
      </div>
      <div style={{ height: 10 }} />
      <Footer />
    </div>
  );
}

export default App;
