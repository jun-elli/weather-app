import "../App.css";
import { useState } from "react";

function Search({ setLocation }) {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send to parent
    setLocation(input);
    //reset input field
    setInput("");
  };

  return (
    <div className="container mt-3">
      <form class="col justify-content-center align-items-center input-group">
        <input
          type="text"
          class="form-control ms-4 bg-white input-sm"
          name="location"
          id="location"
          aria-describedby="helpId"
          placeholder="Enter your location"
          value={input}
          onChange={handleOnChange}
        />
        <button type="submit" class="btn btn-info" onClick={handleSubmit}>
          Go!
        </button>
      </form>
    </div>
  );
}

export default Search;
