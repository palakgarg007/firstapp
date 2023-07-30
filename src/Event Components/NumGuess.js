function NumGuess(){
    const handleClick = () => {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('Type a number');
        alert(`Computer guess: ${randomNum}, Your guess: ${userInput}`);
    };

    return(
        <div>
            <h1>Guess the number between 1 and 3.</h1>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
};

export default NumGuess;