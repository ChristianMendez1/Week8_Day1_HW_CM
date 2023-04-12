import { useState } from "react"
import { useEffect } from "react"

function Websitevisitors() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        }, 2000);
    })

return (
  <div id='websitevisitors'>
    <p>Website Views</p>
    <h1>{seconds}</h1>
    <div id='empty'></div>
  </div>
)
}

export default Websitevisitors;