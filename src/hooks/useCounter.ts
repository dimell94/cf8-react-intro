import {useState} from "react";

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

export const useCounter = () => {
    const [state, setState] = useState<CounterState>({
        count: 0,
        lastAction: "",
        time: "",
    })

    const getCurrentTime = () => new Date().toLocaleTimeString("el-GR");

    const increase = () => {
        setState({
            count: state.count + 1,
            lastAction: state.lastAction = "Increase",
            time: state.time = getCurrentTime()
        })
    }

    const decrease = () => {
        setState({
            count: state.count - 1,
            lastAction: state.lastAction = "Decrease",
            time: state.time = getCurrentTime()
        })
    }

    const reset = () => {
        setState({
            count: state.count = 0,
            lastAction: state.lastAction = "Reset",
            time: state.time = getCurrentTime()
        })
    }

    return {
        count: state.count,
        lastAction: state.lastAction,
        time: state.time,
        increase,
        decrease,
        reset
    }
}