import Header from './Header';
import Footer from './Footer'
import "../styles/index.css"
import Main from './Main';
import About from "./About"

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
