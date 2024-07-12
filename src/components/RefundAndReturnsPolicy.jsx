import React from "react";
import '../css/refund.css' // Assuming you will style it in a separate CSS file

function RefundAndReturnsPolicy() {
  return (
    <div className="refund-returns-policy">
      <h1>Refund and Returns Policy</h1>
      <p className="policy-section-content">
        Our refund and returns policy lasts 30 days. If 30 days have passed
        since your purchase, we can’t offer you a full refund or exchange.
      </p>
      <p className="policy-section-content">
        To be eligible for a return, your item must be unused and in the same
        condition that you received it. It must also be in the original
        packaging.
      </p>
      <h2 className="policy-section-header">Refund Policy</h2>
      <p className="policy-section-content">
        At Indylinens we want you to be completely satisfied with your purchase.
        If you are not, contact us at any time within 30 days of your purchase
        and we will make it right. This may include a refund or store credit.
      </p>
      <p className="policy-section-content">
        The product must be in its original packaging and accompanied by the
        original receipt. Shipping costs are not refundable. Customers are
        responsible for return shipping costs when returning products.
      </p>
      <p className="policy-section-content">
        All sales of mark-down / sale items are final and non-returnable.
      </p>
      <p className="policy-section-content">
        Instructions: Pack the items back in the parcel and send it back to us.
        Please contact Indylinens via e-mail at{" "}
        <a href="mailto:tsaritservices@gmail.com">tsaritservices@gmail.com</a>{" "}
        to receive return instructions.
      </p>
    </div>
  );
}

export default RefundAndReturnsPolicy;
