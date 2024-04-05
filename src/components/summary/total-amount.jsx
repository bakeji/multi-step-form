import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/formcontext";
import { Link } from "react-router-dom"

export default function TotalAmount(){
    const [total, setTotal] = useState("")
   
    const { formData,btnArray} = useContext(FormContext)

    const selectedPlan = btnArray.find((plan)=>
        plan.plan===formData.plans)

    function calculateTotal(){
        const plansCost = selectedPlan?.price.month
        const addons1 = formData.isOnlineService? 1: ""   
        const addons2 = formData.isLargerStorage? 2 : ""
        const addons3 = formData.isCustomizable? 2 : ""
     const totalPrice = (plansCost + addons1 +addons2+ addons3)
        
     if(formData.isYearly){
        setTotal(totalPrice * 10 + "/yr")
     }
     else{
        setTotal(totalPrice +"/mo")
     }
    }
    useEffect(()=>{
        calculateTotal()
    }, [])
            
    return(
        <div className="total-amount">
            <div className="all-plans">
               <div className="plan1">
                    <span>
                    <p className="form-plan">{formData.plans} ({formData.isYearly? "Yearly" : "Monthly" })</p>
                        <Link to={'/plans'}>
                        change
                        </Link>
                    </span>
                    <p className="sp"> +{formData.isYearly? selectedPlan?.price.year + "/yr": selectedPlan?.price.month + "/mo"}</p>
                    </div>
                    <hr/>

              
                    {formData.isOnlineService && <div className="addons-plan">
                            <p>Online Service</p>
                            <p>+$1{formData.isYearly? "0/yr" : "/mo"}</p>
                        </div>}

                        {formData.isLargerStorage&&<div className="addons-plan">
                            <p>Larger Storage</p>
                            <p>+$2{formData.isYearly? "0/yr" : "/mo"}</p>
                        </div>
                        }

                        {formData.isCustomizable&&<div className="addons-plan">
                            <p>Customizable Profit</p>
                            <p>+$2{formData.isYearly? "0/yr" : "/mo"}</p>
                        </div>
                        }

            </div>

            <div className="total">
                <p>Total({formData.isYearly? "per year" : "per month"})</p>
                <p> +${total} </p>
            </div>
            
        </div>
    )
}