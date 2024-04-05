import React, { useContext, useState } from "react";
import { FormContext } from "../../context/formcontext";
export default function Plans(){
    const [selectedPlan, setSelectedPlan]=useState("")
const btnArray =[{id: "1", pic:"/icon-arcade.svg", plan: "Arcade", month: 9, year: 90},
{id: "2", pic:"/icon-advanced.svg", plan: "Advanced", month: 12, year: 120},
{id: "3", pic:"/icon-pro.svg", plan: "Pro", month: 15, year: 150}
]

const { formData, handleChange} = useContext(FormContext)
function clickedPlan(id){
    setSelectedPlan(id)
}




    return(
        <div  className="plans">
            {btnArray.map((plan)=>(
            <div key={plan.id} onClick={()=>clickedPlan(plan.id)} className={`plan-selection ${selectedPlan===plan.id? "selected" : ""}`}>
               <input type="radio" 
               name="plans" 
               onChange={handleChange}
               checked={formData===plan.plan}
               value={plan.plan}
               id={plan.id} /> 
               <label htmlFor={plan.id}>
               <img src={plan.pic} alt="" />
               <div>
                <h3>{plan.plan}</h3>
                <p className="dur" > ${formData.isYearly? plan.year + "/yr" : plan.month + "/mo"}</p>
                {formData.isYearly && <p className="free">2 Months free</p>}
                </div>
                </label>
            </div>
            ))}
        </div>
    )
}