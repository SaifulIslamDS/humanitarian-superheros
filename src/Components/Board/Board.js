import React from 'react';
import "./Board.css";

const Board = (props) => {
    const {board}= props || {};
    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.donation;
    // const total=board.reduce(totalReducer,0);
    const total=board.reduce(  totalReducer   ,  0).toFixed(2);


    return (
        <div>
            <h2> <i className="fas fa-clipboard"></i> Fund Board</h2>
            <div className="card h-100">
            <div className="card-body">
                <h3 className="card-name">Package added: {board.length}</h3>
                <p>Total Donation: {total} M</p>
            </div>
            <div className="card-footer">
                <ol className="ordered-list">
                    {
                        board.map((item) => <li className="list-item">{item.name}, ${item.donation} M</li> )
                    }
                </ol>
            </div>
            </div>
        </div>
    );
};

export default Board;