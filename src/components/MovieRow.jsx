import React from "react";
import './MovieRow.css';


function MovieRow({ title, items }) {
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-listArea">
                <div className="row-list">
                    {items.results.length > 0 && items.results.map((items, key) => (
                        <div key={key} className="row-item">
                        <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default MovieRow