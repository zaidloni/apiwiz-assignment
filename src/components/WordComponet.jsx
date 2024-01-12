import { useState } from "react";
import { WORDS_API, options } from "../utils/constant";
import { toast } from "react-toastify";

const WordComponet = () => {
  // input word
  const [word, setWord] = useState("");

  // word data for the table
  const [wordTableData, setWordTableData] = useState({
    characters: 0,
    words: 0,
  });

  // word data from the api
  const [wordDetails, setWordDetails] = useState([]);

  // loading state
  const [loading, setLoading] = useState(false);

  const handleProcessWord = () => {
    // checking if word is null
    if (word.length < 2) {
      toast.error("Please enter a valid word", { autoClose: 2000 });
      return;
    }

    // calculating the characters & word for the table
    let characters = word.length;
    let words = word.trim().split(/\s+/).filter(Boolean).length;

    // setting the state with data
    setWordTableData({ characters, words });

    // calling the api function
    getWordData();
  };

  // function to get the data from the api
  const getWordData = async () => {
    setLoading(true);

    try {
      const response = await fetch(WORDS_API + word, options);
      const data = await response.json();

      if (data?.success == false) {
        toast.error("Word Not Found", {
          autoClose: 2000,
        });
        setWordTableData({ characters: 0, words: 0 });
      } else {
        // setting the data in word details
        setWordDetails(data?.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setWord("");
    }
  };

  // Show loading till the api is called
  if (loading) return <p className="text-3xl animate-pulse">Loading...</p>;

  return (
    <div className="font-DMSans">
      {/* Input & button */}
      <div className="flex gap-6 ">
        <input
          onChange={(e) => setWord(e.target.value)}
          className="flex-1 outline-none border gray_300 rounded-md h-10 pl-3 placeholder:text-gray_500 text-dark"
          type="text"
          placeholder="Type a Word.."
        />
        <button
          onClick={handleProcessWord}
          className="bg-purple text-white text-sm h-10 rounded px-3"
        >
          Process Word
        </button>
      </div>

      {/* Characters & Words table */}
      <table className="border gray_200 w-1/3 mt-11">
        <thead>
          <tr className="h-11 bg-white text-left border gray_200">
            <th className="text-gray font-medium border gray_200 pl-4">
              Characters
            </th>
            <th className="text-gray font-medium pl-4">Words</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray h-12 border gray_200">
            <td className="text-dark font-medium border gray_200 pl-4">
              {wordTableData?.characters}
            </td>
            <td className="text-dark font-medium pl-4">
              {wordTableData?.words}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Details */}
      <div className="border flex gap-3 gray_300 rounded py-6 px-4 mt-4">
        <div>
          <p className="text-gray font-medium leading-none">Defination:</p>
          <p className="text-gray font-medium my-3 leading-none">
            Part of Speech:
          </p>
          <p className="text-gray font-medium leading-none">Synonyms:</p>
          <p className="text-gray font-medium my-3 leading-none">Antonyms:</p>
        </div>

        <div>
          <p className="text-dark font-medium leading-none">
            {wordDetails[0]?.definition || "-"}
          </p>
          <p className="text-dark font-medium my-3 leading-none">
            {wordDetails[0]?.partOfSpeech || "-"}
          </p>
          <p className="text-dark font-medium leading-none">
            {wordDetails[0]?.synonyms ? wordDetails[0]?.synonyms[0] : "-"}
          </p>
          <p className="text-dark font-medium my-3 leading-none">
            {wordDetails[0]?.antonyms ? wordDetails[0]?.antonyms[0] : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordComponet;
