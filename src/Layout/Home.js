import Banner from "../components/Banner"
import Projects from "../components/Projects"
import About from "../components/About";
import News from "./News";
function Home() {
  return (
    <div>
      <Banner />
      <Projects />
      <About />
      <News />
    </div>
  );
}

export default Home;
