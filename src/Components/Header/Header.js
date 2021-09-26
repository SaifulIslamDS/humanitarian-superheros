import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        //Header Component
        <header id = "header">
            <section className="header-container">
                <div className="container">
                    <h1 className="display-3 site-title">International Fundraising Campaign!</h1>
                    <h2 className="subtitle">Collecting funds to eliminate word's hunger </h2>
                    <h2 className="subtitle">from The 9 Richest Person in the World!!</h2>
                    <h1 className="display-4 subtitle">Total Target Fund: 1000 Million!!!</h1>
                </div>
            </section>
        </header>
    );
};

export default Header;