import React from "react";
import { useHistory } from "react-router";


const Card = ({ data, index }) => {

    const history = useHistory();
    const Details = () => {
        if (index) {
            history.push(`/details/${index}`);
        }
    }
    return (
        <div className="card" onClick={() => { Details() }} style={{ background: `url(https://image.tmdb.org/t/p/w500${data.poster_path})` }}>

        </div>
    )
}

export default Card;