import {useState} from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

   const increaseCount = () => {
       setCount(count + 1);
   }

   const decreaseCount =  () => {
       setCount(count - 1);
    }

    const resetCount = () => {
       setCount(0);
    }

    return (
        <>
            <h1 className="text-center my-12">Count is <strong>{count}</strong></h1>
            <div className="text-center space-x-4">
                <button onClick= {increaseCount} className="bg-cf-dark-gray text-white py-2 px-4">
                    Increase
                </button>
                <button onClick= {decreaseCount} disabled={count <= 0} className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4">
                    Decrease
                </button>
            </div>
            <div className="text-center mt-4">
                <button onClick= {resetCount} disabled={count === 0} className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4">
                    Reset
                </button>
            </div>

        </>
    )
}
export default  Counter ;