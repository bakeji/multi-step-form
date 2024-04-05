import React, { useContext } from "react";
import AddOnsTitle from "../components/add-ons/addons-title";
import AddOnsPrices from "../components/add-ons/addons-prices";
import SideNav from "../components/side-nav";
import NavBtn from "../components/navBtn";
import { useNavigate } from "react-router-dom"
import { FormContext } from "../context/formcontext";

export default function AddOns(){
    const { formData, nextPage, setNextPage} = useContext(FormContext)

    const navigate = useNavigate()
    const nextStep=()=>{
    if(formData.isOnlineService !== false || formData.isLargerStorage !== false || formData.isCustomizable !== false){
        setNextPage(true)
        navigate("/summary")
    }
    else{
        alert("Please select an add-on")
    }
}

    return(
        <div className="flex">
            <SideNav />
            
            <div className="add-ons">
                <AddOnsTitle />
                <AddOnsPrices />
              <div className="nn">
              <NavBtn
                nextStep={nextStep} />
              </div>
                
            </div>

            <div className="nn2">
            <NavBtn
                nextStep={nextStep} />
            </div>
        </div>
    )
}