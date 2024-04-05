import React, { useContext } from "react";
import { FormContext } from "../../context/formcontext";
export default function ToggleBtn(){
    const { formData, handleChange} = useContext(FormContext)
    return(
        <div className="toggle-btn">
            <p className="monthly">Monthly</p>
        <div className="toggle">
            <label className="switch">
                <input
                 type="checkbox"
                 checked={formData.isYearly}
                 onChange={handleChange}
                 name="isYearly"
                 />
                <span className="slider round"></span>
            </label>
        </div>
        <p className="yrly">Yearly</p>
        </div>
    )
}