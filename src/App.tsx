import Navbar from "./components/navbar";
import ConnectBar from "./components/connectBar";
import WelcomeMessage from "./components/welcomeMessage";
import About from "./sections/about";
import Work from "./sections/work";

function App() {
    return (
        <div className="App">
            hello this is a page test
            <Navbar />
            <ConnectBar />
            <WelcomeMessage />
            <About />
            <Work />
        </div>
    );
}

export default App;
