import "../App.css";
import { useState } from "react";

function Search() {
    return (
        <div className="container mt-3">
            <form class="col justify-content-center align-items-center input-group" >
                <input type="text" class="form-control ms-4 bg-white input-sm" name="location" id="location" aria-describedby="helpId" placeholder="Enter your location" />
                <button type="submit" class="btn btn-info">Go!</button>
            </form>
        </div>      
    )
};

export default Search;