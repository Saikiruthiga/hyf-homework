"use client"
import { useSearchParams } from "next/navigation"
import { useState,useEffect } from "react"

const EpicImage = ()=>{
    const searchParams =useSearchParams();
    const [image,setImage] = useState(null);
    const date = searchParams.get('date');
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=DEMO_KEY`);
            const data = await response.json();
            const imageData = data[0];
            const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.replace(
            /-/g,
            "/"
          )}/png/${imageData.image}.png?api_key=DEMO_KEY`;
            setImage(imageUrl);

        }
        fetchData();
    },[date])
   
    return(
        <div>
            <h1>Nasa Epic Image</h1>
            <img src ={image} alt = ""/>
        </div>
    );
}
export default EpicImage;