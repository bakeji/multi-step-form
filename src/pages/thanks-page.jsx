import React from "react";
import SideNav from "../components/side-nav";

export default function ThanksPage(){
    return(
        <div className="flex">
            <SideNav />
            <div className="appre">
                <img src="/icon-thank-you.svg" alt="thanks-icon" />
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscribtion! We hope you have fun using our platform. if you ever need support please feel free to email us at support@loremgaming.com</p>
            </div>
        </div>
    )
}