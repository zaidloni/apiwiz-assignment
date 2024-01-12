// api endpoint
export const WORDS_API = "https://wordsapiv1.p.rapidapi.com/words/";

// api options
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};
