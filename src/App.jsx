import React, { useEffect, useState } from "react";
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import PersonalInfo from "./pages/personalInfo";
import PlanPage from "./pages/planPage";
import AddOns from "./pages/add-ons";
import Finish from "./pages/summary";
import ThanksPage from "./pages/thanks-page";
import { FormContext } from "./context/formcontext";

export default function App(){
    const btnArray =[
    {id: "1", pic:"/icon-arcade.svg", plan: "Arcade", price:{ month: 9, year: 90} },
    {id: "2", pic:"/icon-advanced.svg",  plan: "Advanced", price:{month: 12, year: 120} },
    {id: "3", pic:"/icon-pro.svg", plan: "Pro", price:{month: 15, year: 150} }
    ]
    
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        phone: "",
        plans: "",
        isYearly: false,
        isOnlineService: false,
        isLargerStorage: false,
        isCustomizable: false,
        
    })

    const [nextPage, setNextPage] = useState(false)
    
    function handleChange(event){
        const {name, value, type, checked}= event.target
        setFormData(prev =>{
            return{
                ...prev,
                [name]: type==="checkbox"? checked  : value 
            }
        })
    }

    useEffect(()=>{
    },[formData])


    return(
    <div className="app">
        <FormContext.Provider value={{formData,nextPage, setNextPage, btnArray, handleChange}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={ <PersonalInfo />} />
                <Route path="/plans" element ={<PlanPage />} />
                <Route path="/add-ons" element ={<AddOns />} />
                <Route path="/summary" element = {<Finish />} />
                <Route path="/thanks" element = {<ThanksPage />} />
            </Routes>        
        </BrowserRouter>
        </FormContext.Provider>

        

       
    </div>
    )
}