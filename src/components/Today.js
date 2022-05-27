import { useState } from "react";

function Today({isToday}) {
    return (
        <div>
            {isToday && <p>I show the weather for today</p>}
        </div>
    )
};

export default Today;