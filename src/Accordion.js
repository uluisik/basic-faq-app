import React from "react";

function Accordion({ text, title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span
            onClick={() => {
              setActive(title);
            }}
          >
            CLICK ME
          </span>
        </div>
      </div>
      <div className={(active === title ? "show" : "") + "accordionContent"}>
        <div className="container">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
