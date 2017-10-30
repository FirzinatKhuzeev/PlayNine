import React from 'react';

const DoneFrame = (props) => {
    return (
        <div className="text-center">
            <h1>{props.doneStatus}</h1>
            <button className="btn btn-secendary"
                onClick={props.resetGame}>
                Play Again
            </button>
        </div>
    );
};

export default DoneFrame;