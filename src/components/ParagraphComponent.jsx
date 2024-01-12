import { useState } from "react";

const ParagraphComponent = () => {
  const [paraDetails, setParaDetails] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    spaces: 0,
    punctuations: 0,
  });
  const handleParaChange = (e) => {
    const text = e.target.value;
    // Counting characters
    const characters = text.length;

    // Counting words
    const words = text.trim().split(/\s+/).filter(Boolean).length;

    // Counting sentences
    const sentences = (text.match(/[.!?]+/g) || []).length;

    // Counting paragraphs
    const paragraphs = (text.match(/\n+/g) || []).length;

    // Counting spaces
    const spaces = text.split(/\s+/).length - 1;

    // Counting punctuations
    const punctuations = (text.match(/[.,'":?!()[\]{}\-–—…:;]/g) || []).length;

    // // counting characters
    // let characters = text.length;

    // // Counting words
    // const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // // Counting sentences
    // const sentences = text
    //   .split(/[.!?]+/)
    //   .filter((sentence) => sentence.trim() !== "").length;

    // // Counting paragraphs
    // const paragraphs = text
    //   .split(/\n/)
    //   .filter((paragraph) => paragraph.trim() !== "").length;

    // // couting spaces
    // let spaces = text.split(" ").length - 1;

    // // counting punctuations
    // let punctuations = (text.match(/[.,'":?!()[\]{}\-–—…:;]/g) || []).length;

    // setting the values in paraDetails
    setParaDetails(() => ({
      characters,
      words,
      sentences,
      paragraphs,
      spaces,
      punctuations,
    }));
  };
  return (
    <div className="font-DMSans">
      <textarea
        onChange={handleParaChange}
        placeholder="Type, or copy/paste your content here."
        className="w-full placeholder:text-gray_500 shadow-inputShadow text-dark py-2 px-3 resize-none outline-none border gray_300 rounded-md h-60"
      ></textarea>

      {/* table showing details */}
      <table className="w-full border gray mt-11">
        <thead>
          <tr className="bg-white h-11">
            <th className="text-gray font-medium border gray text-left pl-4">
              Characters
            </th>
            <th className="text-gray font-medium border gray text-left pl-4">
              Words
            </th>
            <th className="text-gray font-medium border gray text-left pl-4">
              Sentences
            </th>
            <th className="text-gray font-medium border gray text-left pl-4">
              Paragraphs
            </th>
            <th className="text-gray font-medium border gray text-left pl-4">
              Spaces
            </th>
            <th className="text-gray font-medium border gray text-left pl-4">
              Punctutations
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray h-12">
            <td className="text-dark font-medium pl-4  border gray">
              {paraDetails?.characters}
            </td>
            <td className="text-dark font-medium pl-4  border gray">
              {paraDetails?.words}
            </td>
            <td className="text-dark font-medium pl-4  border gray">
              {paraDetails?.sentences}
            </td>
            <td className="text-dark font-medium pl-4  border gray">
              {paraDetails?.paragraphs}
            </td>
            <td className="text-dark font-medium pl-4  border gray">
              {paraDetails?.spaces}
            </td>
            <td className="text-dark font-medium pl-4  border gray">
              {paraDetails?.punctuations}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParagraphComponent;
