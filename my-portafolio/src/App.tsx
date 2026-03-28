import Navbar from './component/layout/navbar/navbar';
import Footer from './component/layout/footer/footer';
import Landing from './section/landing/landing';
import About from './section/about/about';
import Mission from './section/mission/mission';
import Project from './section/project/project';
import Visition from './section/visition/vistion';
import Contact from './section/contact/contact';

function App() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Navbar />
      <Landing />
      <About />
      <Mission />
      <Visition />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
