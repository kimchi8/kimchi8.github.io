import Navbar from "./components/navbar";
import ConnectBar from "./components/connectBar";
import WelcomeMessage from "./components/welcomeMessage";
import About from "./sections/about";
import Work from "./sections/work";
import MobileNavBar from "./components/mobileNavBar";

function App() {
    return (
        <div className="App">
            {/* <MobileNavBar /> */}
            <Navbar />
            <ConnectBar />
            <WelcomeMessage />
            <About />
            <Work />
        </div>
    );
}

export default App;
