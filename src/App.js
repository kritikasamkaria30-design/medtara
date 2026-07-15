import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
