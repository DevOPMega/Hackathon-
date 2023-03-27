import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';


function SelectBasicExample() {
  return (
    <Form.Select id="sort-option" aria-label="Sort the submissions">
      <option value="1">Oldest</option>
      <option value="2">Newest</option>
    </Form.Select>
  );
}

// Submission Component 
function Submissions({setSearchTerm, hackathonSearch, setFavouriteSubmission}) {
    const [posLine, setPosLine] = useState(-34);

    const onChangeInput = (e)=>{
        setSearchTerm(e.target.value);
        hackathonSearch();
    }

    const changeSubmission  = (bool)=> {
        setFavouriteSubmission(bool);
        if (bool){
            setPosLine(150);
        }else{
            setPosLine(-34)
        }
    }

    return (
        <div className="submissions">
            <div className="submission-line" style={{transform: `translateX(${posLine}px)`}}></div>
            <div className="submissions-left">
                <div className="all-submissions" onClick={()=>{changeSubmission(false)}} >
                    <span>All Submissions</span>
                </div>
                <div className="favourite-submissions" onClick={()=>{changeSubmission(true)}} >
                    <span>Favourite Submissions</span>
                </div>
            </div>
            <div className="submissions-right">
                <div className="submission-search">
                    <div>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" 
                            onChange={(e)=> onChangeInput(e)}
                        />
                    </div>
                    
                </div>
                <div className="submission-filter">
                    <SelectBasicExample />
                </div>
            </div>
        </div>
    )
}

export default Submissions;