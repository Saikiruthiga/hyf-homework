"use client"
import { useState,useRef } from "react";
import { useRouter } from "next/navigation";

import { Typography,Button,Container, Box,TextField } from "@mui/material";

const Form = ()=>{
    const [data,setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })
    const [errors,setErrors]= useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false
    })
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        setErrors({...errors,[e.target.name]:false})
    }

    const fnRef = useRef(null);
    const lnRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const handleKeyPress = (e,ref)=>{
        if(e.key==="Enter"){
            e.preventDefault();
            ref.current.focus();
        }
    }

    const router = useRouter();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newErrors = {firstName:!data.firstName,
            lastName:!data.lastName,
            email: !/\S+@\S+\.\S+/.test(data.email),
            phone: !/^\d{10}$/.test(data.phone),
        }
        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some((error)=>error);
        if(!hasErrors){
        console.log(data);
        setData({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });
    alert("Form submitted successfully")
   router.push("/")

    }
};
    return(
        <div>
            <Container component ="main" maxWidth="xs">
            <Box sx={{display:"flex",
                flexDirection:"column",
                alignItems:"center",
                padding:3,
                borderRadius:1,
                
            }}>
            
                <Box component="form" onSubmit={handleSubmit} sx={{width:"100%"}}>
                    <Typography variant="h6">Sign Up</Typography>
                    <Box sx={{mb:2,width:"100%"}}>
                    <TextField label="First Name"
                    name="firstName" type="text" value = {data.firstName} onChange={handleChange} inputRef={fnRef}
                    onKeyDown={(e)=>handleKeyPress(e,lnRef)} error ={errors.firstName}
                    helperText = {errors.firstName?"First name is required":""} />
                    </Box>
                    <Box sx={{mb:2,width:"100%"}}>
                    <TextField label="Last Name"
                    name="lastName" type="text"  value={data.lastName} onChange={handleChange} inputRef={lnRef}
                    onKeyDown={(e)=>handleKeyPress(e,emailRef)} error ={errors.lastName} helperText ={errors.lastName?"Last name is required":""}  />
                    </Box>
                    <Box sx={{mb:2,width:"100%"}}>
                    <TextField label="Email"
                    name="email" type="email"   value={data.email} onChange={handleChange} inputRef={emailRef} 
                    onKeyDown={(e)=>handleKeyPress(e,phoneRef)} error={errors.email} helperText={errors.email?"Invalid email address":""} />
                    </Box>
                    <Box sx={{mb:2,width:"100%"}}>
                    <TextField label="Phone"
                    name="phone" type="tel"   value ={data.phone} onChange={handleChange} inputRef={phoneRef} 
                    onKeyDown={(e)=>{if(e.key==="Enter"){e.preventDefault();}}} error={errors.phone} helperText={errors.phone?"must be 10 digits":""} />
                    </Box>
                    <Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Sign Up</Button>
                </Box>
            </Box>
        </Container>
        </div>
    );
}

export default Form;