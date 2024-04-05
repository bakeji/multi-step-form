import React, { useContext } from "react";
import FinishTitle from "../components/summary/summaryTitle";
import SideNav from "../components/side-nav";
import NavBtn from "../components/navBtn";
import TotalAmount from "../components/summary/total-amount";
import { useNavigate } from "react-router-dom"
import { FormContext } from "../context/formcontext";
export default function Finish(){

    const {nextPage, setNextPage} = useContext(FormContext)

    const navigate = useNavigate()
    const nextStep=()=>{
        setNextPage(true)
        navigate("/thanks")
    }
    return(
        <div className="flex">
            <SideNav />
            
            <div className="finish">
        
            <FinishTitle />
            <TotalAmount/>
    
          <div className="nn">
          <NavBtn 
            confirm= {true} 
            nextStep ={nextStep}
            nextPage={nextPage}/>
          </div>
            </div>

            <div className="nn2">
            <NavBtn 
            confirm= {true} 
            nextStep ={nextStep}
            nextPage={nextPage}/>
            </div>
        </div>
    )
}