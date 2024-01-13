import TextAnalyzer from "./pages/TextAnalyzer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <ToastContainer />
      <TextAnalyzer />
    </>
  );
};

export default App;
