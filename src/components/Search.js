import { useState } from "react";

function Search() {
    return (
        <div className="container-fluid text-center mt-3">
            <form class="input-group text-center" >
                <input type="text" class="form-control ms-4 bg-white" name="location" id="location" aria-describedby="helpId" placeholder="Enter your location" />
                <button type="submit" class="btn btn-info">Go!</button>
            </form>
        </div>      
    )
};

export default Search;