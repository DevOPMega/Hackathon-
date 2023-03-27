const loremIpsum = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
 Neque, quam iste veniam doloribus eius ad cum maiores a impedit. 
Esse perspiciatis quas accusantium reiciendis veniam! Sequi recusandae ab est exercitationem.
Lorem, ipsum dolor sit amet consectetur adipisicing elit.
 Neque, quam iste veniam doloribus eius ad cum maiores a impedit. 
Esse perspiciatis quas accusantium reiciendis veniam! Sequi recusandae ab est exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Neque, quam iste veniam doloribus eius ad cum maiores a impedit. 
Esse perspiciatis quas accusantium reiciendis veniam! Sequi recusandae ab est exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Neque, quam iste veniam doloribus eius ad cum maiores a impedit. 
Esse perspiciatis quas accusantium reiciendis veniam! Sequi recusandae ab est exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Neque, quam iste veniam doloribus eius ad cum maiores a impedit. 
Esse perspiciatis quas accusantium reiciendis veniam! Sequi recusandae ab est exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Neque, quam iste veniam doloribus eius ad cum maiores a impedit. 
Esse perspiciatis quas accusantium reiciendis veniam! Sequi recusandae ab est exercitationem.`

const imageURL = ["InterviewMe", "lorem", "potter","pizza", "figma", "office"]

const Hackathons = [
    {
        title: "InterviewMe",
        summary: "Built with GPT-3, React and Flask. Practise interviews with AI and ace your next interview",
        description: loremIpsum,
        coverImageUrl: imageURL[0],
        hackathonName: "Prestige Interview Challenge",
        hackathonStartDate: "24 Feb 2023",
        hackathonEndDate: "24 Mar 2023",
        githubLink: "https://github.com",
        otherLink: "Boom",
        favourite: false
    },
    {
        title: "Lorem Ipsum",
        summary: "Lorem ipsum dolor ssit amet consectetur. Auctor nibh eleifend egestas livero tristeiuqoi",
        description: loremIpsum,
        coverImageUrl: imageURL[1],
        hackathonName: "Prestige Interview Challenge",
        hackathonStartDate: "24 Feb 2023",
        hackathonEndDate: "24 Mar 2023",
        githubLink: "Boom",
        otherLink: "Boom",
        favourite: false
    },
    {
        title: "Potter Ipsum",
        summary: "Lorem ipsum dolor ssit amet consectetur. Auctor nibh eleifend egestas livero tristeiuqoi",
        description: loremIpsum,
        coverImageUrl: imageURL[2],
        hackathonName: "Prestige Interview Challenge",
        hackathonStartDate: "24 Feb 2023",
        hackathonEndDate: "24 Mar 2023",
        githubLink: "Boom",
        otherLink: "Boom",
        favourite: false
    },
    {
        title: "Pizza Impsum",
        summary: "Lorem ipsum dolor ssit amet consectetur. Auctor nibh eleifend egestas livero tristeiuqoi",
        description: loremIpsum,
        coverImageUrl: imageURL[3],
        hackathonName: "Prestige Interview Challenge",
        hackathonStartDate: "24 Feb 2023",
        hackathonEndDate: "24 Mar 2023",
        githubLink: "Boom",
        otherLink: "Boom",
        favourite: false
    },
    {
        title: "Figma Ipsum",
        summary: "Lorem ipsum dolor ssit amet consectetur. Auctor nibh eleifend egestas livero tristeiuqoi",
        description: loremIpsum,
        coverImageUrl: imageURL[4],
        hackathonName: "Prestige Interview Challenge",
        hackathonStartDate: "24 Feb 2023",
        hackathonEndDate: "24 Mar 2023",
        githubLink: "Boom",
        otherLink: "Boom",
        favourite: false
    },
    {
        title: "Office Ipmsum",
        summary: "Lorem ipsum dolor ssit amet consectetur. Auctor nibh eleifend egestas livero tristeiuqoi",
        description: loremIpsum,
        coverImageUrl: imageURL[5],
        hackathonName: "Prestige Interview Challenge",
        hackathonStartDate: "24 Feb 2023",
        hackathonEndDate: "24 Mar 2023",
        githubLink: "Boom",
        otherLink: "Boom",
        favourite: false
    }
]

// Puting this pre defined hackaathon submission on localStorage
function PutOnLocalStorage(){
    if (localStorage.hackathonCount===undefined){
        // hackathonCount key is store value 6 because pre defined hackathon are store in Local Storage
        localStorage.setItem("hackathonCount", 5);
        // Hackathons.forEach((obj, index)=>{
        //     const jsonObject = JSON.stringify(obj);
        //     localStorage.setItem(`data${index}`, jsonObject);
        // })
        localStorage.setItem("Hackathons", JSON.stringify(Hackathons));

    }
}

export default PutOnLocalStorage;