import React from 'react';
import "./Board.css";

const Board = (props) => {
    const {board, handleRemoveFromBoard}= props || {};
    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.donation;
    // const total=board.reduce(totalReducer,0);
    const total=board.reduce(  totalReducer  ,  0).toFixed(2);
    
    return (
        <div>
            <h2> <i className="fas fa-clipboard"></i> Fund Board</h2>
            <div className="card h-100">
            <div className="card-body">
                <h4 className="card-name">Package added: {board.length}</h4>
                <h6>Total Donation: {total} M</h6>
            </div>
            <div className="card-footer">
                <div className="list">
                    {
                        board.map((item) => <div className="list-item d-flex">
                                <div>
                                    <img className="img-custom" src={item.img} alt="img"/>
                                </div>
                                <div className="item-meta d-flex">
                                    <div>
                                        <h6>{item.name}</h6> 
                                        <p>${item.donation} M</p>
                                    </div>
                                    <div>
                                        <button 
                                            className="ms-2" 
                                            onClick={() => handleRemoveFromBoard()}
                                        > X </button>
                                    </div>
                                </div>
                            </div> 
                            )
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Board;