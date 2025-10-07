// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";


// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWIthProp from "./components/ArrowFunctionalComponentWIthProp.tsx";
// import ArrowFunctionalComponentWIthPropType from "./components/ArrowFunctionalComponentWIthPropType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
// import {useEffect} from "react";
// import Timer from "./components/Timer.tsx";
// import WindowSize from "./components/WindowSize.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import PreviousValue from "./components/PreviousValue.tsx";
import CounterWithRef from "./components/CounterWithRef.tsx";
// import {useEffect} from "react";
// import NameChanger from "./components/NameChanger.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {

    // useEffect(() => {
    //     const id = setInterval(() => console.log("tick"), 1000)
    //     return() => clearInterval(id)
    // }, []);
    //
    // useEffect(() => {
    //     let counter: number = 1;
    //     const id : number = setInterval(() => console.log(counter++), 1000)
    //     return () => clearInterval(id)
    // }, []);


    // useEffect(setup,[]);
    //
    // useEffect(() =>{
    //     //setup
    //     return() => {
    //         //clean up
    //     }
    //
    // },[]);

  return (
    <>
        {/*<ViteIntro />*/}
        {/*<ClassComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<ArrowFunctionalComponent />*/}
        {/*<ArrowFunctionalComponentWIthProp title="is an arrow functional component with props" />*/}
        {/*<ArrowFunctionalComponentWIthProp title="Title2" />*/}


        {/*<Card title="Card">*/}
        {/*    <ArrowFunctionalComponentWIthPropType title="is a functional component with 2 props" description=*/}
        {/*        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, et."*/}
        {/*    />*/}
        {/*</Card>*/}

             <Layout>
                 {/*<ArrowFunctionalComponentWIthPropType title="is a functional component with 2 props" description=*/}
                 {/*    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, et."*/}
                 {/*/>*/}

                 {/*<FunctionalComponentWithState />*/}
                 {/*<ClassComponentWithState />*/}

                 {/*<Counter />*/}

                 {/*<NameChanger />*/}

                 {/*<CounterWithMoreStates />*/}
                 {/*<CounterWithCustomHook/>*/}
                 {/*<NameChangerWithEffect />*/}
                 {/*<Timer />*/}
                 {/*<WindowSize />*/}
                 {/*<FocusInput />*/}
                 {/*<PreviousValue />*/}
                 <CounterWithRef />

             </Layout>


    </>
  )
}

export default App
