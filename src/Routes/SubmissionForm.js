// Detail Route Path for showing detail information of an specific Hackathon

import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom"
import Navbar from "./components/Navbar";
import "./Styles/SubmissionForm.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


// Form control component from react bootstrap form component
function FormForSubmission({ type, typeLabel, placeholder, setState, value}) {
    return (
        <>
            <Form.Label htmlFor="inputPassword5">{typeLabel}</Form.Label>
            <Form.Control
                type={type}
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder = {placeholder}
                onChange={(e)=>{setState(e.target.value)}}
                value = {value}
            />
        </>
    )
}

// Main Component for export 
function SubmissionForm() {
    // Setting state for every inputs 
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [description, setDescription] = useState("");
    const [hackathonName, setHackathonName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [githubRepo, setGithubRepo] = useState("");
    const [otherLink, setOtherLink] = useState("");
    const navigate = useNavigate();


    // Using useEffect() Component
    useEffect(()=>{
        SetInputs();
    }, []);

    // SetInputs function if purpose is edit then copy all the Hackathon selected index into inputs
    function SetInputs(){
        if (sessionStorage.getItem("purpose")==="edit"){
            const Hackathons = JSON.parse(localStorage.getItem("Hackathons"));
            const editOne = Hackathons[Number(sessionStorage.getItem("editHackathonIndex"))];
            console.log(editOne.title);
            setTitle(editOne.title);
            setSummary(editOne.summary);
            setDescription(editOne.description);
            setHackathonName(editOne.hackathonName);
            setStartDate(editOne.hackathonStartDate);
            setEndDate(editOne.hackathonEndDate);
            setGithubRepo(editOne.githubLink);
            setOtherLink(editOne.otherLink);
        }
    }

    // Submit new Hackathon or edit Hackathons
    function SubmitHackathonInfo(){
        // If all field are empty
        if (!(title && summary && description && hackathonName && startDate && endDate && githubRepo)){
           return alert("All fields are required");
        }

        // Fetching main Hackathon key from localStorage
        const Hackathons = JSON.parse(localStorage.getItem("Hackathons"));

        // Checking if its not edit purpose
        if (sessionStorage.getItem("purpose")!=="edit"){
            const newHackathonSubmission = {
                title,
                summary, 
                description, 
                coverImageUrl: "figma",
                hackathonName, 
                hackathonStartDate: startDate, 
                hackathonEndDate: endDate, 
                githubLink: githubRepo,
                otherLink,
                favourite: false
            }
            Hackathons.push(newHackathonSubmission);
            localStorage.setItem("Hackathons", JSON.stringify(Hackathons));
            localStorage.hackathonCount++;
        
        // for edit purpose
        }else{
            const edithackathon = Hackathons[Number(sessionStorage.getItem("editHackathonIndex"))]
            edithackathon.title = title;
            edithackathon.summary = summary;
            edithackathon.description = description ;
            edithackathon.hackathonName = hackathonName;
            edithackathon.hackathonStartDate = startDate;
            edithackathon.hackathonEndDate = endDate;
            edithackathon.githubLink = githubRepo;
            edithackathon.otherLink = otherLink;

            Hackathons[Number(sessionStorage.getItem("editHackathonIndex"))] = edithackathon;
            localStorage.setItem("Hackathons", JSON.stringify(Hackathons));
        }
        // Navigate to the main page Home
        navigate("/");   
        
    }   

    return (
        <>
            <Navbar />
            <div className="submission-form">
                <h1 className="submission-form-heading">New Hackathon Submission</h1>
                <div className="inputField">
                    <FormForSubmission type="text" typeLabel="Title" 
                        placeholder = "Title of your submission"
                        setState = {setTitle}
                        value = {title}
                    />
                </div>
                <div className="inputField">
                    <FormForSubmission type="text" typeLabel="Summary" 
                        placeholder = "A short summary of your submission (this will be visible with your submission"
                        setState = {setSummary}
                        value = {summary}
                    />
                </div>
                <div className="inputField">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} 
                        placeholder = "Write a long description of your project. You can describe your  idea and approach here"
                        onChange = {(e)=> setDescription(e.target.value)}
                        value = {description}
                    />
                </div>
                <div className="inputField">
                    <FormForSubmission type="file" typeLabel="Cover Image" />
                </div>
                <div className="inputField">
                    <FormForSubmission type="text" typeLabel="Hackathon Name" 
                        placeholder ="Enter the name of the hackathon"
                        setState = {setHackathonName}
                        value = {hackathonName}
                    />
                </div>
                <div className="inputField">
                    <div className="submission-datefield">
                        <div>
                            <FormForSubmission type="date" typeLabel="Hackathon Start Date" 
                                placeholder = "Select start date"
                                setState = {setStartDate}
                                value = {startDate}
                            />
                        </div>
                        <div>
                            <FormForSubmission type="date" typeLabel="Hackathon End Date" 
                                placeholder = "Select end date"
                                setState = {setEndDate}
                                value = {endDate}
                            />
                        </div>
                    </div>
                </div>
                <div className="inputField">
                    <FormForSubmission type="text" typeLabel="Github Repository" 
                        placeholder = "Enter your submission's public Github repository link"
                        setState = {setGithubRepo}
                        value = {githubRepo}
                    />
                </div>
                <div className="inputField">
                    <FormForSubmission type="text" typeLabel="Other Links" 
                        placeholder = "You can upload a video demon or URL of your demo app here"
                        setState = {setOtherLink}
                        value = {otherLink}
                    />
                </div>
                <div className="inputField">
                    <div className="submit-btn">
                    <Button variant="success" onClick = {()=>SubmitHackathonInfo()}>Upload Submission</Button>
                    </div>
                </div>
            </div>
            
        </>

    )
}

// Exporting Submission form
export default SubmissionForm;