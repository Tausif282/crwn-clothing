import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignin, ...otherprops }) => {
  return (
    <div>
      <button
        className={`${isGoogleSignin ? "google-sign-in" : ""} custom-button`}
        {...otherprops}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
