import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Cards({hackathons}) {
    const navigate = useNavigate();

    return (
        <div className="card-container">
            {
                hackathons.map((e, index) => (
                    <div className="card-element" key={index.toString()} onClick={()=>{navigate("/detail", {state: {e:e, index: index}})}}   >
                        <div className="card-upper">
                            <div className="card-img">
                                <img src={`./images/${e.coverImageUrl}.png`} alt="" />
                            </div>
                            <div className="card-heading">
                                <h2>{e.title}</h2>
                            </div>
                        </div>
                        <div className="card-description">
                            <p>{e.summary}</p>
                        </div>
                        <div className="card-date">
                            <p><i>Updated 28 days ago</i></p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards;