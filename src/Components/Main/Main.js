import Card from '../Card/Card';
import Board from '../Board/Board';
import { useEffect, useState } from 'react';

const Main = () => {
    const [cards, setCards] = useState([]);
    
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
                                cards.map(card => <Card key={card.key} card={card} />)
                            }
                        </div>
                    </div>
                    <div className="col-3">
                        <Board />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;