import Card from '../Card/Card';
import Board from '../Board/Board';
import "./Main.css";
import { useEffect, useState } from 'react';

const Main = () => {
    // Main component
    // Storing cards in cards state
    const [cards, setCards] = useState([]);
    
    // Storing board in board state
    const [board, setBoard] = useState([]);
    
    // Adding event handler function of add to board button
    const handleAddToBoard = (card) => {
        // console.log(card);
        const newBoard = [...board, card ];
        setBoard(newBoard);
    }; 
    
    //use effects to load data 
    useEffect(() => {
        fetch("/superHeros.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, []); 

    return (
        <main id = "main">
            <div className="container main-container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {
                                //loop through cards with map method
                                cards.map(card => <Card 
                                    key={card.key} 
                                    card={card}
                                    handleAddToBoard={handleAddToBoard}
                                    />)
                            }
                        </div>
                    </div>
                    <div className="col-3 mt-4">
                        {/* display board  */}
                        <Board board={board} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;