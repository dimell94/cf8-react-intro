// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";


// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWIthProp from "./components/ArrowFunctionalComponentWIthProp.tsx";
// import ArrowFunctionalComponentWIthPropType from "./components/ArrowFunctionalComponentWIthPropType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
import Counter from "./components/Counter.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {


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
                 <Counter />

             </Layout>


    </>
  )
}

export default App
