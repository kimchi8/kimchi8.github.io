import Navbar from "./components/navbar";
import ConnectBar from "./components/connectBar";
import WelcomeMessage from "./components/welcomeMessage";
import About from "./sections/about";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ConnectBar />
            <WelcomeMessage />
            <About />
        </div>
    );
}

export default App;
