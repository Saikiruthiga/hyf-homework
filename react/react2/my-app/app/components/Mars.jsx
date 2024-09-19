"use client"
import React from "react"
import { useState,useEffect } from "react"
import styles from "./mars.module.css"
const Mars=()=>{
    const [data,setData] = useState(null);
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY");
            const result = await response.json();
            setData(result);
        }
        fetchData();
    },[])
    if(!data || !data.photos || data.photos.length===0){
        return <p>No photos available</p>
    }
    return(
        <div>
            {data.photos.map((photo)=>(
                <div key={photo.id} className={styles.container} >
                <p>{photo.camera.name}</p>
                <img className={styles.image} src= {photo.img_src} alt=""/>
                </div> 
            ))}

        </div>
    );
}
export default Mars;