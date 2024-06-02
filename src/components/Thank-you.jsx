import React from "react";
import "../components-styles/Thank-you.scss";

function ThankYou() {
  return (
    <div id="thank-you">
      <div id="wrapper">
        <img src="/images/icon-thank-you.svg" alt="checkmark icon" />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default ThankYou;
