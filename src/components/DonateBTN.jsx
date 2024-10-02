import React, { useEffect } from "react";

const DonationButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    script.id = "razorpay-embed-btn-js";
    script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";

    if (!document.getElementById("razorpay-embed-btn-js")) {
      document.body.appendChild(script);
    } else {
      const rzp = window["__rzp__"];
      if (rzp && rzp.init) {
        rzp.init();
      }
    }
  }, []);

  return (
    <div
      className="razorpay-embed-btn"
      data-url="https://pages.razorpay.com/pl_OXdzs9dLANZgZD/view"
      data-text="Donation"
      data-color="#528FF0"
      data-size="large"
    ></div>
  );
};

export default DonationButton;
