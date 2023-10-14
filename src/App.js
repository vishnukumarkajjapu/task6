import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import IntroPage from "./components/introPage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black h-auto font-mono">
      <Nav />
      <IntroPage />
      <About />
      <Contact />
    </div>
  );
}

export default App;
