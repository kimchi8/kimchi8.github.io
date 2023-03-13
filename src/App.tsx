import Navbar from "./components/Navbar";
import ConnectBar from "./components/ConnectBar";
import WelcomeMessage from "./components/WelcomeMessage";
import About from "./sections/About";
import Work from "./sections/Work";
import CustomHamburgerMenu from "./components/CustomHamburgerMenu";

function App() {
    return (
        <div className="App">
            <CustomHamburgerMenu />
            <Navbar />
            <ConnectBar />
            <WelcomeMessage />
            <About />
            <Work />
        </div>
    );
}

export default App;
