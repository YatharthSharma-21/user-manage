import React from "react";

const Card = ({data}) => {
    return(
        <div className="card" style={{background:`url(https://image.tmdb.org/t/p/w500${data.poster_path})`}}>

        </div>
    )
}

export default Card;