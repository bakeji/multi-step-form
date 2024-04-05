import React, { useContext } from "react";
import { FormContext } from "../../context/formcontext";

export default function AddOnsPrices(){
    const { formData, handleChange} = useContext(FormContext)
    return(
        <div className="addons-prices">
            <div className={`checkbox ${formData.isOnlineService? "chng-border" : ""}`}>
            <input 
            type="checkbox"
            onChange={handleChange}
            value="online service"
            checked={formData.isOnlineService}
            name="isOnlineService" 
            id="online" />
           <span>
            <p>Online service</p>
            <p>Acess to multiplayer games</p>
           </span>
           <p className="price"> +$1{formData.isYearly? "0/yr" : "/mo"} </p>
            </div>

            <div className= {`checkbox ${formData.isLargerStorage? "chng-border" : ""}`} >
            <input 
             type="checkbox" 
             onChange={handleChange}
            checked={formData.isLargerStorage}
             value="larger storage"
            name="isLargerStorage" 
             id="storage" />
           <span>
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
           </span>
           <p className="price"> +$2{formData.isYearly? "0/yr" : "/mo"} </p>
            </div>
             
            <div className= {`checkbox ${formData.isCustomizable? "chng-border" : ""}`} >
            <input 
            type="checkbox"
            onChange={handleChange}
            value="customizable profit"
            checked={formData.isCustomizable}
            name="isCustomizable" 
            id="profit" />
           <span>
            <p>Customizable Profit</p>
            <p>Custom theme on your profile</p>
           </span>
           <p className="price"> +$2{formData.isYearly? "0/yr" : "/mo"} </p>
            </div>

            

        </div>
    )
}