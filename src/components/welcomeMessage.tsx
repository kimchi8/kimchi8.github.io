import kimchi from "../images/kimchi.png";
function WelcomeMessage() {
    return (
        <div id="welcome" className="grid grid-cols-6 mt-28">
            <div className="col-span-4 flex flex-col justify-center ml-[20vw]">
                <h1 className="text-6xl mb-10">Hello</h1>
                <h4 className="whitespace-pre-wrap text-3xl font-raleway font-bold">{`I'm Kim & I like to build \nwebsites`}</h4>
            </div>
            <img src={kimchi} className="col-span-2 w-4/6 ml-14" />
        </div>
    );
}

export default WelcomeMessage;
