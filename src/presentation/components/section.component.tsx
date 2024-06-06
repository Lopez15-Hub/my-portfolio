import React, { ReactNode } from "react";

const Section: React.FC<{
  title: string;
  children: ReactNode;
}> = ({ children, title }) => {
  return (
    <section className="container   p-10 ">
      <h1 className="text-4xl font-bold my-10 ">
        <code>{title}</code>
      </h1>
      {children}
    </section>
  );
};

export default Section;
