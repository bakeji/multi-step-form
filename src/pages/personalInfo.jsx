import React, { useContext, useState } from "react";
import SideNav from "../components/side-nav";
import InfoTitle from "../components/info-component/title";
import InfoForm from "../components/info-component/info-form";
import NavBtn from "../components/navBtn";
import { FormContext } from "../context/formcontext";
import { useNavigate } from "react-router-dom"
export default function PersonalInfo(){
    const [errorMessage, setErrorMessage]=useState("")
    const { formData, nextPage, setNextPage} = useContext(FormContext)

    const navigate = useNavigate()
    const nextStep=()=>{
    if(formData.name!=="" && formData.email !=="" && formData.phone !==""){
        setNextPage(true)
        navigate("/plans")
    }
    else{
        setErrorMessage("This field is required")
        
        

    }
}


    return(
        <div className="flex">
            <SideNav />
            
            <div className="personal">
                    <InfoTitle />
                    <InfoForm
                    errorMessage={errorMessage} />
        
           

    
          <div className="nn">
          <NavBtn
                    nextStep ={nextStep}
                    nextPage={nextPage}
                showGoBackButton = {false} />
          </div>
                 </div>

                 <div className="nn2">

                 <NavBtn 
                    nextStep ={nextStep}
                    nextPage={nextPage}
                showGoBackButton = {false} />
                </div>
                 

           
        </div>

    )
}