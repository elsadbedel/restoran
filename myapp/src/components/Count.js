import { useState, useEffect } from "react";
const Count = () => {
    const [count, setCount] = useState(10)
    // const [Show, setShow] = useState(false);
    useEffect(() => {
        const intervalId = setInterval(() => {
            // console.log(count)
            if (count > 0) {
                setCount((prev) => prev - 1)
            }
            else {
                clearInterval(intervalId);
            }
        }, 1000)
        return () => clearInterval(intervalId);
    }, [count]);

    return (
        <div style={{ fontSize: '70px', textAlign: 'center' }}>
            {
                count > 0 ? <h1 > Tatlı rüyalar pizzadan yapılır. {count} </h1> : null
            }
        </div>
    );
};

export default Count;