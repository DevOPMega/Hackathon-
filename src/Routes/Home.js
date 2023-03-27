// Home Path Components 

// Importing Hooks, Component
import {useEffect, useState} from "react"; //Hooks
import './Styles/Home.css';
import Navbar from "./components/Navbar";
import HackathonSubmission from "./components/HackathonSubmission";
import Submissions  from './components/Submissions';
import AllSubmission from "./components/AllSubmission";
import FavoriteSubmission from "./components/FavouriteSubmission";

// Home Component 
function Home() {
  // useState hooks
  const [favouriteSubmission, setFavouriteSubmission] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hackathonCopy, setHackathonCopy] = useState(updateHackathonLocalStorage());
  const [hackathons, setHackathons] = useState(hackathonCopy);

  // Using useEffect 
  useEffect(()=>{
    hackathonSearch();
  }, [])

  // Taking out predefined Hackathons from local storage and return in hackathonCopy state hooks
  function updateHackathonLocalStorage(){
    return JSON.parse(localStorage.getItem("Hackathons"));
  }

  // Search in hackathons 
  function hackathonSearch(){
    setHackathons(hackathonCopy.filter((e)=>{
      let searhItem = new RegExp(searchTerm);
      if (searhItem.test(e.title)){
        return e;
      }
    }));
  }

  // Returning 
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      {/* Hackathon Uploading Container */}
      <HackathonSubmission />
      {/* Showing All Submission and Favourite Submission, Searching Hackathons */}
      <Submissions setSearchTerm = {setSearchTerm} hackathonSearch={hackathonSearch} setFavouriteSubmission={setFavouriteSubmission}/>
      {/* Set according to FavouriteSubmission state (False: show AllSubmission, true: show FavouriteSubmission) */}
      {favouriteSubmission ?<FavoriteSubmission hackathons={hackathons}/>:<AllSubmission hackathons={hackathons}/>}
      <div>{searchTerm}</div>
    </>
  );
}

// Exporting Home Component
export default Home;
