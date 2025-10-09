import React from "react";

const TechStackLogo = ({ stack }) => {
  return (
    <div className="transition duration-300">
      {stack.map((tech) => (
        <img
          key={tech.name}
          src={`https://cdn.simpleicons.org/${tech.icon}/000000`}
          className="w-[80px] h-[80px] transition duration-100 group-hover:invert group-hover:brightness-200"
        />
      ))}
    </div>
  );
};

export default TechStackLogo;
