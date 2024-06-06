import React from "react";

const Chip: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="bg-purple-600 w-fit mx-auto rounded-full shadow-sm font-light p-2 my-auto">
      <p className="text-purple-100 ">{label}</p>
    </div>
  );
};

export default Chip;
