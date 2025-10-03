// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";


import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWIthProp from "./components/ArrowFunctionalComponentWIthProp.tsx";
import ArrowFunctionalComponentWIthPropType from "./components/ArrowFunctionalComponentWIthPropType.tsx";
import Card from "./components/Card.tsx";

function App() {


  return (
    <>
        {/*<ViteIntro />*/}
        <ClassComponent />
        <FunctionalComponent />
        <ArrowFunctionalComponent />
        <ArrowFunctionalComponentWIthProp title="is an arrow functional component with props" />
        <ArrowFunctionalComponentWIthProp title="Title2" />
        <ArrowFunctionalComponentWIthPropType title="is a functional component with 2 props" description=
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, et."
        />

        <Card title="Card">
            <ArrowFunctionalComponentWIthPropType title="is a functional component with 2 props" description=
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, et."
            />
        </Card>
    </>
  )
}

export default App
