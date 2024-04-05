import React, { useContext } from "react";
import { FormContext } from "../../context/formcontext";

export default function InfoForm(props){
    const { formData, handleChange} = useContext(FormContext)
    return(
        <div className="info-form">
            <form action="">
                <div className= {`name ${formData.name==="" && props.errorMessage!==""? "input-error" : ""}`}>
                   <div className="label">
                    <label htmlFor="name">Name</label>
                    
                        {formData.name==="" && <p className="errorMessage">{props.errorMessage}</p>}
                    
                    </div> 
                    <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required />
                </div>
                   

                <div className= {`email ${formData.email==="" && props.errorMessage!==""? "input-error" : ""}`}>
                    <div className="label">
                    <label htmlFor="email">Email Address</label>
                    {formData.email ==="" && <p className="errorMessage">{props.errorMessage}</p>}
                    </div>
                    <input
                    name= "email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required/>
                </div>

        


                <div className={`phone ${formData.phone ==="" &&props.errorMessage!==""? "input-error" : ""}`}>
                   <div className="label">
                        <label htmlFor="phone">Phone Number</label>
                        {formData.phone === "" && <p className="errorMessage">{props.errorMessage}</p>}
                    </div>
                    <input name="phone"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required />
                </div>
            </form>
        </div>
    )
}