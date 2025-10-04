import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}


const CounterAdvanced = () => {
    // const [count, setCount] = useState(0);
    // const[lastAction, setLastAction] = useState("");
    // const[time,setTime] = useState("");

    const[state, setState] = useState<CounterState>({
        count: 0,
        lastAction: "",
        time: ""
    });

    const getCurrentTime = () => new Date().toLocaleTimeString("el-GR");

    const increaseCount = () => {
     setState({
         count: state.count + 1,
         lastAction: "Increase",
         time: state.time = getCurrentTime()
     })
    }

    const decreaseCount =  () => {
        setState({
            count: state.count - 1,
            lastAction: "Decrease",
            time: state.time = getCurrentTime()
        })
    }

    const resetCount = () => {
        setState({
            count: 0,
            lastAction: "Reset",
            time: state.time = getCurrentTime()
        })
    }

    return (
        <>
            <h1 className="text-center my-12">Count is <strong>{state.count}</strong></h1>
            <div className="text-center space-x-4">


                <CounterButton onClick={increaseCount} label="Increase" addClasses="bg-cf-dark-gray" />



                <CounterButton onClick={decreaseCount} label="Decrease" disabled={state.count === 0} addClasses="bg-cf-dark-gray disabled: disabled:bg-cf-gray" />

            </div>

            <div className="text-center mt-4">


                <CounterButton onClick={resetCount} label="Reset" disabled={state.count === 0} addClasses="bg-cf-dark-red disabled:bg-red-500" />


            </div>

            <p className="text-center text-cf-dark-gray-pt-4 pt-8">Last Change: <strong>{state.lastAction || "-"}</strong> at <strong>{state.time || "-"}</strong></p>


        </>
    )
}
export default  CounterAdvanced;