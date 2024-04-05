import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"

export default function NavBtn({nextStep, confirm, showGoBackButton = true }){
   
    const navigate = useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
    

    return(
        <div className= {showGoBackButton?"nav-btn": "nav-pg1" }>
            {showGoBackButton && 
            <button onClick={goBack}>
                Go Back
            </button>}
            <button className={confirm? "confirm": ""} onClick={nextStep}>{confirm? "Confirm" : "Next Step"}</button>
        </div>
    )
}