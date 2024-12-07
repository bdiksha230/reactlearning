import React, { useCallback, useEffect, useState } from 'react'

const Counter = React.memo(({title, subtitle, increment, unit}) => {
    const [count, setCount] = useState(0);

    const updatcounter = useCallback(() => {
        setCount((prevcount) => prevcount + increment);
    }, [increment]);

    // useEffect(() => {
    //     console.log(`${title} mounted`);
    //     const interval = setInterval(updatcounter, 1000);

    //     return () => {
    //         clearInterval(interval);
    //         console.log(`${title} unmouted`);
    //     }
    // }, [updatcounter, title]);




  return (
    <div className="classname">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <h1>{count} <span>{unit}</span></h1>
      
    </div>
  )
})

export default Counter
