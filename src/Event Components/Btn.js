const captureClick = () => {
    console.log("Clicked")
}

const captureHover = () => console.log("Mouse Over")

function Btn(){
    return(
        <div>
            <div>
                <button onClick={captureClick}>
                    Click Me
                </button>
            </div>
            <div>
                <button onMouseOver={captureHover}>
                    Hover on me
                </button>
            </div>
        </div>
    );
};

export default Btn;