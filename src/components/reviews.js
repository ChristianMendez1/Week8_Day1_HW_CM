import { useEffect } from "react"
import { useState } from "react"

function Reviews() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        }, 6000);
    })

return (
  <div id='reviews'>
    <p>Reviews</p>
    <h1>{seconds}</h1>
  </div>
)
}

export default Reviews;