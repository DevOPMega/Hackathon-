// Detail route -> ("/detail") of application

// Importing modules, hooks, styles and component
import Navbar from "./components/Navbar";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Styles/Detail.css";

// Detail Route Component 
function Details({ hackathonTitle }) {
    const location = useLocation();
    const navigate = useNavigate();
    // Favourite state 
    const [favourite, setFavourite] = useState(location.state.e.favourite);
    
    // Make hackathon favourite one
    const selectFav = ()=>{
        setFavourite(favourite?false:true);
        location.state.e.favourite = !favourite;
        console.log(location.state.e.favourite);
        const Hackathons = JSON.parse(localStorage.getItem("Hackathons"));
        Hackathons[location.state.index] = location.state.e;
        localStorage.setItem("Hackathons", JSON.stringify(Hackathons));
    }

    // Edit hackathon 
    const editHackathon = () => {
        sessionStorage.setItem("purpose", "edit");
        sessionStorage.setItem("editHackathonIndex", location.state.index);
        navigate("/uploadhackathon");
    }

    // Delete hackathon 
    const deleteHackathon = () => {
        const Hackathons = JSON.parse(localStorage.getItem("Hackathons"));
        const hackathons = Hackathons.filter((hackathon, i)=>{
            if (i!==location.state.index){
                return hackathon;
            }
        })
        localStorage.setItem("Hackathons", JSON.stringify(hackathons));
        navigate("/");
    }

    return (
        <div className="detail">
            {/* Navigation Bar  */}
            <Navbar />
            {/* Hackathon detail head container */}
            <div className="hackathon-detail-head-container">
                {/* Left side of container  */}
                <div className="hackathon-detail-left">
                    <div className="hackathon-detail-upper">
                        <div>
                            <img src={`./images/${location.state.e.coverImageUrl}.png`} />
                        </div>
                        <div>
                            <h1>{location.state.e.title}</h1>
                        </div>
                    </div>
                    <div className="hackathon-detail-middle">
                        <p>{location.state.e.summary}</p>
                    </div>
                    <div className="hackathon-detail-lower">
                        <div className="favourite" onClick={() => selectFav()}>
                            {
                                favourite ? <span>&#9733;</span> : <span>&#9734;</span>
                            }
                        </div>
                        <div className="line">
                            <span></span>
                        </div>
                        <div className="date">
                            <span class="material-symbols-outlined">
                                calendar_month
                            </span>
                            <span>12 March</span>
                        </div>
                    </div>
                </div>
                {/* Right side of container  */}
                <div className="delete-edit-flex">
                    <Button variant="outline-light" onClick={()=>editHackathon()} >
                        <span class="material-symbols-outlined">
                            edit
                        </span>
                        Edit
                    </Button>
                    <Button variant="outline-light" onClick = {()=>deleteHackathon()}>
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                        Delete
                    </Button>
                </div>
            </div>

            {/* Description  and date, links of hackathon repository*/}
            <div className="hackathon-detail-description">
                {/* Description  of hackathon*/}
                <div className="description">
                    <h2>Description</h2>
                    <p>
                        {location.state.e.description}
                    </p>
                </div>

                {/* Links, Date and Hackathon Name  */}
                <div className="hackathon-detail-date-link">
                    <h3 className="hackathon">
                        Hackathon
                    </h3>
                    {/* Hackathon Name  */}
                    <h3 className="hackathon-name">
                        {location.state.e.hackathonName}
                    </h3>
                    {/* Hackathon Start and End date  */}
                    <p className="hackathon-end-start">
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                        {location.state.hackathonStartDate}
                            &nbsp;-&nbsp;
                        {location.state.e.hackathonEndDate}
                    </p>
                    {/* Link for github repository */}
                    <Button variant="outline-dark" onClick={()=>window.location.assign(location.state.e.githubLink)}>Github Link</Button><br />
                    {/* Link for other link  */}
                    <Button variant="outline-dark" onClick={()=>window.location.assign(location.state.e.otherLink)}>Other Link</Button>
                            
                </div>

            </div>
        </div>
    )
}

// exporting the Details Component
export default Details;