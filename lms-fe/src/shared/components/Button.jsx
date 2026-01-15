import React, { useState } from "react";

const Button = ({ title, variant }) => {
  const theme = "btn btn-" + variant;
  
  return <button className={theme}>{title}</button>;
};

export default Button;
