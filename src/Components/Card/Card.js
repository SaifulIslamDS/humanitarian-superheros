import React from 'react';
import "./Card.css";

const Card = (props) => {
    // destructuring properties  
    const {name, country, netWorth, age, company, donation, img} = props.card || {};
    // console.log(props.card);
    return (
        <div className="col-md-4 mt-4">
            <div className="card h-100 card-custom">
            <img src={img} className="card-img-top img-fluid img-circle" alt={"Photo of " +name}/>
            <div className="card-body">
                <h3 className="card-name">{name}</h3>
                <p className="card-info">Age: {age}</p>
                <p className="card-info">Compnay: {company}</p>
                <p className="card-info">Country: {country}</p>
                <p className="card-info">Net worth: ${netWorth} B</p>
                <p className="card-info">Donation: ${donation} M</p>
            </div>
            <div className="card-footer">
                <button
                    onClick={() => props.handleAddToBoard(props.card)}
                    className="btn btn-board">
                    <i className="fas fa-clipboard"></i> Add to board
                </button>
            </div>
            </div>
        </div>
    );
};

export default Card;