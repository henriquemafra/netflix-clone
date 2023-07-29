import React, { useState } from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function MovieRow({ title, items }) {
    const [scrollX, setScrollX] = useState(-400);
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0;
        } setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(x)

    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>

            </div>
            <div className="row-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="row-listArea">
                <div className="row-list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
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