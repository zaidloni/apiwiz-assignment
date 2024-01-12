//in api if there is a space then it wont send any response

import React, { useState } from "react";
import WordComponet from "./WordComponet";
import ParagraphComponent from "./ParagraphComponent";
import Toggle from "./Toggle";
import Heading from "./Heading";

const TextAnalyzer = () => {
  const [selectedToggle, setSelectedToggle] = useState("word");

  return (
    <section className="p-10">
      {/* Heading */}
      <Heading />

      {/* Toggle for word OR paragraph */}
      <Toggle
        selectedToggle={selectedToggle}
        setSelectedToggle={setSelectedToggle}
      />

      {/* Word Container */}
      {selectedToggle == "word" && <WordComponet />}

      {/* Paragraph Container */}
      {selectedToggle == "paragraph" && <ParagraphComponent />}
    </section>
  );
};

export default TextAnalyzer;
