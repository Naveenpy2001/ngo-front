import React, { useEffect } from "react";

const RazorPaybtn = () => {
       useEffect(() => {
         // Remove any existing script to avoid duplicates
         const existingScript = document.querySelector(
           'script[data-payment_button_id="pl_OIMc73io24Hstc"]'
         );
         if (existingScript) {
           existingScript.remove();
         }

         // Create a script element
         const script = document.createElement("script");
         script.src = "https://checkout.razorpay.com/v1/payment-button.js";
         script.setAttribute("data-payment_button_id", "pl_OIMc73io24Hstc");
         script.async = true;

         // Append the script to the form element
         const form = document.getElementById("razorpay-payment-form");
         if (form) {
           form.appendChild(script);

           // Add event listener to check if the script is loaded
           script.onload = () => {
             console.log("Razorpay button script loaded successfully");
           };

           script.onerror = () => {
             console.error("Payment Button script failed to load.");
           };
         }
       }, []);
    return (
      <>
        <form id="razorpay-payment-form">
          <div className="razorpay-payment-button-container"></div>
        </form>

        
      </>
    );
}

export default RazorPaybtn;
