import {useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

// Upload Submission Head 
function HackathonSubmission(){
    const navigate = useNavigate();

    const uploadSubmission = () => {
        sessionStorage.setItem("purpose", "upload");
        navigate("/uploadhackathon");
    }
    return (
        // Hackathon Submission 
        <div className="hackathon-submission">
            <div className="hackathon-submission-flex">
                {/* Left side */}
                <div className="hackathon-submission-flex-left">
                    <h1>Hackathon Submissions</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis maiores 
                        cumque consequuntur, sequi dolores distinctio. 
                        Quidem corporis voluptatum ut et vitae ipsa blanditiis, 
                        officia eos quod obcaecati architecto repellat expedita!
                    </p>
                    <div className="submitBtn">
                        <Button variant="success" onClick={()=>uploadSubmission()}>Upload Submission</Button>
                    </div>
                </div>
                {/* Right side  */}
                <div className="hackathon-submission-flex-right">
                    <Image fluid={true} src="./images/handholdingidea.png" />
                </div>
            </div>
        </div>  
    )
}

export default HackathonSubmission;