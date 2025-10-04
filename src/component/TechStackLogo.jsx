import React from "react";

const TechStackLogo = ({ stack }) => {
    
  return (
    <div>
      {stack.map((tech) => (
        <img
          key={tech.name}
          src={`https://cdn.simpleicons.org/${tech.icon}/000000`}
          className="w-[80px] h-[80px] transition-transform duration-300 "
        />
      ))}
    </div>
  );
};

export default TechStackLogo;
