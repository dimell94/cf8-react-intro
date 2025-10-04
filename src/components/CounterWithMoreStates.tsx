import {useState} from "react";
import CounterButton from "./CounterButton.tsx";


const CounterWithMoreStates = () => {
    const [count, setCount] = useState(0);
    const[lastAction, setLastAction] = useState("");
    const[time,setTime] = useState("");

    const getCurrentTime = () => new Date().toLocaleTimeString("el-GR");

    const increaseCount = () => {
        setCount(count + 1);
        setLastAction("Increased")
        setTime(getCurrentTime());
    }

    const decreaseCount =  () => {
        setCount(count - 1);
        setLastAction("Decreased")
        setTime(getCurrentTime());
    }

    const resetCount = () => {
        setCount(0);
        setLastAction("Reseted")
        setTime(getCurrentTime());
    }

    return (
        <>
            <h1 className="text-center my-12">Count is <strong>{count}</strong></h1>
            <div className="text-center space-x-4">


                <CounterButton onClick={increaseCount} label="Increase" addClasses="bg-cf-dark-gray" />



                <CounterButton onClick={decreaseCount} label="Decrease" disabled={count === 0} addClasses="bg-cf-dark-gray disabled: disabled:bg-cf-gray" />

            </div>

            <div className="text-center mt-4">


                <CounterButton onClick={resetCount} label="Reset" disabled={count === 0} addClasses="bg-cf-dark-red disabled:bg-red-500" />


            </div>

            <p className="text-center text-cf-dark-gray-pt-4 pt-8">Last Change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>


        </>
    )
}
export default  CounterWithMoreStates ;