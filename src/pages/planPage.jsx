import React, { useContext, useEffect } from "react";
import SideNav from "../components/side-nav";
import PlanTitle from "../components/plan/plan-title";
import Plans from "../components/plan/plans";
import NavBtn from "../components/navBtn";
import ToggleBtn from "../components/plan/toggle-btn";
import { FormContext } from "../context/formcontext";
import { useNavigate } from "react-router-dom"

export default function PlanPage(){
    const { formData, nextPage, setNextPage} = useContext(FormContext)

    const navigate = useNavigate()
    const nextStep=()=>{
    if(formData.plans!==""){
        setNextPage(true)
        navigate("/add-ons")
    }
}
    
  
    return(
        <div className="flex">
            <SideNav />
            

                <div className="plan-page">
                
                    <PlanTitle />
                    <Plans />
                    <ToggleBtn />

            
                <div className="nn">
                <NavBtn 
                nextStep={nextStep}
                />
                </div>
            </div>

            <div className="nn2 ns">
            <NavBtn 
                nextStep={nextStep}
                />
            </div>
        </div>
    )
}