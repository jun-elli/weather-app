import { useState } from "react";

function FiveDays({isToday}) {
    return (
        <div>
            {!isToday && <p>I show the weather for the next 5 days</p>}
        </div>
    )
};

export default FiveDays;