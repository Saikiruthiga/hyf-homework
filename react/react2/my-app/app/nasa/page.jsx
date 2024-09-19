import React from "react";
const Nasa = async()=>{
    let data;
    try{
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
            data = await response.json();

        }
        catch(error){
            console.log("Error on fetching : ", error);
        }
  
    return(
        <div>
            <h1>{data.title}</h1>
            <img src={data.url} alt=""/>
            <p>{data.explanation}</p>
        </div>
    );
}

export default Nasa;