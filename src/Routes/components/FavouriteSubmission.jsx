import Cards from "./Cards";


function FavoriteSubmission({hackathons}){
    // return only those hackathons which are favourite ones
    const favOneHackathon = hackathons.filter((e)=>{
        if (e.favourite){
            return e;
        }
    });
    return (
        <Cards hackathons={favOneHackathon} />
    )
}

export default FavoriteSubmission;