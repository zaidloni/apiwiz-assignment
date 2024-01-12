import { useState } from "react";
import Heading from "../components/Heading";
import Toggle from "../components/Toggle";
import WordComponet from "../components/WordComponet";
import ParagraphComponent from "../components/ParagraphComponent";

const TextAnalyzer = () => {
  // toggle state to maintain selected one
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
