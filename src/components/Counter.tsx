import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

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
                {/*<button onClick= {increaseCount} className="bg-cf-dark-gray text-white py-2 px-4">*/}
                {/*    Increase*/}
                {/*</button>*/}

                <CounterButton onClick={increaseCount} label="Increase" addClasses="bg-cf-dark-gray" />

            {/*    <button onClick= {decreaseCount} disabled={count <= 0} className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4">*/}
            {/*        Decrease*/}
            {/*    </button>*/}


                <CounterButton onClick={decreaseCount} label="Decrease" disabled={count === 0} addClasses="bg-cf-dark-gray disabled: disabled:bg-cf-gray" />

            </div>

            <div className="text-center mt-4">
            {/*    <button onClick= {resetCount} disabled={count === 0} className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4">*/}
            {/*        Reset*/}
            {/*    </button>*/}

                <CounterButton onClick={resetCount} label="Reset" disabled={count === 0} addClasses="bg-cf-dark-red disabled:bg-red-500" />


            </div>


        </>
    )
}
export default  Counter ;