import React from "react";
import Button from "./Button";

const buttonNames = ["All", "Gaming", "Programming", "Coding", "Music","React", "Java", "DSA","Developers"];

const ButtonsList = () => {
  return (
    <div className="flex scroll-x">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonsList;
