"use client";

import React, { useState } from "react";
import "./accordion.css";

interface CustomCollapseProps {
  label: string;
  children?: React.ReactNode;
}

const CustomCollapse: React.FC<CustomCollapseProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-question">{label}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default function FaqAccordion() {
  return (
    <div className="faq-container">
      <h6 className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</h6>
      <h1 className="faq-title">
        Got Questions?
        <br /> We’ve Got Answers!
      </h1>

      <div className="faq-wrapper">
        <CustomCollapse label="Q. Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?">
          <p>
            Adipiscing ac lacus vel sed sed tincidunt at. Laoreet consequat donec id fermentum.
            Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae
            sodales nisi enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida
            vitae fringilla eu tellus neque est feugiat.
          </p>
        </CustomCollapse>

        <CustomCollapse label="Q. Another frequently asked question?">
          <p>This is an example of an answer to the second question.</p>
        </CustomCollapse>

        <CustomCollapse label="Q. How do I use this component?">
          <p>Simply import and use the <code>FaqAccordion</code> component in your Next.js project.</p>
        </CustomCollapse>
      </div>
    </div>
  );
}
